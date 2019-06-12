import React, {ReactNode} from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";
import CountryManagedForm from "../country/CountryManagedForm";

export interface ICountryRouter {
    country: string;
}

export interface IDashboardCountryFormProps {

    children: ReactNode;

}

const DashboardCountryForm: React.FC<IDashboardCountryFormProps> = props => {

    return (
        <DashboardLayout title={'Country Form'}>
            <CountryManagedForm manage={['region']}/>
        </DashboardLayout>
    );
};

export default DashboardCountryForm;
