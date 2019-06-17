import React from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = (props) => (
    <div>
        <h2>This is my ExpenseList component.</h2>
        <div>
            <Link to={`/edit/${props.id}`}>
                <h2>{props.description}</h2>
            </Link>
            <h2>
                {numeral(props.amount / 100).format('$0,0.00')}
                    -
                {moment(props.createdAt).format('MMMM Do, YYYY')}
            </h2>
        </div>
    </div>
);


export default ExpenseListItem;