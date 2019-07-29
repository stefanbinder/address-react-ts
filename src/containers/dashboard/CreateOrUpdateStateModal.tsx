import React from 'react';
import StackableModal from "packages/react-stackable-modal/StackableModal";

interface ICreateOrUpdateStateModalProps {
    state?: any;
}

const CreateOrUpdateStateModal: React.FC<ICreateOrUpdateStateModalProps> = props => {
    return (
        <StackableModal open={true}>
            {/*<StackableModalTitle>*/}
                {/*Create Country*/}
            {/*</StackableModalTitle>*/}

            <h1>Create or Update State</h1>

        </StackableModal>
    );
};

export default CreateOrUpdateStateModal;
