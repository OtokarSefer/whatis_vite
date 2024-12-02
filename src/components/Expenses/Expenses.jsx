import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/card.jsx";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.jsx";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    return( 
        <div>
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
            <Card className="expense">
                {props.expenses
                    .filter(expense => expense.date.getFullYear().toString() === selectedYear)
                    .map(expense => (
                        <ExpenseItem key={expense.id} data={expense} />
                    ))}
            </Card>
        </div>
    );
}

export default Expenses;