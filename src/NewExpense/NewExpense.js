import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const addExpenseDataHandler = (
		enteredExpenseData
	) => {
		//this parameter is receiving expense data form expense form component form the arguement of props.onAddingExpenseData(expenseData).

		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setInitialExpense(false);
	};

	const [initialExpense, setInitialExpense] =
		useState(false);

	const startEditingHandler = () => {
		setInitialExpense(true);
	};

	const endEditingHandler = () => {
		setInitialExpense(false);
	};

	return (
		<div className="new-expense">
			{!initialExpense && (
				<button onClick={startEditingHandler}>
					Add New Expense
				</button>
			)}
			{initialExpense && (
				<ExpenseForm
					onSavingExpenseData={
						addExpenseDataHandler
					}
					onEndEditingHandler={endEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
