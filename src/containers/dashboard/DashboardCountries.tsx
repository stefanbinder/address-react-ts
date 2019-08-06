import React from 'react';
import DashboardLayout from "../../layouts/DashboardLayout";
import {useCountryApi} from "models/Country";
import {FilterSortTable} from "components/tables/filter-sort-table";
import {IBreadcrumb} from "components/Breadcrumbs";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper/Paper";

const SPaper = styled(Paper)`

`;

const DashboardCountries: React.FC = () => {

    const countryApi$ = useCountryApi();

    const getBreadcrumb = (): IBreadcrumb[] => {
        return [
            {title: 'Dashboard', href: '/dashboard'},
            {title: 'Countries', href: '/dashboard/countries'},
        ]
    };

    // @ts-ignore
    const handleBulkAction = (event: React.MouseEvent<HTMLElement>, rows: any) => {
        alert('Redirect to edit page');
    };

    const handleActionEdit = (event: React.MouseEvent<HTMLElement>, row: any) => {
        alert('Redirect to edit page');
    };

    return (
        <DashboardLayout title={'Countries'}
                         subtitle={'Create and Update countries'}
                         description={'You can create countries and its resources in that view. While creating you already can choose states and other relationships.'}
                         breadcrumbs={getBreadcrumb()}
        >

            <FilterSortTable
                searchable={true}
                api={countryApi$}
                WrapperComponent={SPaper}
                columns={[
                    {title: 'Name', field: 'attributes.name', sorting: true},
                    {title: 'Code 2', field: 'attributes.code2', sorting: true},
                    {title: 'Code 3', field: 'attributes.code3', sorting: true},
                    {title: 'Date', field: 'attributes.created_at', type: 'date'},
                    {title: 'datetime', field: 'attributes.created_at', type: 'datetime'},
                    {title: 'time', field: 'attributes.created_at', type: 'time'},
                    {title: 'Currency', field: 'id', type: 'currency'},
                ]}
                filters={[
                    {
                        label: 'Year',
                        values: [{created_at: 2019}, {created_at: 2018}, {created_at: 2017}, {created_at: 2016}],
                        attrDisplay: 'created_at',
                        attrValue: 'created_at',
                        comparator: 'contains',
                    }
                ]}
                actions={[
                    {name: 'Edit', icon: 'edit', onClick: handleActionEdit},
                    {name: 'Delete', icon: 'delete', onClick: handleActionEdit},
                ]}
                bulkActions={[
                    {name: 'Delete', icon: 'delete', onClick: handleBulkAction }
                ]}
            />
        </DashboardLayout>
    );

};

export default DashboardCountries;


// countryApi$.index({include: 'states', filter: {}});
// countryApi$.show({id: 1, include: 'region'});
// countryApi$.update({id: 1}, {id: 1, type: 'countries', attributes: {}});
// countryApi$.destroy({id: 1});
//
// countryApi$.states$.index();
// countryApi$.states$.show();
// countryApi$.states$.update();
// countryApi$.states$.destroy();
//
// countryApi$.states$.attach({id: 1, type: 'states'});
// countryApi$.states$.detach({id: 1, type: 'states'});
// countryApi$.states$.sync([{id: 1, type: 'states'}, {id: 2, type: 'states'}]);


// I get:
// countryApi$.items;
// countryApi$.links.next | prev ...
// countryApi$.next() .prev() .first() .last()

// const renderFilter = () => (
//     <div>empty</div>
// );
//
// const renderTableHeader = () => (
//     <div>empty</div>
// );
//
// const renderTableRow = (item: ICountry) => (
//     <div>
//         {item.attributes.name}:
//         {item.attributes.code2} -
//         {item.attributes.code3}
//     </div>
// );
//
// const renderTableRowActions = () => (
//     <div>empty</div>
// );
