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

    return (
        <DashboardLayout title={'Countries'}
                         subtitle={'Create and Update countries'}
                         description={'You can create countries and its resources in that view. While creating you already can choose states and other relationships.'}
                         breadcrumbs={getBreadcrumb()}
        >
            <FilterSortTable
                columns={[
                    {title: 'Name', field: 'attributes.name'},
                    {title: 'Code 2', field: 'attributes.code2'},
                    {title: 'Code 3', field: 'attributes.code3'},
                    {title: 'Date', field: 'attributes.created_at', type: 'date'},
                    {title: 'datetime', field: 'attributes.created_at', type: 'datetime'},
                    {title: 'time', field: 'attributes.created_at', type: 'time'},
                    {title: 'Currency', field: 'id', type: 'currency' },
                ]}
                api={countryApi$}
                WrapperComponent={ SPaper }
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
