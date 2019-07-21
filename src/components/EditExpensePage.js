import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpenses, startRemoveExpenses} from "../actions/expenses";


export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpenses(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.startRemoveExpenses({id: this.props.expense.id});
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.onClick}>Delete</button>
            </div>
        );
    }
}



const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id
)});


const mapDispatchToProps = (dispatch, ) => {
    return {
        startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
        startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
