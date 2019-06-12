import * as React from "react";
import {ReactNode} from "react";
import {Link} from "react-router-dom";

export interface IHomeProps {

    children: ReactNode;

}

class Home extends React.Component<IHomeProps> {
    public render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to={'/dashboard'}>Dashboard</Link>
            </div>
        );
    }
}

export default Home;
