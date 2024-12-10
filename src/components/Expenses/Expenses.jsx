import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/card.jsx";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpenseList from './ExpensesList.jsx'; // Importing the ExpenseList component

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');
    console.log("year data in Expenses.js", selectedYear);

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

    return( 
        <div>
            <Card className="expense">
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler} />
                {/* Pass the filtered expenses to ExpenseList for display */}
                <ExpenseList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
