import './App.css';
import Expenses  from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
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
  ]

  const addExpenseHandler = (expense) => {
    console.log('In app.js')
    console.log(expense)
  }
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

