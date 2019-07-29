import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';


// <!-- You can only autoFocus on input at a time. The first one. -->
export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ?  (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }

    OnDescriptionChange = (e) => {
       const description = e.target.value;
       this.setState(() => ({description}));
    };

    OnChangeTextArea = (e) => {
       const note = e.target.value;
       this.setState(() => ({note}));
    };

    OnChangeAmount = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    OnDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    };

    OnFocusChange = (focused) => {
        this.setState(() => ({calenderFocused: focused}))
    };

    OnSubmit = (e) => {
        e.preventDefault();
        const amount = this.state.amount;
        const description = this.state.description;
        if (!amount || !description) {
            this.setState(() => ({error: 'Please provide description and amount.'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    // Without defining onChange the inputs will be read only.
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.OnSubmit}>
                    <input type="text"
                           placeholder="description"
                           autoFocus
                           className={"text-input"}
                           value={this.state.description}
                           onChange={this.OnDescriptionChange}
                    />
                    <input type="number"
                           placeholder="Amount"
                           className={"text-input"}
                           value={this.state.amount}
                           onChange={this.OnChangeAmount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.OnDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.OnFocusChange}
                        numberOfMonths={1} // this will determent the number of calenders we can see.
                        isOutsideRange={() => false} // this will make us pick days in the past.
                    />

                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        className={"textarea"}
                        onChange={this.OnChangeTextArea}>
                    </textarea>

                    <button>
                        {this.props.expense ? <span>Update Expense</span> : <span>Add Expense</span>}
                    </button>
                </form>
            </div>
        )
    }
}
