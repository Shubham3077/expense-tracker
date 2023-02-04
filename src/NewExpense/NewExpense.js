import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const addExpenseDataHandler = (enteredExpenseData) => { //this parameter is receiving expense data form expense form component form the arguement of props.onAddingExpenseData(expenseData).

        const expenseData = {
            ...enteredExpenseData, 
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return <div className='new-expense'>
        <ExpenseForm onSavingExpenseData = {addExpenseDataHandler} />
    </div>
}

export default NewExpense;