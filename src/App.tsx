import * as React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import RouteContainer from "./containers/RouteContainer";
import {theme} from "config/theme";
import {MuiThemeProvider} from "@material-ui/core/styles";
import StackableModalManager from "packages/react-stackable-modal/StackableModalManager";

class App extends React.Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <StackableModalManager>
                    <BrowserRouter>
                        <RouteContainer/>
                    </BrowserRouter>
                </StackableModalManager>
            </MuiThemeProvider>
        );
    }
}

export default App;
