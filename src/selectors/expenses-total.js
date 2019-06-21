
export const getExpensesTotal = (expenses) => {
    let total = 0;
    if (expenses.amount) {
        return expenses.amount;
    } else {
        expenses.map((expense) => {total += expense.amount;});
        return total;
    }
};




