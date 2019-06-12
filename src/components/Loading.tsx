import React from 'react';

interface ILoadingProps {
    loading: boolean;
    render: () => {};
}

const Loading: React.FC<ILoadingProps> = props => {

    if( props.loading ) {
        return (<span>Loading...</span>)
    }

    return (
        <div>
            {props.render()}
        </div>
    );
};

export default Loading;
