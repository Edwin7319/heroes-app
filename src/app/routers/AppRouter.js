import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Login from '../components/login/LoginPage';
import {DashBoardRoutes} from './DashBoardRoutes';

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact={true}
                        path="/login"
                        component={Login}
                    >
                    </Route>
                    <Route
                        path="/"
                        component={DashBoardRoutes}
                    >
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}