import React, {useContext, useState} from 'react';
import {ITableFilter} from "components/tables/filter-sort-table/index";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import { Form, Formik, FormikActions, FormikProps} from "formik";
import Button from "@material-ui/core/Button/Button";
import SelectField from "components/form/SelectField";
import {get} from "lodash";
import {FilterMenu, StyledFilterElement} from "components/tables/filter-sort-table/FilterSortTableStyles";
import {FilterSortTableContext} from "components/tables/filter-sort-table/FilterSortTableContext";

interface ITableFiltersProps {
    filters: ITableFilter[],
}

const TableFilters: React.FC<ITableFiltersProps> = props => {

    const {tableDispatch} = useContext(FilterSortTableContext);

    const [ filterValues, setFilterValues ] = useState({});
    const [showFilter, setShowFilter] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleCloseFilter() {
        setAnchorEl(null);
        setShowFilter(false);
    }

    const handleShowFilter = (event: any) => {
        setAnchorEl(event.currentTarget);
        setShowFilter(true);
    };

    const handleSubmitFilter = (values: ITableFiltersProps, actions: FormikActions<ITableFiltersProps>) => {

        setFilterValues(values);
        const apiFilters: object = {};

        Object.keys(values).forEach((attrValue) => {
            const value = values[attrValue];
            const filter: ITableFilter | undefined = props.filters.find( f => f.attrValue === attrValue);

            if (value && filter) {
                if (filter.comparator) {
                    apiFilters[filter.attrValue] = {};
                    apiFilters[filter.attrValue][filter.comparator] = value;
                } else {
                    apiFilters[filter.attrValue] = value;
                }
            }
        });

        tableDispatch({
            type: 'setFilters',
            payload: values.filters
        });

        actions.setSubmitting(false);
        handleCloseFilter();
    };

    const renderFilter = (filter: ITableFilter, idx: number) => {
        return (
            <StyledFilterElement key={filter.attrValue}>
                <SelectField label={filter.label} fieldProps={{name: filter.attrValue}} selectFieldProps={{}}>
                    {filter.values ? filter.values.map((val: any) => (
                        <MenuItem value={get(val, filter.attrValue)}>
                            {get(val, filter.attrDisplay)}
                        </MenuItem>
                    )) : null }
                </SelectField>
            </StyledFilterElement>
        )
    };

    const renderForm = (formikBag: FormikProps<ITableFiltersProps>) => {
        return (
            <Form>
                { props.filters.map((filter: ITableFilter, idx) => renderFilter(filter, idx)) }
                <Button type={'submit'} variant={'contained'} color={'primary'}>Apply</Button>
                values: <pre>{JSON.stringify(formikBag.values, null, 2)}</pre>
            </Form>
        );
    };

    return (
        <div>
            <IconButton onClick={handleShowFilter}>
                <Icon>filter_list</Icon>
            </IconButton>
            <FilterMenu open={showFilter}
                        keepMounted={true}
                        onClose={handleCloseFilter}
                        anchorEl={anchorEl}
            >
                <Formik render={renderForm}
                        initialValues={ filterValues }
                        onSubmit={handleSubmitFilter}
                />
            </FilterMenu>
        </div>
    );
};

export default TableFilters;
