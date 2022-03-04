import '../NewExpense/NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const saveExpenseDateHandler = (enteredExpenseData)=>{

        const expenseData = {
            ...enteredExpenseData,
            id: parseInt((Math.random().toPrecision(3)*100)).toString()
        }

        props.onAddExpense(expenseData);
        //console.log(expenseData);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler}/>
        </div>
    );
}

export default NewExpense;