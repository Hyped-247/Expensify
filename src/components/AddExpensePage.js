import React from 'react';
import ExpenseForm from "./ExpenseForm";
import {connect} from 'react-redux';
import {startAddExpenses} from "../actions/expenses";

export class AddExpensePage  extends  React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpenses(expense);
        this.props.history.push('/');
    };
    render() {
       return (
            <div>
              <h2>Add expense page</h2>
              <ExpenseForm onSubmit={this.onSubmit} />
            </div>
       );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpenses: (expense) => dispatch(startAddExpenses(expense)
)});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
