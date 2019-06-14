import {ErrorMessage, Field, FieldConfig, FormikValues} from 'formik';
import * as React from 'react';
import {TextFieldProps} from "@material-ui/core/TextField";
import { default as MUITextField } from "@material-ui/core/TextField/TextField";

export interface ITextFieldProps {
    fieldProps: FieldConfig;
    textFieldProps: TextFieldProps;
}

const TextField = (props: ITextFieldProps) => {
    const {fieldProps, textFieldProps} = props;
    return (
        <React.Fragment>
            <Field {...fieldProps}>
                {({field}: FormikValues) => (
                    <React.Fragment>
                        <MUITextField {...field}
                                      // value={isNil(field.value) ? '' : field.value}
                                      type='text'
                                      variant={'outlined'}
                                      margin="dense"
                                      fullWidth={true}
                                      {...textFieldProps}
                        />
                    </React.Fragment>
                )}
            </Field>
            <ErrorMessage name={fieldProps.name}>
                {msg => <div>{msg}</div>}
            </ErrorMessage>
        </React.Fragment>
    );

};

export default TextField;
