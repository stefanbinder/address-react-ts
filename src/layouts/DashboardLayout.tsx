import * as React from 'react';
import {ReactNode} from 'react';
import {DashboardNavigation} from "containers/dashboard/DashboardNavigation";
import clsx from "clsx";
import Page, {IPageProps} from "layouts/Page";
import Breadcrumbs, {IBreadcrumb} from "components/Breadcrumbs";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import Badge from "@material-ui/core/Badge/Badge";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Container from "@material-ui/core/Container/Container";
import {Theme} from "@material-ui/core";
import {ColorTheme} from "config/theme";
import logo from "../assets/logo.png";

export interface IDashboardProps {
    title: string;
    breadcrumbs: IBreadcrumb[],
    children: ReactNode;
    pageProps?: IPageProps;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        backgroundColor: ColorTheme.primary.dark,
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        backgroundColor: ColorTheme.grey.main,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function DashboardLayout(props: IDashboardProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Page { ...props.pageProps }>
            <div className={classes.root} >
                <CssBaseline/>
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap={true} className={classes.title}>
                            { props.title }
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <Icon>notifications</Icon>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Avatar alt={'SB'} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <img src={ logo } alt={'Logo'} style={{ maxWidth: '100%', maxHeight: 60 }}/>
                        <IconButton onClick={handleDrawerClose}>
                            <Icon>chevron_left</Icon>
                        </IconButton>
                    </div>
                    <DashboardNavigation/>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Breadcrumbs breadcrumbs={ props.breadcrumbs }/>
                    <Container maxWidth="xl" className={classes.container}>
                        {props.children}
                    </Container>
                </main>
            </div>
        </Page>
    );
}
