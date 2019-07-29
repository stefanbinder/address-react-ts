import React, {useState} from 'react';
import {IStackableModalProps} from "packages/react-stackable-modal/StackableModal";

interface IStackableModalButtonProps {
    modal: any;
    modalProps: IStackableModalProps;
    onCreate: () => void;
    onUpdate: () => void;
    values: any;

    // OPTIONAL
    initialValues?: any;
    buttonComponent?: any;
    buttonProps?: any;
    disabled?: boolean;
}

const StackableModalButton: React.FC<IStackableModalButtonProps> = props => {

    // @ts-ignore
    const {
        modal,
        modalProps,
        // onCreate,
        // onUpdate,
        // values,
        // initialValues,
        // buttonComponent,
        // buttonProps,
        // disabled
    } = props;


    const [ open, setOpen ] = useState(false);


    const handleOpenModal = (event: React.MouseEvent) => {
        setOpen(true);
    };

    const Modal = modal;

    return (
        <React.Fragment>
            <button onClick={ handleOpenModal }>
                { props.children }
            </button>
            <Modal open={ open } {...modalProps} />
        </React.Fragment>
    );
};

export default StackableModalButton;
