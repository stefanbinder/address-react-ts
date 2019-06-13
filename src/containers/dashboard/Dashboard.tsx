import * as React from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";
import {IBreadcrumb} from "components/Breadcrumbs";

export const Dashboard = () => {


    const getBreadcrumb = (): IBreadcrumb[] => {
        return [
            { title: 'Dashboard', href: '/dashboard' },
        ]
    };

    return (
        <DashboardLayout title={'Dashboard'} breadcrumbs={ getBreadcrumb() }>
            <div>dashvoard content</div>
        </DashboardLayout>
    );
};
