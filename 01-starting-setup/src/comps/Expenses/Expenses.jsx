import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

export const Expenses = (prop) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveExpenseFilter = (selectedYear) => {
    console.log("Expenses Comp");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = prop.items.filter((expense) => {
    // const date = new Date(expense.date); //Had to do this for a fix of getFullYear() is not a function
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSavedFilterData={saveExpenseFilter}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
