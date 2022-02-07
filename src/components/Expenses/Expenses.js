import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const items0 = props.items[0];
    const items1 = props.items[1];
    const items2 = props.items[2];
    const items3 = props.items[3];

    return (
    <Card className='expenses'>
      <ExpenseItem 
        title={items0.title} 
        amount={items0.amount} 
        date={items0.date} 
      />
      <ExpenseItem 
          title={items1.title} 
          amount={items1.amount} 
          date={items1.date}
        />
      <ExpenseItem 
          title={items2.title} 
          amount={items2.amount} 
          date={items2.date}
        />
      <ExpenseItem 
          amount={items3.amount} 
          title={items3.title} 
          date={items3.date}
      />
    </Card>
  );
}

export default Expenses;