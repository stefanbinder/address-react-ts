import React, {ReactNode, useEffect} from 'react';
import {IAPI} from "lib/api";
import {defaultLog} from "../../../config/ConfigLog4j";
import Loading from "components/Loading";
import {Col, Row} from "components/grid";
import MaterialTable, {Column} from "material-table";
import {IJsonApiIDObject} from "packages/jsonapi-helpers";

interface IFilterSortTableProps {
    renderFilter: () => ReactNode,
    searchable: boolean,
    renderTableHeader: ReactNode,
    renderTableRow: (row: object) => ReactNode,
    renderTableRowActions: ReactNode,
    tableColumns: Column[],
    api: IAPI,
}

const FilterSortTable: React.FC<IFilterSortTableProps> = props => {

    useEffect(() => {
        defaultLog.info('Load Countries');

        props.api.index();

    }, []);

    const handleDeleteRow = (event: Event, rowData: IJsonApiIDObject) => {
        if( rowData.id ) {
            props.api.destroy(rowData.id);
        }
    };

    const renderTableRows = () => {
        return (
            <MaterialTable
                columns={ props.tableColumns }
                data={ props.api.data }
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Delete row',
                        onClick: handleDeleteRow
                    }
                ]}
            />
        );
    };

    return (
        <div>
            <Row>
                <Col xs={12} md={8}>
                    Filter:
                    { props.renderFilter() }
                </Col>
                <Col xs={12} md={4}>
                    Search Box
                </Col>
            </Row>

            <Loading loading={props.api.loading} render={renderTableRows}/>
        </div>
    );
};

export default FilterSortTable;
