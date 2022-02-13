import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredArray = props.items.filter(item => {
      return item.date.getFullYear().toString() === filteredYear;
    });

    return (
      <div>
        <Card className='expenses'>
        <ExpenseFilter 
          selected={filteredYear} 
          onChooseYear={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList items={filteredArray} />
        </Card>
      </div>
  );
}

export default Expenses;