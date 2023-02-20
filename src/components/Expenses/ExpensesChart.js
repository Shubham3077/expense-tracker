import Chart from "../Chart/Chart";
import React from "react";

// jb tk state change ni hota
//jb tk props change nhi hote
// rerender nhi hoga

const _chartDataPoints = [
	{ label: "Jan", value: 0 },
	{ label: "Feb", value: 0 },
	{ label: "Mar", value: 0 },
	{ label: "Apr", value: 0 },
	{ label: "May", value: 0 },
	{ label: "Jun", value: 0 },
	{ label: "Jul", value: 0 },
	{ label: "Aug", value: 0 },
	{ label: "Sep", value: 0 },
	{ label: "Oct", value: 0 },
	{ label: "Nov", value: 0 },
	{ label: "Dec", value: 0 },
];
const ExpenseChart = (props) => {
	let chartDataPoints = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 },
	];

	const newChartDataPoints = [...chartDataPoints];
	for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //jan => 0
		newChartDataPoints[expenseMonth].value +=
        expense.amount;
	}
	chartDataPoints = [...newChartDataPoints];

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
