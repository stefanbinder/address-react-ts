import React from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";
import {Col, Row} from "components/grid";
import {Avatar} from "@material-ui/core";

interface IPageProps {
    metaTitle?: string;
    metaDescription?: string;
}

const Page: React.FC<IPageProps> = props => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{props.metaTitle}</title>
                <meta name='description'>{props.metaDescription}</meta>
            </Helmet>
            <PageStyle>
                <Row>
                    <Col xs={3}>
                        Logos goes here
                    </Col>
                    <Col xs={9} justify={'flex-end'}>
                        <Avatar />
                    </Col>
                </Row>

                { props.children }

            </PageStyle>
        </React.Fragment>
    );
};

export default Page;

const PageStyle = styled.div`
  &&{
    background-color: #eee;
  }
`;
