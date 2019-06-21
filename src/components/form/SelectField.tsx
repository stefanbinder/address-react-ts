import {ErrorMessage, Field, FieldConfig, FormikValues} from 'formik';
import * as React from 'react';
import {SelectProps} from "@material-ui/core/Select";
import {default as MUISelect} from "@material-ui/core/Select/Select";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import styled from "styled-components";

export interface ISelectFieldProps {
    label: string;
    fieldProps: FieldConfig;
    selectFieldProps: SelectProps;
    children: React.ReactNode;
}

const SelectField = (props: ISelectFieldProps) => {
    const {fieldProps, selectFieldProps} = props;
    return (
        <React.Fragment>
            <Field {...fieldProps}>
                {({field}: FormikValues) => (
                    <StyledFormControl>
                        <InputLabel htmlFor={ `id-${props.fieldProps.name}` }>{ props.label }</InputLabel>
                        <MUISelect {...field}
                                   fullWidth={true}
                                   inputProps={{
                                       name: props.fieldProps.name,
                                       id: `id-${props.fieldProps.name}`,
                                   }}
                                   {...selectFieldProps}
                        >
                            { props.children }
                        </MUISelect>
                    </StyledFormControl>
                )}
            </Field>
            <ErrorMessage name={fieldProps.name}>
                {msg => <div>{msg}</div>}
            </ErrorMessage>
        </React.Fragment>
    );

};

export default SelectField;

const StyledFormControl = styled(FormControl)`
&& {
    margin: 8px;
    min-width: 120px;
    width: 100%;
}
`;
