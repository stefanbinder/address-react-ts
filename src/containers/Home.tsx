import * as React from "react";
import {ReactNode} from "react";

export interface IHomeProps {

    children: ReactNode;

}

class Home extends React.Component<IHomeProps> {
    public render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
