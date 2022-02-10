import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    return (
      <div>
        <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChooseYear={filterChangeHandler} />
        {props.items.map((item) => (<ExpenseItem 
            key={item.id}
            title={item.title} 
            amount={item.amount} 
            date={item.date} 
          />))}
        </Card>
      </div>
  );
}

export default Expenses;