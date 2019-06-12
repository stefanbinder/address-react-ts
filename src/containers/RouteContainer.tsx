import * as React from "react";
import {Route, Switch} from "react-router";
import {Dashboard} from "./dashboard/Dashboard";
import DashboardCountries from "./dashboard/DashboardCountries";
import DashboardCountryForm from "./dashboard/DashboardCountryForm";
import Home from "./Home";

class RouteContainer extends React.Component {

    public render() {
        return (
            <main>
                <Switch>
                    <Route exact={ true } path='/' component={Home}/>
                    <Route exact={ true } path='/dashboard' component={Dashboard}/>
                    <Route exact={ true } path='/dashboard/countries' component={ DashboardCountries }/>
                    <Route exact={ true } path='/dashboard/countries/:country' component={ DashboardCountryForm }/>
                </Switch>
            </main>
        );
    }

}

export default RouteContainer;
