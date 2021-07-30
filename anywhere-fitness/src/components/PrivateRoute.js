import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={(renderprops) => {
    if(localStorage.getItem('token') === null) {
        return <Redirect to ='/login'/>
    }
    return <Component {...renderprops} />
  }} />
}

export default PrivateRoute;