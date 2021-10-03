import React from "react";
import ExpenseItem from "./ExpenseItem";

function Expense({ expenses }) {
  return expenses.map((expense, id) => (
    <ExpenseItem
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
      status={false}
      key={id}
    />
  ));
}

export default Expense;
