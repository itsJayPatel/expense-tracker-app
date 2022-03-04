import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

//   <ul className='expenses-list'>
//       {props.expenses.map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))}
//     </ul>
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenes.</h2>;
  }
  return (
    <ul className="expenses-list">
      {
      props.expenses.map((expense) => (  
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id={expense.id}
          //for improving performance
          key={expense.id}
        />
      ))
      }
    </ul>

    

  );
};

export default ExpensesList;
