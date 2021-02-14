import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PublicRoute(
    {
        isAuthenticated,
        component: Component,
        ...rest
    }
) {
    return (
        <Route
            {...rest}
            component={
                (props) => (
                    isAuthenticated ?
                        <Redirect to="/all"/> :
                        <Component {...props}/>
                )
            }
        />
    );
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.number.isRequired,
    component: PropTypes.func.isRequired,
}