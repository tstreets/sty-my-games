import React from 'react';
import { Form, Button, Icon, Header, Grid } from 'semantic-ui-react';

require('./index.css');

export const WizardFormHeader = ({ children, content }) => {
    return <React.Fragment>{children || content}</React.Fragment>;
};

export const WizardFormPage = ({ header, content, children }) => {
    const isChildrenArr = !!children?.length;

    const otherChildren = isChildrenArr
        ? children.filter(c => {
              if (typeof c === 'string') return false;
              return !c?.props?.isWizardFormHeader;
          })
        : null;

    const headerChild = isChildrenArr
        ? children.find(c => {
              if (typeof c === 'string') return false;
              return c?.props?.isWizardFormPage;
          })
        : null;

    return (
        <React.Fragment>
            <fieldset>
                <legend>{header || headerChild}</legend>
                {!isChildrenArr ? children || content : otherChildren}
            </fieldset>
        </React.Fragment>
    );
};

export const WizardFormButtons = ({
    pageNumber,
    setPageNumber,
    totalPages,
    onDone,
}) => {
    function goBack() {
        setPageNumber(pageNumber - 1);
    }

    function goForward() {
        setPageNumber(pageNumber + 1);
    }

    function formComplete() {
        onDone();
        setPageNumber(0);
    }

    return (
        <React.Fragment>
            <Form.Group className='btns' widths='equal'>
                <Form.Field>
                    {pageNumber > 0 ? (
                        <Button fluid onClick={goBack}>
                            <Icon name='arrow left' />
                            Back
                        </Button>
                    ) : null}
                </Form.Field>
                <Form.Field>
                    {pageNumber < totalPages ? (
                        <Button color='green' fluid onClick={goForward}>
                            Next
                            <Icon name='arrow right' />
                        </Button>
                    ) : (
                        <Button color='green' fluid onClick={formComplete}>
                            Done
                            <Icon name='check' style={{ paddingLeft: '8px' }} />
                        </Button>
                    )}
                </Form.Field>
            </Form.Group>
        </React.Fragment>
    );
};

const WizardForm = ({
    fluid,
    className,
    style,
    children,
    pages = [],
    header,
    onDone,
}) => {
    const [pageNumber, setPageNumber] = React.useState(0);
    const isChildrenArr = !!children?.length;

    let classString = 'wizard';
    if (className) classString += ` ${className}`;
    if (fluid) classString += ` fluid`;

    const buttons = isChildrenArr
        ? children.find(c => {
              if (typeof c === 'string') return false;
              return c.props?.isWizardFormButtons;
          })
        : children &&
          typeof children !== 'string' &&
          children?.props?.isWizardFormButtons
        ? children
        : null;

    const wizardPages = isChildrenArr
        ? children.filter(c => {
              if (typeof c === 'string') return false;
              return c.props?.isWizardFormPage;
          })
        : children &&
          typeof children !== 'string' &&
          children?.props?.isWizardFormButtons
        ? [children]
        : null;

    const wizardHeader = isChildrenArr
        ? children.find(c => {
              if (typeof c === 'string') return false;
              console.log(c);
              return c.props?.isWizardFormHeader;
          })
        : children &&
          typeof children !== 'string' &&
          children?.props?.isWizardFormHeader
        ? children
        : null;

    return (
        <React.Fragment>
            <Form className={classString} style={style}>
                <Header as='h1'>
                    {wizardHeader || header || 'Wizard Form'}
                </Header>
                <Grid columns='1'>
                    <Grid.Column textAlign='center'>
                        {(wizardPages || pages).map((p, i) => {
                            return (
                                <React.Fragment key={`page-circle-${i}`}>
                                    <Icon
                                        name={`circle${
                                            i !== pageNumber ? ' outline' : ''
                                        }`}
                                    />
                                </React.Fragment>
                            );
                        })}
                    </Grid.Column>
                </Grid>

                {(wizardPages || pages).map((p, i) => {
                    const isCur = i === pageNumber;
                    const isComponent = p.type;
                    return (
                        <React.Fragment key={`wizard-form-page-${i}`}>
                            <div
                                style={{
                                    display: isCur ? 'block' : 'none',
                                }}
                            >
                                {isComponent ? (
                                    p
                                ) : (
                                    <WizardFormPage>
                                        <WizardFormHeader>
                                            {p.header}
                                        </WizardFormHeader>
                                        {p.content}
                                    </WizardFormPage>
                                )}
                            </div>
                        </React.Fragment>
                    );
                })}

                <WizardFormButtons
                    buttons={buttons}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    totalPages={(wizardPages || pages).length - 1}
                    onDone={onDone}
                />
            </Form>
        </React.Fragment>
    );
};

WizardForm.Buttons = WizardFormButtons;
WizardForm.Page = WizardFormPage;
WizardForm.Header = WizardFormHeader;

export default WizardForm;
