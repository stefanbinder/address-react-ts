import FilterSortTable from './FilterSortTable';
import {IAPI} from "lib/api";
import React, {ReactElement} from "react";

interface IFilterSortTable {
    api: IAPI,
    columns: IFilterSortTableColumn[],
    filters?: ITableFilter[],
    actions?: ITableAction[],
    bulkActions?: ITableAction[],
    searchable?: boolean,
    renderTableHeader?: any,
    renderTableRow?: (row: object) => any,
    renderTableRowActions?: any,
    options?: {},
    WrapperComponent?: any,
}

interface IFilterSortTableColumn {
    title?: string | React.ReactElement<any>;
    onClick?: (event: React.MouseEvent<HTMLElement>, value: any) => any;
    field: string;
    filtering?: boolean;
    sorting?: boolean;
    render?: (data: any) => any;
    renderHeader?: (data: any) => any;
    type?: ('string' | 'boolean' | 'date' | 'datetime' | 'time' | 'currency');
}

interface IApiQuery {
    filter: object;
    page: number;
    per_page: number;
    search: string | null;
    sort: string | null;
}

interface IApiFilter {
    attribute: string;
    comparator: TApiComparator;
    value: any;
}

type TApiComparator = '=' | 'contains' | 'starts_with' | 'ends_with' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | undefined | null;

interface IFilterSortTableHeadline {
    showSearch?: boolean;
    filters?: ITableFilter[];
    onFilterChange: (filters: ITableFilter[]) => void;
    onSearchChange: (search: string) => void;
}

interface ITableFilter {
    label: string;
    values: object[];
    /**
     * The actual filter value
     */
    value?: any;
    /**
     * Attribute which will be used to show inside the select dropdown
     */
    attrDisplay: string;
    /**
     * Attribute which will be used as value in the select dropdown
     */
    attrValue: any;
    /**
     * Text of empty select-option
     */
    textEmptyOption?: string;
    /**
     * Default value for the filter
     */
    defaultValue?: any;
    /**
     * The actual comparator
     */
    comparator?: TApiComparator;
    /**
     * Possible comparators
     */
    comparators?: TApiComparator[],
}

interface ITableAction {
    name: string;
    onClick: (event: React.MouseEvent<HTMLElement>, row: any) => void;
    icon?: string | ReactElement;
    disabled?: boolean;
}

export {
    FilterSortTable,
    IFilterSortTable,
    IFilterSortTableColumn,
    IApiQuery,
    IApiFilter,
    TApiComparator,
    IFilterSortTableHeadline,
    ITableFilter,
    ITableAction,
}
