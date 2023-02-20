import "./ExpensesFilter.css";
// import { useState } from 'react';
// import ExpenseItem from './ExpenseItem';

const ExpensesFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangingFilter(event.target.value);
	};

	// const [filterYear, setFilterYear] = useState()

	// const showYearExpenseHandler = () => {
	//   setFilterYear(props.selected.filter(expenses => {
	//     <ExpenseItem expenses/>
	//   }))
	// }
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label className="label">
					Filter by year
				</label>
				<select
					className="select"
					value={props.selected}
					onChange={dropdownChangeHandler}
				>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
					<option value="2025">2025</option>
					<option value="2026">2026</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
