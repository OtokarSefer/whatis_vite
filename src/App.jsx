import './App.css';
import Expenses  from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DYMMY_EXPENSES = [
    {  
      date: new Date(2024, 10, 12),
      title: 'werid aah book',
      price: 3000.99
    },
    {  
      date: new Date(2024, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99
    },
    {  
      date: new Date(2023, 10, 12),
      title: 'werid aah book',
      price: 3000.99
    },
    {  
      date: new Date(2023, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99
    },
    {  
      date: new Date(2023, 10, 12),
      title: 'werid aah book',
      price: 3000.99
    },
    {  
      date: new Date(2025, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99
    },
    {  
      date: new Date(2025, 10, 12),
      title: 'werid aah book',
      price: 3000.99
    },
    {  
      date: new Date(2025, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log('In app.js')
    console.log(expense)
  }
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={DYMMY_EXPENSES} />
    </div>
  );
}

export default App;

