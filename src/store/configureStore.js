import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


export default () => {
  // This is going to return the store.
  return createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
      composeEnhancers(applyMiddleware(thunk))
  );
};
