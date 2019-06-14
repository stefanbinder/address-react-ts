import * as React from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Icon from "@material-ui/core/Icon/Icon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";

interface INavigationItemProps {
    text: string;
    icon: string;
    to: string;
}

const NavigationItem = (props: INavigationItemProps) => {
    return (
        <ListItem button={true} key={props.text} component={'a'} href={ props.to }>
            <ListItemIcon><Icon>{props.icon}</Icon></ListItemIcon>
            <ListItemText primary={props.text}/>
        </ListItem>
    );
};

export const DashboardNavigation = () => {
    return (
        <List>
            <NavigationItem text={'Dashboard'} to={'/dashboard'} icon={'home'}/>
            <NavigationItem text={'Countries'} to={'/dashboard/countries'} icon={'flag'}/>
            <NavigationItem text={'Typography'} to={'/typo'} icon={'text_format'}/>
        </List>
    );
};
