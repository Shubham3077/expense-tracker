// import { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
function ExpenseItem(props) {
	// const [title, setTitle] = useState(props.title)
	 //use state always returns an array in the same order, first element is the current state values and the 2nd element is for assigning new values by calling a function.
	// const clickHandler = () => {
	// 	setTitle('Updated')
	// }
	
	return (
		<Card className="expense-item ">
           <ExpenseDate date = {props.date}/> 
			<div className="expense-item__description">
				<h2 className="expense-item h2">
					{props.title}
				</h2>
				<div className="expense-item__price">
				₹ {props.amount}
				</div>
			</div>
			{/* <button onClick={clickHandler}>Change title</button> */}
		</Card>
	);
}

export default ExpenseItem;