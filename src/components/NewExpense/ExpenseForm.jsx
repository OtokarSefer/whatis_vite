import { Fragment, useRef, useState } from 'react';
import './ExpenseForm.css';
import Error from '../UI/Error'

const ExpenseForm = (props) => {
    const [error, setError] = useState(null)
    // State for controlled components (if you want to use controlled components instead of refs)

    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const errorHandler = () => {
        setError(null)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        if(enteredTitle.trim().length == 0 || enteredAmount.trim().length == 0 || enteredDate.trim().lenght == 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid title or amount or date (non-empty values)'
            })
            return
        }

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        // Pass the data to the parent component
        props.onSaveExpenseData(expenseData);

        // Clear the form inputs after submitting
        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';

        // Close the form or perform any other actions after submitting (optional)
        props.onCancel();
    };

    // Cancel Handler
    const cancelHandler = (event) => {
        event.preventDefault();
        props.onCancel();
    };

    return (
        <Fragment>
            {error && (
                <Error
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
                />
            )}
            <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            id="title"
                            ref={titleInputRef}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            id="amount"
                            ref={amountInputRef}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            min="2024-11-12"
                            step="2026-01-31"
                            id="date"
                            ref={dateInputRef}
                        />
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                        <button type="button" onClick={cancelHandler}>Cancel</button>
                    </div>
                </div>
            </form>
            </div>
        </Fragment>
    );
};

export default ExpenseForm;
