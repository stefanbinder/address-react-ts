import React, {useEffect, useState} from 'react';
import useReactRouter from "use-react-router";
import {CountryValidation, ICountry, useCountryApi} from "../../models/Country";
import {Form, Formik, FormikActions, FormikProps} from "formik";
import CountryForm from "./CountryForm";
import {Button, Snackbar} from "@material-ui/core";
import {getIdObject} from "../../packages/jsonapi-helpers";

export interface ICountryRouter {
    country: string;
}

export interface ICountryManagedFormProps {

    manage: string[];

}

const CountryManagedForm: React.FC<ICountryManagedFormProps> = props => {
    // const countryId = props.match.params.country;

    const {match} = useReactRouter<ICountryRouter>();

    const {data, included, ...countryApi$} = useCountryApi();

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        if (match.params.country === 'new') {
            countryApi$.setInitData( getIdObject('countries') as ICountry);
        } else {
            countryApi$.show(match.params.country, {
                params: {
                    include: 'states,region,tags'
                }
            });
        }
    }, [match.params.country]);

    const handleOnSubmit = (values: any, actions: FormikActions<ICountry>) => {

        const success = (response: ICountry) => {
            setSnackbarMessage('Saved');
            setShowSnackbar(true);
        };
        const error = (response: any) => {
            setSnackbarMessage('Error');
            setShowSnackbar(true);
        };

        if (values.id) {
            countryApi$.update(values.id, values)
                .then(success)
                .catch(error);
        } else {
            countryApi$.create(values)
                .then(success)
                .catch(error);
        }

    };

    const renderForm = (formikBag: FormikProps<ICountry>) => (
        <Form>
            <CountryForm/>
            <Button type={'submit'}>Update</Button>
        </Form>
    );

    return (
        <React.Fragment>
            <Snackbar open={showSnackbar} message={snackbarMessage} autoHideDuration={1000}/>
            {countryApi$.loading ? 'Loading...' : (
                <Formik initialValues={data}
                        validationSchema={ CountryValidation }
                        onSubmit={handleOnSubmit}
                        render={renderForm}
                />
            )}
        </React.Fragment>
    );
};

export default CountryManagedForm;


