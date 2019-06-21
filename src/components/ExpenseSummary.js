import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import {getExpensesTotal} from "../selectors/expenses-total";


export const ExpenseSummary = ({expenseCount, expensesTotal}) => (
    <div>
        <h2>Summary</h2>
        <h1>Total count of expenses: {expenseCount} And amount is: {expensesTotal}</h1>
    </div>
);


const mapStateToProps = (state) => {
    const filteredExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: filteredExpenses.length,
        expensesTotal: getExpensesTotal(filteredExpenses)
    };
};


export default connect(mapStateToProps)(ExpenseSummary);
