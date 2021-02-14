import React from 'react';
import Navbar from '../components/ui/Navbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import MarvelPage from '../components/marvel/MarvelPage';
import HeroPage from '../components/heroes/HeroPage';
import DcPage from '../components/dc/DcPage';
import Search from '../components/search/Search';
import AllHeroePage from '../components/all-heroes/AllHeroePage';

export function DashBoardRoutes() {
    return (
        <>
            <Navbar/>
            <div className="container mt-5">
                <Switch>
                    <Route
                        exact={true}
                        path="/all"
                        component={AllHeroePage}
                    />
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
                    <Route
                        exact={true}
                        path="/buscar"
                        component={Search}
                    />
                    <Redirect to="/all"/>
                </Switch>
            </div>
        </>
    );
}