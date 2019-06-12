import React, {ReactNode, useEffect} from 'react';
import {IAPI} from "lib/api";
import {defaultLog} from "../../../config/ConfigLog4j";
import Loading from "components/Loading";
import MaterialTable, {Column} from "material-table";
import {IJsonApiIDObject} from "packages/jsonapi-helpers";

interface IFilterSortTableProps {
    tableTitle: string;
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
                title={ props.tableTitle }
                columns={ props.tableColumns }
                data={ props.api.items || [] }
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
        <Loading loading={props.api.loading} render={renderTableRows}/>
    );
};

export default FilterSortTable;
