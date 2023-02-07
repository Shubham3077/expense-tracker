import { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] =
		useState("2022");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.item.filter(
		(expense) => {
			return (
				expense.date.getFullYear().toString() ===
				filteredYear
			); //date here is the date object in the expense array.
			//Filter returs true or false , creates new array and doesnot changes old one.
		}
	);

	let expenseContent = <p>No expense found.</p> //making variables for conditional content and pointing only at variable name dynamically.
	if (expenseContent > 0){
		expenseContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		)) }
		
		return (
			<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangingFilter={filterChangeHandler}
				/>
			{expenseContent}
			{/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}

			{/* {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
				<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
				//outputting conditional content - to render the content conditionally. using && operator (if the condition before && operator is true, conditon after && operator will get render).
				/>
			)) } */}
		</Card>
	);
}


export default Expenses;
