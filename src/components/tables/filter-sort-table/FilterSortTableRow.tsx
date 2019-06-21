import React, {ChangeEvent} from 'react';
import {get, isFunction} from "lodash";
import FilterSortTableCell from "components/tables/filter-sort-table/FilterSortTableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";
import {IFilterSortTableColumn, ITableAction} from "components/tables/filter-sort-table/index";
import TableActions from "components/tables/filter-sort-table/TableActions";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {BulkCheckbox} from "components/tables/filter-sort-table/FilterSortTableStyles";

interface IFilterSortTableRowProps {
    row: any;
    columns: IFilterSortTableColumn[];
    actions?: ITableAction[];
    hasBulkAction?: boolean;
    bulkChecked?: boolean;
    onBulkChange?: (id: string | number) => void;
}

const FilterSortTableRow: React.FC<IFilterSortTableRowProps> = props => {

    const {
        row,
        columns,
        actions,
        hasBulkAction,
        bulkChecked,
        onBulkChange
    } = props;

    const handleBulkToggle = (event: ChangeEvent) => {
        if (isFunction(onBulkChange)) {
            onBulkChange(row.id);
        }
    };

    return (
        <TableRow>
            {hasBulkAction ? (
                <TableCell>
                    <BulkCheckbox
                        checked={bulkChecked}
                        onChange={handleBulkToggle}
                        style={{padding: 3}}
                    />
                </TableCell>
            ) : null}
            {columns.map((column: IFilterSortTableColumn, idx) => (
                <FilterSortTableCell key={`${row.type}-${row.id}-${column.field}-${idx}`}
                                     column={column}
                                     value={get(row, column.field)}
                />
            ))}
            {actions && actions.length > 0 ? (
                <TableCell>
                    <TableActions actions={actions} row={props.row}/>
                </TableCell>
            ) : null}
        </TableRow>
    );
};

export default FilterSortTableRow;
