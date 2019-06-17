import React, {useEffect, useState} from 'react';
import {IAPI} from "lib/api";
import {Filter} from "material-table";
import {get} from "lodash";
import {AxiosRequestConfig} from "axios";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {IJsonApiIDObject} from "packages/jsonapi-helpers";
import TableRow from "@material-ui/core/TableRow/TableRow";
import {useFilterSortTableStyles} from "components/tables/filter-sort-table/FilterSortTableStyles";
import TableFooter from "@material-ui/core/TableFooter/TableFooter";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import {factory} from "config/ConfigLog4j";
import {Col} from "components/grid";
import {Loader} from "components/Loading";

const DEFAULT_PAGE_SIZE: number = 10;
const DEFAULT_PAGE_SIZE_OPTIONS: number[] = [10, 25, 50, 100];

const tableLog = factory.getLogger('table');

export interface IFilterSortTableProps {
    resourceType: string;
    api: IAPI,
    columns: IFilterSortTableColumn[],
    renderFilter?: () => any,
    searchable?: boolean,
    renderTableHeader?: any,
    renderTableRow?: (row: object) => any,
    renderTableRowActions?: any,
    options?: {}
}

export interface IFilterSortTableColumn {
    title?: string | React.ReactElement<any>;
    onClick?: () => any;
    field: string;
    filtering?: boolean;
    sorting?: boolean;
    searchable?: boolean;
    render?: (data: any) => any;
    renderHeader?: (data: any) => any;
    type?: ('string' | 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency');
}

export interface IApiQuery {
    filters: Filter[];
    page: number;
    per_page: number;
    search: string | null;
    sort: string | null;
}

const FilterSortTable: React.FC<IFilterSortTableProps> = props => {

    const {
        api
    } = props;

    // @ts-ignore
    const [apiQuery, setApiQuery] = useState<IApiQuery>({
        filters: [],
        page: 1,
        per_page: DEFAULT_PAGE_SIZE,
        search: null,
        sort: 'id'
    });

    const [columns] = useState<IFilterSortTableColumn[]>(props.columns);
    const classes = useFilterSortTableStyles();

    useEffect(() => {
        loadTable();
    }, [apiQuery]);

    const loadTable = () => {
        tableLog.info('Load Table');

        const config: AxiosRequestConfig = {
            params: {
                ...apiQuery,
            }
        };

        api.index(config)
            .catch(error => {
                debugger;
            });
    };

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

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        tableLog.info('Paginate Page: ' + page);
        setApiQuery({
            ...apiQuery,
            page: page + 1,
        });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const perPage = parseInt(get(event, 'target.value', DEFAULT_PAGE_SIZE), 10);
        tableLog.info('Change Rows per Page: ' + perPage);
        setApiQuery({
            ...apiQuery,
            per_page: perPage,
        });
    };

    return (
        <div className={classes.tableWrapper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {columns.map((column: IFilterSortTableColumn, idx) => (
                            <TableCell key={idx}>{column.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {api.items ? api.items.map((row: IJsonApiIDObject, rowIdx) => (
                        <TableRow key={rowIdx}>
                            {columns.map((column: IFilterSortTableColumn, cellIdx) => (
                                <TableCell key={`${rowIdx}-${cellIdx}`}>{get(row, column.field)}</TableCell>
                            ))}
                        </TableRow>
                    )) : null}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={DEFAULT_PAGE_SIZE_OPTIONS}
                        component="div"
                        count={api.meta.total}
                        rowsPerPage={apiQuery.per_page}
                        page={apiQuery.page - 1}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        backIconButtonProps={{
                            'aria-label': 'Previous Page',
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page',
                        }}
                    />
                </TableFooter>
            </Table>
            <TableLoading loading={api.loading}/>
        </div>
    );
};

export default FilterSortTable;

const TableLoading = (props: { loading: boolean }) => {
    const classes = useFilterSortTableStyles();
    if (props.loading) {
        return (
            <div className={classes.loading}>
                <Col alignItems={'center'} alignContent={'center'} justify={'center'} style={{height: '100%'}}>
                    <Loader size={80} color={'#fff'}/>
                </Col>
            </div>
        );
    } else {
        return null;
    }
};
