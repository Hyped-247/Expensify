import { connect } from "react-redux";
import { Router } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {Header} from "../components/Header";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest  // This is going to store everything else to the rest variable.
    }) => (
        <Router {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(PrivateRoute);














