import React from 'react';
import Helmet from "react-helmet";

export interface IPageProps {
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
}

const Page: React.FC<IPageProps> = props => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{props.metaTitle || 'Address Dashboard'}</title>
                <meta name='description'>{props.metaDescription || ''}</meta>
            </Helmet>
            {props.children}
        </React.Fragment>
    );
};

export default Page;
