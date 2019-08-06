import React, {useContext, useState} from 'react';
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {BulkCheckbox} from "components/tables/filter-sort-table/FilterSortTableStyles";
import {IFilterSortTableColumn} from "components/tables/filter-sort-table/index";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import TableHead from "@material-ui/core/TableHead/TableHead";
import {FilterSortTableContext} from "components/tables/filter-sort-table/FilterSortTableContext";
import {IJsonApiIDObject} from "packages/jsonapi-helpers";

interface IFilterSortTableHeaderProps {
    hasBulkAction: boolean;
    showActionColumn: boolean;
    columns: IFilterSortTableColumn[];
    items: IJsonApiIDObject[] | undefined;
}

const FilterSortTableHeader: React.FC<IFilterSortTableHeaderProps> = props => {

    const [orderBy, setOrderBy] = useState<string>('id');
    const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');

    const {tableState, tableDispatch} = useContext(FilterSortTableContext);

    const handleOnSortChange = (property: string) => (event: any) => {
        const isDesc = orderBy === property && orderDirection === 'desc';
        setOrderDirection(isDesc ? 'asc' : 'desc');
        setOrderBy(property);

        tableDispatch({
            type: 'setApiQuerySort',
            payload: `${isDesc ? '' : '-' }${property.replace('attributes.', '')}`
        });
    };

    const handleBulkAll = () => {
        let bulklist;

        if (tableState.bulklist.length > 0) {
            bulklist = [];
        } else {
            bulklist = props.items ? props.items.map((item: any) => item.id) : [];
        }

        tableDispatch({
            type: 'setBulklist',
            payload: bulklist,
        });
    };

    return (
        <TableHead>
            <TableRow>
                {props.hasBulkAction ? (
                    <TableCell style={{width: 50}}>
                        <BulkCheckbox
                            indeterminate={props.items && tableState.bulklist.length > 0 && tableState.bulklist.length < props.items.length}
                            checked={props.items && tableState.bulklist.length === props.items.length}
                            onChange={handleBulkAll}
                        />
                    </TableCell>
                ) : null}
                {props.columns.map((column: IFilterSortTableColumn, idx) => (
                    <TableCell key={idx}
                               sortDirection={column.sorting ? orderBy === column.field ? orderDirection : false : false}>
                        {column.sorting ? (
                            <TableSortLabel
                                active={orderBy === column.field}
                                direction={orderDirection}
                                onClick={handleOnSortChange(column.field)}
                            >
                                {column.title}
                            </TableSortLabel>
                        ) : column.title}
                    </TableCell>
                ))}
                {props.showActionColumn ? (
                    <TableCell style={{width: 80}}>Actions</TableCell>
                ) : null}
            </TableRow>
        </TableHead>
    );
};

export default FilterSortTableHeader;
