import * as React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import RouteContainer from "./containers/RouteContainer";

class App extends React.Component {
  public render() {
    return (
        <BrowserRouter>
            <RouteContainer/>
        </BrowserRouter>
    );
  }
}

export default App;
