import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                <h2>{props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })}</h2>
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        // selectExpenses is going to process the data before it gets used in the comp.
        expenses: selectExpenses(state.expenses, state.filters)
    }
};


export default connect(mapStateToProps)(ExpenseList);
