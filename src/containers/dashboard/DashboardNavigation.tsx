import * as React from "react";
import {Link} from "react-router-dom";


export const DashboardNavigation = () => {
    return (
        <ul>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
            <li>
                <Link to={'/dashboard/countries'}>Countries</Link>
                <ul>
                    <li><Link to={'/dashboard/countries/new'}>New</Link></li>
                </ul>
            </li>

        </ul>
    );
};

