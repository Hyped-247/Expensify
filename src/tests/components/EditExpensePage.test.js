import React from 'react';
import {shallow} from 'enzyme';
import expenses from "../fixtures/expenses";
import {EditExpensePage} from "../../components/EditExpensePage";

let editExpense, startRemoveExpenses, history, wrapper;


beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            startRemoveExpenses={startRemoveExpenses}
            history={history}
            expense={expenses[1]}
        />);
});


test('should render Edit Expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit for edit form', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle onSubmit for delete form', () => {
    wrapper.find('button').prop('onClick')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({'id': expenses[1].id});
});