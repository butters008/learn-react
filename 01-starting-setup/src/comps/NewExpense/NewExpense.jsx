import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredData) => { 
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    console.log(expenseData)
    props.OnAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense