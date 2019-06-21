import React from 'react';
import {shallow} from "enzyme";
import {ExpenseSummary} from "../../components/ExpenseSummary";


test('render Expense Summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesTotal={1} expenseCount={333}/>);
    expect(wrapper).toMatchSnapshot();
});


test('render Expense Summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesTotal={3} expenseCount={322222222233}/>);
    expect(wrapper).toMatchSnapshot();
});
