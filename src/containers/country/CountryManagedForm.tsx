import React, {useEffect, useState} from 'react';
import useReactRouter from "use-react-router";
import {CountryValidation, ICountry, useCountryApi} from "models/Country";
import {Form, Formik, FormikActions, FormikProps} from "formik";
import CountryForm from "./CountryForm";
import {getIdObject} from "packages/jsonapi-helpers";
import Button from "@material-ui/core/Button/Button";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import StackableModalButton from "packages/react-stackable-modal/StackableModalButton";
import CreateOrUpdateStateModal from "containers/dashboard/CreateOrUpdateStateModal";

export interface ICountryRouter {
    country: string;
}

export interface ICountryManagedFormProps {

    manage: string[];

}

const CountryManagedForm: React.FC<ICountryManagedFormProps> = props => {
    // const countryId = props.match.params.country;

    const {match} = useReactRouter<ICountryRouter>();

    const {items, included, ...countryApi$} = useCountryApi();

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        if (match.params.country === 'new') {
            countryApi$.setInitData(getIdObject('countries') as ICountry);
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

    const handleEmpty = () => console.log('handleEmpty');

    const renderForm = (formikBag: FormikProps<ICountry>) => (
        <Form>
            <CountryForm/>

            {props.manage.indexOf('states') > -1 ? (
                <StackableModalButton modal={CreateOrUpdateStateModal}
                                      modalProps={{
                                          open: true
                                      }}
                                      onCreate={handleEmpty}
                                      onUpdate={handleEmpty}
                                      values={{}}
                    // OPTIONAL
                                      initialValues={null}
                                      buttonComponent={Button}
                                      buttonProps={{}}
                                      disabled={false}
                />
            ) : null}

            <Button type={'submit'}>Update</Button>
        </Form>
    );

    return (
        <React.Fragment>
            <Snackbar open={showSnackbar} message={snackbarMessage} autoHideDuration={1000}/>
            {countryApi$.loading ? 'Loading...' : (
                <Formik initialValues={items}
                        validationSchema={CountryValidation}
                        onSubmit={handleOnSubmit}
                        render={renderForm}
                />
            )}
        </React.Fragment>
    );
};

export default CountryManagedForm;
