import React from 'react';

interface ILoadingProps {
    loading: boolean;
    render: () => {};
}

interface ILoaderProps {
    color?: string;
    size?: number;
}

const Loader: React.FC<ILoaderProps> = props => {

    const {
        color='#fff',
        size=44
    } = props;

    const halfSize = size / 2;

    return (
        <svg width={ size } height={ size } viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg" stroke={ color }>
            <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx={ halfSize } cy={ halfSize } r="1">
                    <animate attributeName="r"
                             begin="0s" dur="1.8s"
                             values={`1; ${halfSize}`}
                             calcMode="spline"
                             keyTimes="0; 1"
                             keySplines="0.165, 0.84, 0.44, 1"
                             repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity"
                             begin="0s" dur="1.8s"
                             values="1; 0"
                             calcMode="spline"
                             keyTimes="0; 1"
                             keySplines="0.3, 0.61, 0.355, 1"
                             repeatCount="indefinite" />
                </circle>
                <circle cx={ halfSize } cy={ halfSize } r="1">
                    <animate attributeName="r"
                             begin="-0.9s" dur="1.8s"
                             values={`1; ${halfSize}`}
                             calcMode="spline"
                             keyTimes="0; 1"
                             keySplines="0.165, 0.84, 0.44, 1"
                             repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity"
                             begin="-0.9s" dur="1.8s"
                             values="1; 0"
                             calcMode="spline"
                             keyTimes="0; 1"
                             keySplines="0.3, 0.61, 0.355, 1"
                             repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    );
};

const Loading: React.FC<ILoadingProps> = props => {

    if( props.loading ) {
        return (<Loader />)
    }

    return (
        <div>
            {props.render()}
        </div>
    );
};

export default Loading;
export {
    Loader
};
