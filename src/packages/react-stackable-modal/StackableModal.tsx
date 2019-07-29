import React from 'react';

export interface IStackableModalProps {
    open: boolean;
}

const StackableModal: React.FC<IStackableModalProps> = props => {
    return (
        <div>
            I'm the modal, am I open? <br/>
            { props.open ? 'Yeees' : 'No' }
        </div>
    );
};

export default StackableModal;
