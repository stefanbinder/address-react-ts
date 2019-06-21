import React from 'react';
import { isFunction } from "lodash";
import TableCell from "@material-ui/core/TableCell/TableCell";
import moment from "moment";
import {IFilterSortTableColumn} from "components/tables/filter-sort-table/index";

interface IFilterSortTableCellProps {
    column: IFilterSortTableColumn;
    value: any;
}

const FilterSortTableCell: React.FC<IFilterSortTableCellProps> = props => {

    const {
        column,
        value
    } = props;

    const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
        if( isFunction(column.onClick )) {
            column.onClick(event, value);
        }
    };

    const renderBoolean = () => {
        if( value === true || value === 'true' || value === 1 || value === '1') {
            return "Yes";
        } else {
            return "No";
        }
    };

    const renderDate = () => {
        const date = moment(value);
        return date.format('DD.MM.YYYY');
    };

    const renderDatetime = () => {
        const date = moment(value);
        return date.format('DD.MM.YYYY HH:mm');
    };

    const renderTime = () => {
        const date = moment(value);
        return date.format('HH:mm');
    };

    const renderCurrency = () => {
        return "$" + value;
    };

    const renderDefault = () => {

        if( isFunction(column.render) ) {
            return column.render(value);
        } else {
            return value;
        }
    };

    const renderValue = () => {
        switch (column.type) {
            case 'boolean':
                return renderBoolean();
            case 'date':
                return renderDate();
            case 'datetime':
                return renderDatetime();
            case 'time':
                return renderTime();
            case 'currency':
                return renderCurrency();
            default:
                return renderDefault();
        }
    };

    const value$ = renderValue();

    return (
        <TableCell onClick={ handleOnClick }>
            { value$ }
        </TableCell>
    )

};

export default FilterSortTableCell;
