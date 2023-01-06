import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

export const Expenses = (prop) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const saveExpenseFilter = (selectedYear) => { 
    console.log('Expenses Comp')
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <ExpensesFilter selected={ filteredYear}  onSavedFilterData={ saveExpenseFilter }/>
      <Card className="expenses">
        {prop.items.map() //built in JS array method
        }
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
        </Card>
      </div>
  );
};
export default Expenses;
