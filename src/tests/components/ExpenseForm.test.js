import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render the expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test('should render the expense form correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render error if form submission is not valid', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('error').length).toBeGreaterThan(0);
});



test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
       target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});


test('should set note on textarea change', () => {
    const value = 'New note description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').at(0).simulate('change', {
       target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});


test('should set amount with correct data', () => {
    const value = '99.99';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
       target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});


test('should set amount with incorrect data', () => {
    const value = '122.9999999';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
       target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});


test('should call onSubmit function for valid form data', ()=> {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt.valueOf(),
        note: expenses[0].note
    });
});


test('should set new date', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
});


test('should set calender focus correctly', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calenderFocused')).toBe(focused);

    wrapper.find('SingleDatePicker').prop('onFocusChange')(!focused);
    expect(wrapper.state('calenderFocused')).toBe(!focused);
});














