import * as React from "react";
import {Dashboard} from "./dashboard/Dashboard";
import DashboardCountries from "./dashboard/DashboardCountries";
import DashboardCountryForm from "./dashboard/DashboardCountryForm";
import Home from "./Home";
import ExampleTypoPage from "containers/ExampleTypoPage";
import {Route, Switch} from "react-router";
import ReactStackableModalDemo from "containers/package/ReactStackableModalDemo";
import DashboardStates from "containers/dashboard/DashboardStates";
import DashboardStateForm from "containers/dashboard/DashboardStateForm";

class RouteContainer extends React.Component {

    public render() {
        return (
            <main>
                <Switch>
                    <Route exact={ true } path='/' component={Home}/>
                    <Route exact={ true } path='/dashboard' component={Dashboard}/>
                    <Route exact={ true } path='/dashboard/countries' component={ DashboardCountries }/>
                    <Route exact={ true } path='/dashboard/countries/:country' component={ DashboardCountryForm }/>
                    <Route exact={ true } path='/dashboard/states' component={ DashboardStates }/>
                    <Route exact={ true } path='/dashboard/states/:state' component={ DashboardStateForm }/>
                    <Route exact={ true } path='/dashboard/typo' component={ ExampleTypoPage }/>

                    <Route exact={ true } path='/package/react-stackable-modal' component={ ReactStackableModalDemo }/>

                </Switch>
            </main>
        );
    }

}

export default RouteContainer;
