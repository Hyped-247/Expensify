import React from 'react';
import {shallow} from 'enzyme';
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test('should render expense list items', () => {
    const wrapper = shallow(<ExpenseListItem  expenses={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});






























