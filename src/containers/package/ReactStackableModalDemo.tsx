import React from 'react';
import DashboardLayout from "layouts/DashboardLayout";
// @ts-ignore
import ReactStackableModal from "react-stackable-modal";

const ReactStackableModalDemo: React.FC = props => {
    return (
        <DashboardLayout title={'React Stackable Modal'}>

            <pre>{JSON.stringify(ReactStackableModal, null, 2)}</pre>

        </DashboardLayout>
    );
};

export default ReactStackableModalDemo;
