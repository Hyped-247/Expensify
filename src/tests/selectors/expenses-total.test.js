import {getExpensesTotal} from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test('should return total amount for every expense', () => {
    const noTotal = getExpensesTotal([]);
    expect(noTotal).toBe(0);

    const totalOfSingleExpense = getExpensesTotal(expenses[0]);
    expect(totalOfSingleExpense).toBe(10);

    const total = getExpensesTotal(expenses);
    expect(total).toBe(60);
});
