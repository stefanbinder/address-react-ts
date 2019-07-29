import React, {Dispatch, ReactNode} from "react";
import {IApiQuery, IFilterSortTable, ITableFilter} from "components/tables/filter-sort-table/index";
import {DEFAULT_PAGE_SIZE} from "components/tables/filter-sort-table/config";
import {IAPI} from "lib/api";

interface ITableState {
    apiQuery: IApiQuery;
    props: IFilterSortTable;
}

type TableAction =
    | { type: 'toggle' }
    | { type: 'setApiQuery', apiQuery: IApiQuery }
    | { type: 'setSearch', payload: string }
    | { type: 'setFilters', payload: ITableFilter[] };

const initialState: ITableState = {
    apiQuery: {
        filter: {},
        page: 1,
        per_page: DEFAULT_PAGE_SIZE,
        search: null,
        sort: 'id'
    },
    props: {
        api: {} as IAPI,
        columns: [],
    }
};

interface ITableContext {
    tableState: ITableState;
    tableDispatch: Dispatch<TableAction>;
}

const FilterSortTableReducer = (state: ITableState, action: TableAction) => {
    switch (action.type) {
        case 'setApiQuery':
            return { ...state, apiQuery: { ...action.apiQuery } };
        case 'setSearch':
            return { ...state, apiQuery: { ...state.apiQuery, search: action.payload } };
        case 'setFilters':
            return { ...state, filters: action.payload };

        default:
            return state;
    }
};

export const FilterSortTableContext = React.createContext<ITableContext>({} as ITableContext);

export const FilterSortTableProvider = (props: { children: ReactNode }) => {
    const [tableState, tableDispatch] = React.useReducer(FilterSortTableReducer, initialState);
    const value = {tableState, tableDispatch};

    return (
        <FilterSortTableContext.Provider value={value}>
            {props.children}
        </FilterSortTableContext.Provider>
    );
};
