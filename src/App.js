import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";
// import ExpenseFilter from './components/Expenses/ExpenseFilter';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'PS5',
    amount: 299.99,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  
  const [expenseArray, setExpenseArray] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = ((expense) => {
    setExpenseArray((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseArray} />
    </div>
  )
  
}

export default App;
