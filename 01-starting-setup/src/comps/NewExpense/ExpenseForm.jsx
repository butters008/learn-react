import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  //States
  /*
  NOTE TO SELF: You can make states in two ways in Max's Udemy
  1) Make each item it's own state, this can be easier to manage and it is more than likely what you will see in prod code
  2) Make an object to house all items, since we are submitting one form and all items are on form this would be ok as well
    -> Just need to watch out in handlers, you have to copy everything from old state to put into new state otherwise you are dumping all other values
  */
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  //State Object
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  //Handlers
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value)
    setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value}      
    })
    console.log(event.target.value)
  }

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value)
    setUserInput((prevState) => {
      return {...prevState, enteredAmount: event.target.value}      
    })
    console.log(event.target.value)
  }

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value)
    setUserInput((prevState) => {
      return {...prevState, enteredDate: event.target.value}      
    })
    console.log(event.target.value)
  }

  const submitHandler = (event) => { 
    event.preventDefault();
    const expenseData = { userInput }
    
    console.log(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step={"0.01"} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="">Date</label>
            <input type="date" onChange={dateChangeHandler}/> {/* He has Jan 1 of 19 to 12-31 of 22 for min and max dates, not going to have that */}
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm