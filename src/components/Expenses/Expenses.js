import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
	let date = new Date();
	const [filteredYear, setFilteredYear] =
		useState(date.getFullYear().toString());

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

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangingFilter={filterChangeHandler}
			/>
			<ExpenseChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
			{/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} 

			{filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
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
};

export default Expenses;
