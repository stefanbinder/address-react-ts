import React from 'react';
import styled from "styled-components";
import {ITableAction} from "components/tables/filter-sort-table/index";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import {Col, Row} from "components/grid";
import Typography from "@material-ui/core/Typography/Typography";
import {ColorTheme} from "config/theme";

interface ITableBulkActionsProps {
    bulkList: Array<(number | string)>;
    bulkActions: ITableAction[];
}

const TableBulkActions: React.FC<ITableBulkActionsProps> = props => {

    const renderAction = (action: ITableAction) => {

        const handleCallAction = (event: React.MouseEvent<HTMLElement>) => action.onClick(event, props.bulkList);

        return (
            <Button onClick={handleCallAction} style={{marginRight: 8}} variant={'contained'}>
                {action.icon ? <Icon>{action.icon}</Icon> : null}
                {action.name}
            </Button>
        );
    };

    return (
        <BulkActionWrapper>
            <Col xs={12} alignContent={'center'} justify={'flex-start'} direction={'row'}>
                <Typography variant={'body2'} style={{marginRight: 24, marginLeft: 24, marginTop: 7, fontWeight: 600, color: ColorTheme.secondary.contrastText }}>
                    {props.bulkList.length} selected
                </Typography>

                {props.bulkActions.map(renderAction)}

            </Col>
        </BulkActionWrapper>
    );
};

export default TableBulkActions;

const BulkActionWrapper = styled(Row)`
&& {
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: ${ColorTheme.secondary.dark};
}
`;
