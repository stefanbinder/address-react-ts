import * as React from "react";
import {Dashboard} from "./dashboard/Dashboard";
import DashboardCountries from "./dashboard/DashboardCountries";
import DashboardCountryForm from "./dashboard/DashboardCountryForm";
import Home from "./Home";
import ExampleTypoPage from "containers/ExampleTypoPage";
import {Route, Switch} from "react-router";

class RouteContainer extends React.Component {

    public render() {
        return (
            <main>
                <Switch>
                    <Route exact={ true } path='/' component={Home}/>
                    <Route exact={ true } path='/dashboard' component={Dashboard}/>
                    <Route exact={ true } path='/dashboard/sub1' component={ DashboardCountries }/>
                    <Route exact={ true } path='/dashboard/sub2' component={ DashboardCountries }/>

                    <Route exact={ true } path='/lehub' component={Dashboard}/>
                    <Route exact={ true } path='/lehub/sub1' component={ DashboardCountries }/>
                    <Route exact={ true } path='/lehub/sub2' component={ DashboardCountries }/>

                    <Route exact={ true } path='/dashboard/countries' component={ DashboardCountries }/>
                    <Route exact={ true } path='/dashboard/countries/:country' component={ DashboardCountryForm }/>
                    <Route exact={ true } path='/typo' component={ ExampleTypoPage }/>

                    <Route exact={ true } path='/skype' component={ ExampleTypoPage }/>
                    <Route exact={ true } path='/skype/conv1' component={ ExampleTypoPage }/>
                    <Route exact={ true } path='/skype/conv2' component={ ExampleTypoPage }/>
                </Switch>
            </main>
        );
    }

}

export default RouteContainer;
