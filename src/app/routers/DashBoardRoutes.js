import React from 'react';
import Navbar from '../components/ui/Navbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import MarvelPage from '../components/marvel/MarvelPage';
import HeroPage from '../components/heroes/HeroPage';
import DcPage from '../components/dc/DcPage';

export function DashBoardRoutes() {
    return (
        <>
            <Navbar/>
            <div>
                <Switch>
                    <Route
                        exact={true}
                        path="/marvel"
                        component={MarvelPage}
                    />
                    <Route
                        exact={true}
                        path="/hero/:heroId"
                        component={HeroPage}
                    />
                    <Route
                        exact={true}
                        path="/dc"
                        component={DcPage}
                    />
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    );
}