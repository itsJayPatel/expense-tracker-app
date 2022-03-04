import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 1000,
    date: new Date(2022, 1, 22),
  },
  {
    id: "e2",
    title: "Medicine",
    amount: 500,
    date: new Date(2022, 1, 15),
  },
  {
    id: "e3",
    title: "Cricket Kit",
    amount: 1599,
    date: new Date(2021, 11, 23),
  },
  {
    id: "e4",
    title: "Dinner",
    amount: 200,
    date: new Date(2022, 11, 31),
  },
  {
    id: "e5",
    title: "Electricity Bill",
    amount: 577,
    date: new Date(2022, 10, 22),
  },
];

const App = ()=> {
  
  const[expenses,setExpenses] = useState(DUMMY_EXPENSES);

  /*

  This is behind transformation of jsx code return by react

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { expenses: expenses })
  );

  */

  const addExpenseHandler = (expense) =>{
    
    setExpenses((prevExpenses)=>{
      return [ expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
