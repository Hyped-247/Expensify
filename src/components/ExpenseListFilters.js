import React from 'react';
import {connect} from "react-redux";
import {setTextFilter, sortByDate,
        sortByAmount, setEndDate,
        setStartDate} from "../actions/filters";
import {DateRangePicker} from "react-dates";


export class ExpenseListFilters extends React.Component {

    state = {calendarFocused: null};

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        const option = e.target.value;
        if (option === 'date') {
            this.props.sortByDate();
        } else {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            // update the store when you input change the data on the text field.
            <div className={"content-container"}>
                <div className={"input-group"}>
                    <div className={"input-group__item"}>
                         <input className={"text-input"} type="text" value={this.props.filters.text}
                                onChange={this.onTextChange} />
                    </div>
                    <div className={"input-group__item"}>
                         <select className={"select"} value={this.props.filters.sortBy}
                                 onChange={this.onSortChange}
                                 placeholder={"Search expenses"}>

                             <option value="date">Date</option>
                             <option value="amount">Amount</option>
                         </select>
                    </div>
                    <div className={"input-group__item"}>
                      <DateRangePicker startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false} />
                    </div>
                </div>
            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {filters: state.filters};
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

