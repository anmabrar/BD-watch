import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';


const AdminRoute = ({children, ...rest}) => {
    const {user,admin, loading} = useAuth();
    if(loading){
        <Spinner animation="border" />
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email && admin ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/home",
                        state: { from: location }
                    }}
                />
            )
        }
    />
    );
};

export default AdminRoute;