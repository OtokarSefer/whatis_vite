// ExpenseItem.js
import './ExpenseItem.css';
import Card from '../UI/card.jsx';
import ExpenseDate from './ExpenseDate.jsx';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title);  // Updated from expenseData to data
    console.log(props);
    
    const clickHandler = () => {
        console.log('Ouch!');
        setTitle(`Updated by click ${title}`);
        console.log(title);
    };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.data.date} />  {/* Updated from expenseData */}
                <div className='expense-item__description'>
                    <h2>{props.data.title}</h2>  {/* Updated from expenseData */}
                    <div className='expense-item__price'>{props.data.price}</div>  {/* Updated from expenseData */}
                </div>
                <button onClick={clickHandler}>Don't Click Me</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;
