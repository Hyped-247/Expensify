import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from "./ExpenseSummary";
import {Login} from "./Login";

const ExpenseDashboardPage = () => (
  <div >
      {/*<Login />*/}
      <ExpenseSummary />
      <ExpenseListFilters />
      <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
