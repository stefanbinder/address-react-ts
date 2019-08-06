import React, {useContext, useEffect, useState} from 'react';
import {get} from "lodash";
import {AxiosRequestConfig} from "axios";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TablePagination from "@material-ui/core/TablePagination/TablePagination";
import {factory} from "config/ConfigLog4j";
import {Col} from "components/grid";
import {Loader} from "components/Loading";
import {TableLoadingOverlay, TableWrapper} from "components/tables/filter-sort-table/FilterSortTableStyles";
import Paper from "@material-ui/core/Paper/Paper";
import FilterSortTableRow from "components/tables/filter-sort-table/FilterSortTableRow";
import {IFilterSortTable} from "components/tables/filter-sort-table/index";
import FilterSortTableHeadline from "components/tables/filter-sort-table/FilterSortTableHeadline";
import qs from "qs";
import TableBulkActions from "components/tables/filter-sort-table/TableBulkActions";
import {
    FilterSortTableContext,
    FilterSortTableProvider
} from "components/tables/filter-sort-table/FilterSortTableContext";
import {DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_OPTIONS} from "components/tables/filter-sort-table/config";
import FilterSortTableHeader from "components/tables/filter-sort-table/FilterSortTableHeader";

const tableLog = factory.getLogger('table');

const FilterSortTableComponent: React.FC<IFilterSortTable> = props => {

    const {api} = props;
    const {tableState, tableDispatch} = useContext(FilterSortTableContext);

    const [hasBulkAction] = useState<boolean>(!!props.bulkActions && props.bulkActions.length > 0);

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
                tableLog.error(error);
            });
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        tableLog.info('Paginate Page: ' + page);
        tableDispatch({
            type: 'setApiQueryPage',
            payload: page + 1
        });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const perPage = parseInt(get(event, 'target.value', DEFAULT_PAGE_SIZE), 10);
        tableLog.info('Change Rows per Page: ' + perPage);
        tableDispatch({
            type: 'setApiQueryPerPage',
            payload: perPage
        });
    };

    const {WrapperComponent = Paper} = props;

    return (
        <TableWrapper>
            <WrapperComponent classes={{root: 'table-wrapper-component'}}>
                <FilterSortTableHeadline showSearch={props.searchable}
                                         filters={props.filters}
                />

                {hasBulkAction ?
                    <TableBulkActions bulkActions={props.bulkActions}/>
                    : null}

                <div className={'table-scrollable'}>
                    <Table className={'filter-sort-table'}>
                        <FilterSortTableHeader hasBulkAction={hasBulkAction} columns={props.columns}
                                               showActionColumn={!!props.actions && props.actions.length > 0}
                                               items={api.items}
                        />
                        <TableBody>
                            {api.items ? api.items.map((row: any, rowIdx) => (
                                <FilterSortTableRow key={rowIdx}
                                                    row={row}
                                                    columns={props.columns}
                                                    actions={props.actions}
                                                    hasBulkAction={hasBulkAction}
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

const TableLoading = React.memo((props: { loading: boolean }) => {
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
});
