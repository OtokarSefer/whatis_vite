import { useState } from 'react'
import './ExpenseForm.css'
import Expenses from '../Expenses/Expenses.jsx';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    });
    console.log("1")
    const titleChangeHandler = (event) => {
        console.log("2")
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const priceChangeHandler = (event) => {
        console.log("3")
        setUserInput({
            ...userInput,
            enteredPrice: event.target.value
        })
    }
    
    const dateChangeHandler = (event) => {
        console.log("4")
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        console.log("5")
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredPrice,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log("6")
        setUserInput({
            enteredTitle: '',
            enteredPrice: '',
            enteredDate: ''
        });
    }

    return(
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input 
                        type="text"
                        onChange={titleChangeHandler}
                        value={userInput.enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label> Price </label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        onChange={priceChangeHandler}
                        value={userInput.enteredPrice}
                    />
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input 
                        type="date" 
                        min="2024-11-12" 
                        step="2026-01-31"
                        onChange={dateChangeHandler}
                        value={userInput.enteredDate}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;