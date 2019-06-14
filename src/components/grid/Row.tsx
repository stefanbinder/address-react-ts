import Grid, {GridProps} from "@material-ui/core/Grid";
import * as React from "react";
import {ReactNode} from "react";

export interface IRowProps extends GridProps{
    children: ReactNode,
}

export const Row = (props: IRowProps ) => {
    return (<Grid container={true} { ...props }>{ props.children }</Grid>);
};

