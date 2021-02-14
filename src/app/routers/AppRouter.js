import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import Login from '../components/login/LoginPage';
import {DashBoardRoutes} from './DashBoardRoutes';
import PrivateRoute from './PrivateRoute';
import {AuthContext} from '../auth/AuthContext';
import PublicRoute from "./PublicRoute";

export default function AppRouter() {

    const {user: {log}} = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact={true}
                        path="/login"
                        component={Login}
                        isAuthenticated={log}
                    />
                    <PrivateRoute
                        path="/"
                        isAuthenticated={log}
                        component={DashBoardRoutes}
                    />
                </Switch>
            </div>
        </Router>
    );
}