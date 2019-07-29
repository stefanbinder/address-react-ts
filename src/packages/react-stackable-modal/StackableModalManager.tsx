import React from 'react';

export const StackableModalContext = React.createContext({

});

const StackableModalManager: React.FC = props => {
    return (
        <StackableModalContext.Provider value={{}}>
            { props.children }
        </StackableModalContext.Provider>
    );
};

export default StackableModalManager;
