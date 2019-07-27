import React from 'react';
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";


export const Login = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h2 className={"box-layout__title"}>Expensify Web Application</h2>
            <button className={"button"} onClick={props.startLogin}>Login</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login)
