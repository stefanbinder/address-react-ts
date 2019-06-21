import React, {useState} from 'react';
import {ITableAction} from "components/tables/filter-sort-table/index";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";

interface ITableActionsProps {
    actions: ITableAction[],
    row: any;
}

const TableActions: React.FC<ITableActionsProps> = props => {

    const [showAction, setShowAction] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleCloseFilter() {
        setAnchorEl(null);
        setShowAction(false);
    }

    const handleShowFilter = (event: any) => {
        setAnchorEl(event.currentTarget);
        setShowAction(true);
    };

    const renderAction = (action: ITableAction, idx: number) => {
        const callAction = (event: React.MouseEvent<HTMLElement>) => action.onClick(event, props.row);
        return (
            <StyledActionElement key={idx} button={true} onClick={callAction}>
                {action.icon ? (
                    <ListItemIcon className={'navigationListIcon'}>
                        {typeof action.icon === 'string' ? (
                            <Icon className={'icon-element'}>{action.icon}</Icon>
                        ) : <Icon>edit</Icon>}
                    </ListItemIcon>
                ) : null}
                <ListItemText className={'navigationListText'} primary={action.name}
                              classes={{primary: 'text-element'}}/>
            </StyledActionElement>
        )
    };

    return (
        <div>
            <IconButton onClick={handleShowFilter} style={{ padding: 3 }}>
                <Icon>more_vert</Icon>
            </IconButton>
            <ActionMenu open={showAction}
                        keepMounted={true}
                        onClose={handleCloseFilter}
                        anchorEl={anchorEl}
            >
                {props.actions.map((action: ITableAction, idx: number) => renderAction(action, idx))}
            </ActionMenu>
        </div>
    );
};

export default TableActions;

export const ActionMenu = styled(Menu)`
&& {
    padding: 10px;
}
`;
export const StyledActionElement = styled(ListItem)`
&& {
    width: 100%;
    min-width: 180px;
    padding: 10px;
}
`;
