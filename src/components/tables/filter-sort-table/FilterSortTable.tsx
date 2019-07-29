import React, {useContext, useEffect, useState} from 'react';
import {get, xor} from "lodash";
import {AxiosRequestConfig} from "axios";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import {factory} from "config/ConfigLog4j";
import {Col} from "components/grid";
import {Loader} from "components/Loading";
import {
    BulkCheckbox,
    TableLoadingOverlay,
    TableWrapper
} from "components/tables/filter-sort-table/FilterSortTableStyles";
import Paper from "@material-ui/core/Paper/Paper";
import FilterSortTableRow from "components/tables/filter-sort-table/FilterSortTableRow";
import {IFilterSortTable, IFilterSortTableColumn} from "components/tables/filter-sort-table/index";
import FilterSortTableHeadline from "components/tables/filter-sort-table/FilterSortTableHeadline";
import qs from "qs";
import TableBulkActions from "components/tables/filter-sort-table/TableBulkActions";
import TableSortLabel from "@material-ui/core/TableSortLabel/TableSortLabel";
import {
    FilterSortTableContext,
    FilterSortTableProvider
} from "components/tables/filter-sort-table/FilterSortTableContext";
import {DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_OPTIONS} from "components/tables/filter-sort-table/config";

const tableLog = factory.getLogger('table');

const FilterSortTableComponent: React.FC<IFilterSortTable> = props => {

    const {
        api
    } = props;

    const {tableState, tableDispatch} = useContext(FilterSortTableContext);
    const [columns] = useState<IFilterSortTableColumn[]>(props.columns);

    const [hasBulkAction] = useState(props.bulkActions && props.bulkActions.length > 0);
    const [bulkList, setBulkList] = useState<Array<(string | number)>>([]);

    const [orderBy, setOrderBy] = useState<string>('id');
    const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        loadTable();
    }, [tableState.apiQuery]);

    const loadTable = () => {
        tableLog.info('Load Table');

        const config: AxiosRequestConfig = {
            params: {
                ...tableState.apiQuery,
            },
            paramsSerializer: qs.stringify
        };

        api.index(config)
            .catch(error => {
                debugger;
            });
    };

    const dispatchSetApiQuery = (param: string, value: any) => {
        const apiQuery = {...tableState.apiQuery};
        apiQuery[param] = value;
        tableDispatch({
            type: 'setApiQuery',
            apiQuery
        });
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        tableLog.info('Paginate Page: ' + page);
        dispatchSetApiQuery('page', page + 1);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const perPage = parseInt(get(event, 'target.value', DEFAULT_PAGE_SIZE), 10);
        tableLog.info('Change Rows per Page: ' + perPage);
        dispatchSetApiQuery('per_page', perPage);
    };

    // const handleOnFilterChange = (newFilters: ITableFilter[]) => {
    //     setFilters(newFilters);
    //
    //     const apiFilters: object = {};
    //
    //     newFilters.forEach((f: ITableFilter) => {
    //         if (f.value) {
    //             if (f.comparator) {
    //                 apiFilters[f.attrValue] = {};
    //                 apiFilters[f.attrValue][f.comparator] = f.value;
    //             } else {
    //                 apiFilters[f.attrValue] = f.value;
    //             }
    //         }
    //     });
    //
    //     dispatchSetApiQuery('filter', apiFilters);
    // };



    const handleOnSortChange = (property: string) => (event: any) => {
        const isDesc = orderBy === property && orderDirection === 'desc';
        setOrderDirection(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
        dispatchSetApiQuery('sort', `${isDesc ? '' : '-' }${property.replace('attributes.', '')}`);
    };

    const handleBulkAll = () => {
        if (bulkList.length > 0) {
            setBulkList([]);
        } else {
            setBulkList(api.items ? api.items.map((item: any) => item.id) : []);
        }
    };

    const handleBulkSingle = (id: string | number) => {
        setBulkList(xor(bulkList, [id]));
    };

    const {WrapperComponent = Paper} = props;

    return (
        <TableWrapper>
            <WrapperComponent classes={{root: 'table-wrapper-component'}}>
                <FilterSortTableHeadline showSearch={props.searchable}
                                         filters={props.filters}
                />

                {props.bulkActions && bulkList.length > 0 ?
                    <TableBulkActions bulkList={bulkList} bulkActions={props.bulkActions}/>
                    : null}

                <div className={'table-scrollable'}>
                    <Table className={'filter-sort-table'}>
                        <TableHead>
                            <TableRow>
                                {hasBulkAction ? (
                                    <TableCell style={{width: 50}}>
                                        <BulkCheckbox
                                            indeterminate={api.items && bulkList.length > 0 && bulkList.length < api.items.length}
                                            checked={api.items && bulkList.length === api.items.length}
                                            onChange={handleBulkAll}
                                        />
                                    </TableCell>
                                ) : null}
                                {columns.map((column: IFilterSortTableColumn, idx) => (
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
                                {props.actions && props.actions.length > 0 ? (
                                    <TableCell style={{width: 80}}>Actions</TableCell>
                                ) : null}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {api.items ? api.items.map((row: any, rowIdx) => (
                                <FilterSortTableRow key={rowIdx}
                                                    row={row}
                                                    columns={props.columns}
                                                    actions={props.actions}
                                                    hasBulkAction={hasBulkAction}
                                                    bulkChecked={bulkList.indexOf(row.id) > -1}
                                                    onBulkChange={handleBulkSingle}

                                />
                            )) : null}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={DEFAULT_PAGE_SIZE_OPTIONS}
                    component="div"
                    count={api.meta.total || 1}
                    rowsPerPage={tableState.apiQuery.per_page}
                    page={tableState.apiQuery.page - 1}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                />
                <TableLoading loading={api.loading}/>
            </WrapperComponent>
        </TableWrapper>
    );
};

const FilterSortTable: React.FC<IFilterSortTable> = props => {
    return (
        <FilterSortTableProvider>
            <FilterSortTableComponent {...props} />
        </FilterSortTableProvider>
    )
};

export default FilterSortTable;

const TableLoading = (props: { loading: boolean }) => {
    if (props.loading) {
        return (
            <TableLoadingOverlay>
                <Col alignItems={'center'} alignContent={'center'} justify={'center'} style={{height: '100%'}}>
                    <Loader size={80} color={'#fff'}/>
                </Col>
            </TableLoadingOverlay>
        );
    } else {
        return null;
    }
};
