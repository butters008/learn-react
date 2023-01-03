import React, { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export const ExpenseItem = (prop) => {
  const [title, setTitle] = useState(prop.title)
  const clickHandler = () => { 
    setTitle("Updated")
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${prop.price}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

