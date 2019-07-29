import React from 'react';
import {ICountry} from "models/Country";
import CountryManagedForm from "containers/country/CountryManagedForm";
import StackableModal from "packages/react-stackable-modal/StackableModal";

interface ICreateOrUpdateCountryModalProps {
    country?: ICountry;
}

const CreateOrUpdateCountryModal: React.FC<ICreateOrUpdateCountryModalProps> = props => {
    return (
        <StackableModal open={ true }>
            {/*<StackableModalTitle>*/}
                {/*Create Country*/}
            {/*</StackableModalTitle>*/}

            <CountryManagedForm manage={['capital', 'states']}/>

        </StackableModal>
    );
};

export default CreateOrUpdateCountryModal;
