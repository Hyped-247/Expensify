import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
    return (
        <div>
            <h2>Here is all the info</h2>
            <h2>{props.info}</h2>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <div>
                    <h2>You're authenticated.</h2>
                    <WrappedComponent {...props} />
                </div>
                )
                : <h2>User is not auth</h2>}
        </div>
    );
};


const UserAuth = requireAuthentication(Info);

ReactDOM.render(<UserAuth isAuth={false} info="This is my data." />, document.getElementById('app'));





