import React, {useState} from 'react';
import {ITableFilter} from "components/tables/filter-sort-table/index";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {FieldArray, Form, Formik, FormikActions, FormikProps} from "formik";
import Button from "@material-ui/core/Button/Button";
import SelectField from "components/form/SelectField";
import {get} from "lodash";
import {FilterMenu, StyledFilterElement} from "components/tables/filter-sort-table/FilterSortTableStyles";

interface ITableFiltersProps {
    filters: ITableFilter[],
    onApply: (filters: ITableFilter[]) => void;
}

const TableFilters: React.FC<ITableFiltersProps> = props => {

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

    const renderFilter = (filter: ITableFilter, idx: number) => {
        return (
            <StyledFilterElement key={idx}>
                <SelectField label={filter.label} fieldProps={{name: `filters.${idx}.value`}} selectFieldProps={{}}>
                    {filter.values.map(val => (
                        <MenuItem value={get(val, filter.attrValue)}>
                            {get(val, filter.attrDisplay)}
                        </MenuItem>
                    ))}
                </SelectField>
            </StyledFilterElement>
        )
    };

    const handleSubmitFilter = (values: ITableFiltersProps, actions: FormikActions<ITableFiltersProps>) => {
        props.onApply(values.filters);
        actions.setSubmitting(false);
        handleCloseFilter();
    };

    const renderForm = (formikBag: FormikProps<ITableFiltersProps>) => {
        return (
            <Form>
                <FieldArray name={'filters'}>
                    {(arrayHelper => (
                        formikBag.values.filters.map((filter: ITableFilter, idx) => renderFilter(filter, idx))
                    ))}
                </FieldArray>
                <Button type={'submit'} variant={'contained'} color={'primary'}>Apply</Button>
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
                        initialValues={{filters: props.filters}}
                        onSubmit={handleSubmitFilter}
                />
            </FilterMenu>
        </div>
    );
};

export default TableFilters;
