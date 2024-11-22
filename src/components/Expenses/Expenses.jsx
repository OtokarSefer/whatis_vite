import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/card.jsx";
import "./Expenses.css"

const Expenses = (props) => {
    return(
        <Card ClassName="expenses">
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}

export default Expenses