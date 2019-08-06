import React, {Dispatch, ReactNode} from "react";
import {DEFAULT_PAGE_SIZE} from "components/tables/filter-sort-table/config";
import {
    FilterSortTableReducer,
    ITableState,
    TableAction
} from "components/tables/filter-sort-table/FilterSortTableReducer";

const initialState: ITableState = {
    apiQuery: {
        filter: {},
        page: 1,
        per_page: DEFAULT_PAGE_SIZE,
        search: null,
        sort: 'id'
    },
    bulklist: [],
};

interface ITableContext {
    tableState: ITableState;
    tableDispatch: Dispatch<TableAction>;
}

export const FilterSortTableContext = React.createContext<ITableContext>({} as ITableContext);

export const FilterSortTableProvider = (props: { children: ReactNode }) => {
    const [tableState, tableDispatch] = React.useReducer(FilterSortTableReducer, initialState);

    return (
        <FilterSortTableContext.Provider value={{tableState, tableDispatch}}>
            {props.children}
        </FilterSortTableContext.Provider>
    );
};
