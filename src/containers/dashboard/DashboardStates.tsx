import React from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";
import {FilterSortTable} from "components/tables/filter-sort-table";
import {IBreadcrumb} from "components/Breadcrumbs";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper/Paper";
import {useStateApi} from "models/State";
import useCountryFilter from "components/tables/filters/useCountryFilter";

const SPaper = styled(Paper)`

`;

const DashboardStates: React.FC = () => {

    const stateApi$ = useStateApi();
    const CountryFilter = useCountryFilter();
    // const countryApi$ = useCountryApi();

    const getBreadcrumb = (): IBreadcrumb[] => {
        return [
            {title: 'Dashboard', href: '/dashboard'},
            {title: 'States', href: '/dashboard/states'},
        ]
    };

    const handleActionEdit = (event: React.MouseEvent<HTMLElement>, row: any) => {
        alert('Redirect to edit page');
    };

    return (
        <DashboardLayout title={'States'}
                         subtitle={'Create and Update states'}
                         description={'You can create states and its resources in that view. While creating you already can choose states and other relationships.'}
                         breadcrumbs={getBreadcrumb()}
        >
            <FilterSortTable
                searchable={true}
                api={stateApi$}
                WrapperComponent={SPaper}
                columns={[
                    {title: 'Name', field: 'attributes.name', sorting: true},
                    {title: 'Country', field: 'attributes.country_id', sorting: true},
                ]}
                filters={[
                    {
                        label: 'Year',
                        values: [{created_at: 2019}, {created_at: 2018}, {created_at: 2017}, {created_at: 2016}],
                        attrDisplay: 'created_at',
                        attrValue: 'created_at',
                        comparator: 'contains',
                    },
                    CountryFilter
                ]}
                actions={[
                    {name: 'Edit', icon: 'edit', onClick: handleActionEdit},
                    {name: 'Delete', icon: 'delete', onClick: handleActionEdit},
                ]}
                // bulkActions={[
                //     {name: 'Delete', icon: 'delete', onClick: handleBulkAction }
                // ]}
            />
        </DashboardLayout>
    );

};

export default DashboardStates;

