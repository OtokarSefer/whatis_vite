import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isPressed, setIsPressed] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    ///tähtis nupp
    const toggleFormHandler = () => {
        setIsPressed(prevState => !prevState);
    };

    return (
        <div className="new-expense">
            {isPressed ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleFormHandler={toggleFormHandler}/>
            ) : (
                ///tähtis nupp
                <button onClick={toggleFormHandler}>Add new expense</button>
            )}
        </div>
    );
};

export default NewExpense;
