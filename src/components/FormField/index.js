import React from 'react';
import { Form, Input, TextArea, Select } from 'semantic-ui-react';

const FormField = ({
    control,
    placeholder,
    label,
    name,
    value,
    onChange,
    input = {},
    textArea = {},
    select = {},
}) => {
    const defaultProps = {
        id: name,
        placeholder: placeholder || `Enter ${label}...`,
        name,
        value,
        onChange,
    };

    return (
        <React.Fragment>
            <Form.Field>
                <label htmlFor={name}>{label}</label>
                {control === Select ? (
                    <Select {...defaultProps} {...select} />
                ) : control === TextArea ? (
                    <TextArea {...defaultProps} {...textArea} />
                ) : (
                    <Input {...defaultProps} {...input} />
                )}
            </Form.Field>
        </React.Fragment>
    );
};

export default FormField;
