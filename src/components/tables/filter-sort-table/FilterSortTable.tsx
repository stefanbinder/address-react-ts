import React from 'react';
// import {IAPI} from "lib/api";
// import MaterialTable, {Column, Query, QueryResult} from "material-table";
// import {isNil} from "lodash";
// import {AxiosRequestConfig} from "axios";
//
// const DEFAULT_PAGE_SIZE = 10;
// const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

interface IFilterSortTableProps {
    resourceType: string;
    // tableTitle: string;
    // renderFilter: () => ReactNode,
    // searchable: boolean,
    // renderTableHeader: ReactNode,
    // renderTableRow: (row: object) => ReactNode,
    // renderTableRowActions: ReactNode,
    // tableColumns: Column[],
    // api: IAPI,
}

const FilterSortTable: React.FC<IFilterSortTableProps> = props => {

    // const loadTable = (query: Query): Promise<QueryResult> => {
    //     return new Promise<QueryResult>((resolve, reject) => {
    //         const config: AxiosRequestConfig = {
    //             params: {
    //                 page: query.page + 1,
    //                 per_page: query.pageSize,
    //             }
    //         };
    //
    //         if (query.orderBy && query.orderBy.field) {
    //             config.params.sort = `${ query.orderDirection === 'asc' ? '' : '-' }${ query.orderBy.field.replace('attributes.', '')}`;
    //         }
    //
    //         props.api.index(config)
    //             .then((response: any) => {
    //                 resolve({
    //                     data: response.data,
    //                     page: response.meta.current_page - 1,
    //                     totalCount: response.meta.total,
    //                 })
    //             });
    //     });
    // };
    //
    // const handleOnRowAdd = (rowData: any): Promise<any> => {
    //     return new Promise((resolve, reject) => {
    //
    //         if (isNil(rowData.type)) {
    //             rowData.type = props.resourceType;
    //         }
    //
    //         props.api.create(rowData)
    //             .then(newItem => {
    //                 resolve(rowData);
    //             })
    //             .catch(error => {
    //                 reject(false);
    //             });
    //     });
    // };
    //
    // const handleOnRowUpdate = (rowData: any): Promise<any> => {
    //     return new Promise((resolve, reject) => {
    //         props.api.update(rowData.id, rowData)
    //             .then(newItem => {
    //                 resolve(newItem);
    //             })
    //             .catch(error => {
    //                 reject(false);
    //             });
    //     });
    // };
    //
    // const handleOnRowDelete = (rowData: any): Promise<any> => {
    //     return new Promise((resolve, reject) => {
    //         props.api.destroy(rowData.id)
    //             .then(newItem => {
    //                 resolve(newItem);
    //             })
    //             .catch(error => {
    //                 reject(false);
    //             });
    //     });
    // };

    return (
        <React.Fragment>
            my table...
            {/*<MaterialTable*/}
                {/*title={props.tableTitle}*/}
                {/*columns={props.tableColumns}*/}
                {/*data={loadTable}*/}
                {/*editable={{*/}
                    {/*onRowAdd: handleOnRowAdd,*/}
                    {/*onRowUpdate: handleOnRowUpdate,*/}
                    {/*onRowDelete: handleOnRowDelete,*/}
                {/*}}*/}
                {/*options={{*/}
                    {/*pageSize: DEFAULT_PAGE_SIZE,*/}
                    {/*pageSizeOptions: DEFAULT_PAGE_SIZE_OPTIONS,*/}
                    {/*addRowPosition: 'first',*/}
                    {/*actionsColumnIndex: 99,*/}
                {/*}}*/}
            {/*/>*/}
        </React.Fragment>
    );
};

export default FilterSortTable;
