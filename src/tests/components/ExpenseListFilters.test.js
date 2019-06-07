import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import {filters, altFilters} from "../fixtures/filters";
import expenses from "../fixtures/expenses";
import moment from "moment";


let setTextFilter, sortByDate,
    sortByAmount, setStartDate,
    setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
});


test('should render expense list filter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should render expense with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});


test('should handle text change', () => {
    const value = 'This is my message.';
    wrapper.find('input').simulate('change', {
       target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});


test('should sort by date', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {target: {value}});
    expect(sortByDate).toHaveBeenCalled();
});


test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
       target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});


test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


test('should handle date focus changes', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calendarFocused')).toBe(calenderFocused);
});

