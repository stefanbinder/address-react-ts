import * as React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import RouteContainer from "./containers/RouteContainer";
import {MuiThemeProvider} from "@material-ui/core/styles";
import {theme} from "./config/theme";

class App extends React.Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <RouteContainer/>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
