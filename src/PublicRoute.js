import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ component: Component, restricted, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('X-AUTH-TOKEN') && restricted ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default PublicRoute;