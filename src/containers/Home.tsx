import * as React from "react";
import {ReactNode} from "react";
import DashboardLayout from "layouts/DashboardLayout";

export interface IHomeProps {

    children: ReactNode;

}

class Home extends React.Component<IHomeProps> {
    public render() {
        return (
            <DashboardLayout title={'Home'}>
                <div>Home</div>
            </DashboardLayout>
        );
    }
}

export default Home;
