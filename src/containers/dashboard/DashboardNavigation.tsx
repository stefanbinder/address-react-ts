import * as React from "react";
import {ReactNode, useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import Icon from "@material-ui/core/Icon/Icon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import {ColorTheme} from "config/theme";
import clsx from "clsx";
import {Link, match, matchPath} from "react-router-dom";
// import {useRouter} from "lib/hooks/useRouter";
import useReactRouter from "use-react-router";
import styled from "styled-components";

interface INavigationItemProps {
    text: string;
    icon: string;
    to?: string;
    children?: ReactNode;
}

const Style = styled.div`
&& {
    width: 100%;
    
    .navigationListItem {
        border-left: 3px solid transparent;
        
        .navigationListIcon {
            color: ${ ColorTheme.grey.contrastText };
        }
        
        .navigationListText {
            color: ${ ColorTheme.grey.contrastText };
        }
        
        &.activeNavigation {
            background-color: ${ ColorTheme.grey.dark };
            border-left-color: ${ ColorTheme.primary.dark };
    
            .navigationListIcon,
            .navigationListText {
                color: #fff;
            }
        }
        
        .navigationListExpand {
            min-width: 20px;
            color: ${ ColorTheme.grey.contrastText };
        }
    }
    
    .subNavigationList {
        background-color: ${ ColorTheme.grey.light };
        padding: 0;
        
        .navigationListItem {
            padding: 5px 20px;
            
            &.activeNavigation {
                border-left-color: ${ ColorTheme.primary.main };
            }
            
            .navigationListIcon {
                min-width: 45px;
            
                .icon-element {
                    font-size: 1.2rem;
                }
            }
            
            .navigationListText {
                .text-element {
                    font-size: 0.9rem;
                }
            }
            
            &.activeNavigation {
                .navigationListText {
                    font-weight: 600;
                }
            }
        }
    }
}
`;

const NavigationItem = (props: INavigationItemProps) => {

    const matchActive = (): match | null => matchPath(location.pathname, props.to || '');

    const {location} = useReactRouter();
    const [active, setActive] = useState<match | null>(matchActive());
    const [showSub, setShowSub] = useState<boolean>(!!active && !!props.children );

    useEffect(() => {
        const tmpActive = matchActive();
        setActive(tmpActive);
        setShowSub(!!tmpActive && !!props.children);
    }, [location.pathname]);

    const handleExpand = () => setShowSub(!showSub);

    const CompLink = React.forwardRef((linkProps: any, ref:any) => (
        <Link {...linkProps} ref={ ref }
              to={props.to}
        />
    ));

    const CompExpand = React.forwardRef((linkProps: any, ref:any) => (
        <div {...linkProps} ref={ ref } onClick={handleExpand}/>
    ));

    return (
        <Style>
            <ListItem key={props.text}
                      button={true}
                      className={clsx('navigationListItem', {'activeNavigation': (!!active && active.isExact) || showSub })}
                      component={props.to ? CompLink : CompExpand}
            >
                <ListItemIcon className={'navigationListIcon'}><Icon className={'icon-element'}>{props.icon}</Icon></ListItemIcon>
                <ListItemText className={'navigationListText'} primary={props.text} classes={{ primary: 'text-element'}}/>

                {props.children ? (
                    <ListItemIcon onClick={handleExpand} className={'navigationListExpand'}>
                        <Icon>{showSub ? 'keyboard_arrow_down' : 'chevron_left'}</Icon>
                    </ListItemIcon>
                ) : null}

            </ListItem>
            {props.children && showSub ? (
                <ListItem key={props.text + 'sub'}
                          className={clsx('subNavigationList', {'active': !!active})}
                >
                    <List component={'div'} style={{width: '100%'}}>
                        {props.children}
                    </List>
                </ListItem>
            ) : null}
        </Style>
    );
};

export const DashboardNavigation = () => {
    return (
        <List component={'div'}>
            <NavigationItem text={'Dashboard'} to={'/dashboard'} icon={'home'}/>
            <NavigationItem text={'Countries'} to={'/dashboard/countries'} icon={'flag'}/>
            <NavigationItem text={'Typography'} to={'/dashboard/typo'} icon={'text_format'}/>
            <NavigationItem text={'Packages'} icon={'camera_enhance'} to={'/package/react-stackable-modal'}>
                <NavigationItem text={'React Stackable Modal'} icon={'modal'} to={'/package/react-stackable-modal'}/>
            </NavigationItem>
        </List>
    );
};
