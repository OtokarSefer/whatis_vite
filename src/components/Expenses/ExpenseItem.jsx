// ExpenseItem.js
import './ExpenseItem.css';
import Card from '../UI/card.jsx';
import ExpenseDate from './ExpenseDate.jsx';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.data.title);
    console.log(props);
    
    const clickHandler = () => {
        console.log('Ouch!');
        setTitle(`Updated by click ${title}`);
        console.log(title);
    };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.data.date} />
                <div className='expense-item__description'>
                    <h2>{props.data.title}</h2>
                    <div className='expense-item__price'>{props.data.amount}</div>
                </div>
                <button onClick={clickHandler}>Don't Click Me</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;
