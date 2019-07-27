import { connect } from "react-redux";
import { Router } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {Header} from '../components/Header'
import React from "react";

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest  // This is going to store everything else to the rest variable.
    }) => (
        <Router {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
             <Component {...props} />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(PublicRoute);
