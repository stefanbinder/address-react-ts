import * as React from 'react';
import {ReactNode} from 'react';
import {DashboardNavigation} from "containers/dashboard/DashboardNavigation";
import {
    AppBar, Avatar,
    Badge,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    Icon,
    IconButton, makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import clsx from "clsx";
import Page, {IPageProps} from "layouts/Page";
import Breadcrumbs, {IBreadcrumb} from "components/Breadcrumbs";



export interface IDashboardProps {
    title: string;
    breadcrumbs: IBreadcrumb[],
    children: ReactNode;
    pageProps?: IPageProps;
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
                        <IconButton onClick={handleDrawerClose}>
                            <Icon>chevron_left</Icon>
                        </IconButton>
                    </div>
                    <Divider/>
                    <DashboardNavigation/>
                    <Divider/>
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
