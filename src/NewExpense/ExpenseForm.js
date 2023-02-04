import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] =
		useState(""); //we are storing input as a string, coz by default when we listen an event it comes as a string.
	const [enteredAmount, setEnteredAmount] =
		useState("");
	const [enteredDate, setEnteredDate] =
		useState("");

	// const [userInput, setUserInput] = useState({
	//     enteredTitle: '',
	//     enteredAmount : '',
	//     enteredDate : '',
	// })

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput( (prevState) = {  //prevState here is recieving the previous state for useState state object. setUserInput is the updating func
		//     return { ...prevState, enteredTitle: event.target.value
		//     }
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSavingExpenseData(expenseData);

        setEnteredTitle(''); //two way binding means for input we can not only listen to changes, but we can also pass new value to input, using value attribute in input tag.
        setEnteredAmount('');
        setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label className="label">Title</label>
					<input
						className="input"
						type="text"
                        value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label className="label">Amount</label>
					<input
						className="input"
						type="number"
						min="0.1"
						step="0.1"
                        value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label className="label">Date</label>
					<input
						className="input"
						type="date"
						min="2020-01-01"
						max="2024-12-31"
                        value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>

			<div className="new-expense__actions ">
				<button type="submit">
					{" "}
					Add Expense
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
