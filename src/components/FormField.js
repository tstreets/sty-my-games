import React from 'react';
import { Form, Input, TextArea, Select, Checkbox } from 'semantic-ui-react';

const FormField = ({
    // form fields
    control,
    label,
    width,
    inline,
    // input
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    type,
    min,
    max,
    step,
    disabled,
    accept,
    // select
    options,
    clearable,
    search,
    allowAdditions,
    onAddItem,
    // checkbox
    checked,
}) => {
    const inputProps = {
        id: name,
        name,
        value,
        placeholder: `Enter ${name}...`,
        onChange: onChange,
        onBlur,
        type,
        min,
        max,
        step,
        disabled,
        accept,
    };

    const selectProps = {
        ...inputProps,
        options: [],
        clearable,
        search,
        allowAdditions,
        onAddItem,
        selectOnBlur: false,
    };

    return (
        <React.Fragment>
            <Form.Field width={width}>
                {control === Checkbox ? (
                    <Checkbox
                        label={label}
                        htmlFor={name}
                        checked={checked || null}
                        {...inputProps}
                    />
                ) : (
                    <React.Fragment>
                        <label htmlFor={name}>{label}</label>
                        {control === Input ? (
                            <Input {...inputProps} />
                        ) : control === TextArea ? (
                            <TextArea {...inputProps} />
                        ) : control === Select ? (
                            <Select {...selectProps} />
                        ) : null}
                    </React.Fragment>
                )}
            </Form.Field>
        </React.Fragment>
    );
};

export default FormField;
