import React, {ReactNode} from 'react';

interface IDashboardStateFormProps {
    children?: ReactNode;
}

const DashboardStateForm: React.FC<IDashboardStateFormProps> = props => {
    return (
        <div>
            <h1>state form</h1>
        </div>
    );
};

export default DashboardStateForm;
