import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import {getExpensesTotal} from "../selectors/expenses-total";
import numeral from "numeral";


export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className={"page-header"}>
            <div className={"content-container"}>
                <h1 className={"page-header__title"}>
                    Viewing: <span>{expenseCount} </span>
                    {expenseWord} with an amount of: <span>{formattedExpenseTotal} </span>
                </h1>
            </div>
                <Link className={"button"} to={"/create"}>
                    Add Expense
                </Link>
        </div>
        )
};


const mapStateToProps = (state) => {
    const filteredExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: filteredExpenses.length,
        expensesTotal: getExpensesTotal(filteredExpenses)
    };
};


export default connect(mapStateToProps)(ExpenseSummary);
