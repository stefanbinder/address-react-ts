import {IApiQuery, ITableFilter} from "components/tables/filter-sort-table/index";
import {xor} from "lodash";

export interface ITableState {
    apiQuery: IApiQuery;
    bulklist: Array<string | number>;
}

export type TableAction =
    | { type: 'toggle' }
    | { type: 'setApiQuery', apiQuery: IApiQuery }
    | { type: 'setApiQuerySearch', payload: string | null }
    | { type: 'setApiQueryPage', payload: number }
    | { type: 'setApiQueryPerPage', payload: number }
    | { type: 'setApiQueryFilter', payload: object }
    | { type: 'setApiQuerySort', payload: string | null }
    | { type: 'setFilters', payload: ITableFilter[] }
    | { type: 'toggleBulkListEntry', payload: number | string }
    | { type: 'setBulklist', payload: Array<number | string> };

export const FilterSortTableReducer = (state: ITableState, action: TableAction) => {
    switch (action.type) {
        case 'setApiQuery':
            return { ...state, apiQuery: { ...action.apiQuery } };
        case 'setApiQuerySearch':
            return { ...state, apiQuery: { ...state.apiQuery, search: action.payload } };
        case 'setApiQueryPage':
            return { ...state, apiQuery: { ...state.apiQuery, page: action.payload } };
        case 'setApiQueryPerPage':
            return { ...state, apiQuery: { ...state.apiQuery, per_page: action.payload } };
        case 'setApiQueryFilter':
            return { ...state, apiQuery: { ...state.apiQuery, filter: action.payload } };
        case 'setApiQuerySort':
            return { ...state, apiQuery: { ...state.apiQuery, sort: action.payload } };
        case 'setFilters':
            return { ...state, filters: action.payload };
        case 'toggleBulkListEntry':
            return { ...state, bulklist: xor(state.bulklist, [action.payload]) };
        case 'setBulklist':
            return { ...state, bulklist: action.payload };
        default:
            return state;
    }
};
