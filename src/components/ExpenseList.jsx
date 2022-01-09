import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../styles/ExpenseList.css';

function ExpenseList(props) {
    const expenses = props.expenses;
    return (
        <div className='expenses'>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
        </div>
    )
}

export default ExpenseList
