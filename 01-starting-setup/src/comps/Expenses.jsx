import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = (prop) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={prop.expenses[0].title}
        date={prop.expenses[0].date}
        price={prop.expenses[0].amount}
      />
      <ExpenseItem
        title={prop.expenses[1].title}
        date={prop.expenses[1].date}
        price={prop.expenses[1].amount}
      />
      <ExpenseItem
        title={prop.expenses[2].title}
        date={prop.expenses[2].date}
        price={prop.expenses[2].amount}
      />
      <ExpenseItem
        title={prop.expenses[3].title}
        date={prop.expenses[3].date}
        price={prop.expenses[3].amount}
      />
    </div>
  );
};
export default Expenses;
