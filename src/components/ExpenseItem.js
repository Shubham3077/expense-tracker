import './ExpenseItem.css'

function ExpenseItem () {
    return <div className='expense-item '>
        <div > Date - 23 jan , 2023</div>
        <div className='expense-item__description'>
            <h2 className= 'expense-item h2'>Title - Book</h2>
            <div className='expense-item__price'>Amount - ₹40</div>
        </div>
    </div>
}

export default ExpenseItem;