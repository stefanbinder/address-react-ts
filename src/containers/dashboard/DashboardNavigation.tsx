import * as React from "react";
import {Icon, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

interface INavigationItemProps {
    text: string;
    icon: string;
    to: string;
}

const NavigationItem = (props: INavigationItemProps) => {
    return (
        <ListItem button={true} key={props.text} href={ props.to }>
            <ListItemIcon><Icon>{props.icon}</Icon></ListItemIcon>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};

export const DashboardNavigation = () => {
    return (
        <List>
            <NavigationItem text={'Dashboard'} to={'/dashboard'} icon={'home'}/>
            <NavigationItem text={'Countries'} to={'/dashboard/countries'} icon={'world'}/>
            <NavigationItem text={'Typography'} to={'/typo'} icon={'text'}/>
        </List>
    );
};
