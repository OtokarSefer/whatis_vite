import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/card.jsx";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.jsx";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');
    console.log("year data in Expenses.js", selectedYear);
    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };


    
    return( 
        <div>
            <Card className="expense">
            <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
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