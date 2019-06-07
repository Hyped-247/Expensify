import React from 'react';
import {Link} from "react-router-dom";


const ExpenseListItem = (props) => (
    <div>
        <h2>This is my ExpenseList component.</h2>
        <div>
            <Link to={`/edit/${props.id}`}>
                <h2>{props.description}</h2>
            </Link>
            <h2>{props.amount}</h2>
            <h2>{props.createdAt}</h2>
        </div>
    </div>
);


export default ExpenseListItem;