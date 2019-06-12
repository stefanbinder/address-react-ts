import * as React from 'react';
import {ReactNode} from "react";
import {Row, Col} from "components/grid";
import {DashboardNavigation} from "containers/dashboard/DashboardNavigation";
import Helmet from "react-helmet";

export interface IDashboardProps {
    title: string;
    children: ReactNode;
}

const DashboardLayout = (props: IDashboardProps) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{ props.title }</title>
            </Helmet>
            <Row>
                <Col xs={ 3 }>
                    <DashboardNavigation />
                </Col>
                <Col xs={ 9 }>
                    <h1>{ props.title }</h1>
                    { props.children }
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashboardLayout;
