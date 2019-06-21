import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import styled from "styled-components";
import {ErrorMessage, Field, FieldConfig, FormikValues} from "formik";
import {TextFieldProps} from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";

interface ISearchFieldProps {
    fieldProps?: FieldConfig;
    textFieldProps?: TextFieldProps;
}

const SearchField: React.FC<ISearchFieldProps> = props => {
    const {fieldProps = {name: 'search'}, textFieldProps = {}} = props;

    return (
        <React.Fragment>
            <Field {...fieldProps}>
                {({field, form}: FormikValues) => {

                    const handleResetSearch = () => {
                        form.resetForm();
                        form.submitForm();
                    };

                    const handleFormSubmit = () => {
                        form.submitForm();
                    };

                    return (
                        <React.Fragment>
                            <SearchTextField {...field}
                                             onBlur={handleFormSubmit}
                                             type='text'
                                             placeholder='Search'
                                             margin="dense"
                                             fullWidth={true}
                                             startAdornment={(
                                                 <InputAdornment position="start">
                                                     <IconButton
                                                         edge="start"
                                                         aria-label="Search table content"
                                                     >
                                                         <Icon>search</Icon>
                                                     </IconButton>
                                                 </InputAdornment>
                                             )}
                                             endAdornment={field.value && field.value !== '' ? (
                                                 <InputAdornment position="end">
                                                     <IconButton
                                                         edge="start"
                                                         aria-label="Reset Search"
                                                         onClick={handleResetSearch}
                                                     >
                                                         <Icon>cancel</Icon>
                                                     </IconButton>
                                                 </InputAdornment>
                                             ) : null}
                                             classes={{
                                                 notchedOutline: 'outline-fieldset-border',
                                             }}
                                             {...textFieldProps}
                            />
                        </React.Fragment>
                    );
                }}
            </Field>
            <ErrorMessage name={fieldProps.name}>
                {msg => <div>{msg}</div>}
            </ErrorMessage>
        </React.Fragment>
    );

};

export default SearchField;

const SearchTextField = styled(OutlinedInput)`
&& {
  background-color: #fff;
  
  .outline-fieldset-border {
    border-radius: 0;
  }
}
`;
