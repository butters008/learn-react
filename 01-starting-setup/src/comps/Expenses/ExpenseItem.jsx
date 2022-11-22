import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

export const ExpenseItem = (prop) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">${prop.price}</div>
      </div>
    </Card>
  );
};
