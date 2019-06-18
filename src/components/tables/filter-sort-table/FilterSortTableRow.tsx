import React from 'react';
import {IFilterSortTableColumn} from "components/tables/filter-sort-table/FilterSortTable";
import {IJsonApiIDObject} from "packages/jsonapi-helpers";
import {get} from "lodash";
import FilterSortTableCell from "components/tables/filter-sort-table/FilterSortTableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";

interface IFilterSortTableRowProps {
    row: IJsonApiIDObject;
    columns: IFilterSortTableColumn[],
}

const FilterSortTableRow: React.FC<IFilterSortTableRowProps> = props => {

    const {
        row,
        columns
    } = props;

    return (
        <TableRow>
            {columns.map((column: IFilterSortTableColumn, idx) => (
                <FilterSortTableCell key={`${row.type}-${row.id}-${column.field}-${idx}`}
                                     column={ column }
                                     value={get(row, column.field)}
                />
            ))}
        </TableRow>
    );
};

export default FilterSortTableRow;
