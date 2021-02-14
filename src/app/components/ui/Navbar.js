import React, {useContext} from 'react'
import {Link, NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../auth/AuthContext';
import {typesApp} from "../../types/types";


export default function Navbar() {

    const {user: {name}} = useContext(AuthContext);

    const {dispatch} = useContext(AuthContext);

    const history = useHistory();

    const {logout} = typesApp;

    const handleLogOut = () => {
        dispatch({
            type: logout,
            payload: {},
        });
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/all"
                    >
                        Todos
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/buscar"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <p className="nav-link nav-item text-info">
                        {`${name}`.toUpperCase()}
                    </p>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogOut}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
}