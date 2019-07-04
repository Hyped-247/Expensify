import {startAddExpenses, addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123css'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123css'})
});

test('should setup edit expense action object', () => {
    const action = editExpense('123', {description: 'hi there', amount: 222});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {description: 'hi there', amount: 222}
    })
});

test('should set up the add expense action object with provided values.', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    // this is how to create a fake Redux store.
    const store = createMockStore({});
    const expenseData = {
       description: 'Mouse',
       amount: 3000,
       note: 'This one is better.',
       createdAt: 1000
    };
    store.dispatch(startAddExpenses(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
    return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    // this is how to create a fake Redux store.
    const store = createMockStore({});
    const expenseDefaults = {description: '', amount: 0, note: '', createdAt: 0};
    store.dispatch(startAddExpenses({})).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
    return database.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});
