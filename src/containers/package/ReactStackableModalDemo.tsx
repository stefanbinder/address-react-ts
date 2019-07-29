import React from 'react';
import DashboardLayout from "layouts/DashboardLayout";
import ReactStackableModal from "react-stackable-modal";

const ReactStackableModalDemo: React.FC = props => {

    const handleClick = (id: number): string => {
        return "My string with id: " + id;
    };

    return (
        <DashboardLayout title={'React Stackable Modal'}>

            <ReactStackableModal name={'Stefan'} age={12} person={{id: 1, onClick: handleClick }} />

        </DashboardLayout>
    );
};

export default ReactStackableModalDemo;
