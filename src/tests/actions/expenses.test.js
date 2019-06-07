import {addExpense, editExpense, removeExpense} from "../../actions/expenses";


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
            }
        )
});


test('should set up the add expense action object with provided values.', () => {
    const expenseData = {
        description: 'Rent',
        amount: 195500,
        createdAt:1000,
        note: 'This was last month rent.'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {...expenseData, id: expect.any(String)}
    })
});

test('should set up the add expense action object with default values.', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)}
    })
});















