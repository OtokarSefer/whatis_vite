// ExpensesList.js
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem"; // Ensure correct capitalization

const ExpenseList = (props) => {
    if (props.expenses.length === 0) {
        return (
            <p className='expenses-list__fallback'>No expenses found.</p>
        )
    }

    return (
        <ul className='expenses-list'>
            {props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} data={expense} />;
            })}
        </ul>
    );
}

export default ExpenseList;
