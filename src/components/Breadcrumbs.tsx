import React from 'react';
import {Breadcrumbs as MUIBreadcrumbs, Icon, Link, makeStyles} from "@material-ui/core";

export interface IBreadcrumb {
    title: string;
    href: string;
}

export interface IBreadcrumbsProps {
    breadcrumbs: IBreadcrumb[],
}

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(4),
    }
}));

const Breadcrumbs: React.FC<IBreadcrumbsProps> = props => {
    const classes = useStyles();

    return (
        <MUIBreadcrumbs separator={<Icon fontSize="small">keyboard_arrow_right</Icon>} aria-label="Breadcrumb" className={ classes.root }>
            { props.breadcrumbs.map( breadcrumb => (
                <Link key={ breadcrumb.title } color="inherit" href={ breadcrumb.href }>
                    { breadcrumb.title }
                </Link>
            )) }
        </MUIBreadcrumbs>
    );
};

export default Breadcrumbs;
