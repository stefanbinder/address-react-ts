import {Grid} from "@material-ui/core";
import {GridProps} from "@material-ui/core/Grid";
import * as React from "react";
import {ReactNode} from "react";

export interface IColProps extends GridProps {
    children: ReactNode,
}

export const Col = (props: IColProps ) => {
    const additionalProps = {
        container: false,
    };

    if( props.alignItems || props.alignContent ) {
        additionalProps.container = true;
    }

    return (<Grid item={true} { ...props } {...additionalProps}>{ props.children }</Grid>);
};

