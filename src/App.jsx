import './App.css';
import Expenses  from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DYMMY_EXPENSES = [
    {  
      date: new Date(2024, 10, 12),
      title: 'werid aah book',
      price: 3000.99,
      id: 1
    },
    {  
      date: new Date(2024, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99,
      id: 2
    },
    {  
      date: new Date(2023, 10, 12),
      title: 'werid aah book',
      price: 3000.99,
      id: 3
    },
    {  
      date: new Date(2023, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99,
      id: 4
    },
    {  
      date: new Date(2023, 10, 12),
      title: 'werid aah book',
      price: 3000.99,
      id: 5
    },
    {  
      date: new Date(2025, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99,
      id: 6
    },
    {  
      date: new Date(2025, 10, 12),
      title: 'werid aah book',
      price: 3000.99,
      id: 7
    },
    {  
      date: new Date(2025, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99,
      id: 8

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

