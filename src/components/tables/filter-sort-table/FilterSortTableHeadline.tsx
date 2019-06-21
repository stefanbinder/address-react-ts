import React from 'react';
import {IFilterSortTableHeadline, ITableFilter} from "components/tables/filter-sort-table/index";
import {Col, Row} from 'components/grid';
import {Form, Formik, FormikActions, FormikProps} from "formik";
import TableFilters from "components/tables/filter-sort-table/TableFilters";
import {TableHeadline} from "components/tables/filter-sort-table/FilterSortTableStyles";
import SearchField from "components/form/SearchField";

interface ISearchField {
    search: string
}

const FilterSortTableHeadline: React.FC<IFilterSortTableHeadline> = props => {

    const handleSearchOnSubmit = (values: ISearchField, actions: FormikActions<ISearchField>) => {
        props.onSearchChange(values.search);
        actions.setSubmitting(false);
    };

    const handleOnApplyFilters = (filters: ITableFilter[]) => {
        props.onFilterChange(filters);
    };

    const renderSearchForm = (formikBag: FormikProps<ISearchField>) => (
        <Form style={{width: '100%'}}>
            <Row>
                <Col xs={true} alignContent={'center'}>
                    <SearchField/>
                </Col>
            </Row>
        </Form>
    );

    return (
        <TableHeadline>
            <Col xs={8} md={4} direction={'row'} alignContent={'center'}>
                {props.showSearch ? (
                    <Formik initialValues={{search: ''}}
                            onSubmit={handleSearchOnSubmit}
                            render={renderSearchForm}
                    />
                ) : null}
            </Col>
            <Col xs={4} md={8} alignContent={'center'} justify={'flex-end'}>
                {props.filters && props.filters.length > 0 ? (
                    <TableFilters filters={props.filters} onApply={handleOnApplyFilters}/>
                ) : null}
            </Col>
        </TableHeadline>
    );
};

export default FilterSortTableHeadline;
