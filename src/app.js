import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import {login, logout} from './actions/auth';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import {startSetExpenses} from "./actions/expenses";
import { firebase } from './firebase/firebase';
import LoadingPage from "./components/LoadingPage";
const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<LoadingPage />, document.getElementById('app'));
// ReactDOM.render(jsx, document.getElementById('app'));
// let hasRendered = false;
// const renderApp = () => {
//     if (!hasRendered) {
//         ReactDOM.render(jsx, document.getElementById('app'));
//         hasRendered = true;
//     }
// };
//
// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
//
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log('uid', user.id);
//         store.dispatch(login(user.uid));
//         store.dispatch(startSetExpenses()).then(() => {
//             renderApp();
//             if (history.location.pathname === '/') {
//                 history.push('/dashboard')
//             }
//         });
//     } else {
//         store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// });








