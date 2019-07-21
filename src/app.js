import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import {startSetExpenses} from "./actions/expenses";
import { firebase } from './firebase/firebase';

const store = configureStore();
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('login in');
    } else {
        console.log('login out');
    }
});








