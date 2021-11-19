import React from 'react';
import useAuth from '../../Hook/useAuth';
import { Redirect, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth();
    if(loading){
        <Spinner animation="border" />
    }
    return (
        <Route
            {...rest}
            render = {({location}) => user.email ? children : <Redirect
                to = {{
                    pathname : "/login",
                    state : { from : location }
                }}
            ></Redirect>}
        ></Route>
    );
};

export default PrivateRoute;