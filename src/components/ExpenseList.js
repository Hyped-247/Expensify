import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className={"content-container"}>
        <div className={"list-header"}>
            <div className="show-for-mobile">Expense</div>
            <div className="show-for-desktop" >Expense</div>
            <div className="show-for-desktop" >Amount</div>
        </div>
        <div>
            {
                props.expenses.length === 0 ? (
                    <div className={"list-item"}>
                        <span>No expenses</span>
                    </div>
                ) : (
                    <h2>{props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    })}</h2>
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        // selectExpenses is going to process the data before it gets used in the comp.
        expenses: selectExpenses(state.expenses, state.filters)
    }
};


export default connect(mapStateToProps)(ExpenseList);
