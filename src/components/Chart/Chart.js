import ChartBar from "./ChartBar.js";
import './Chart.css';

//when we define datapoint is object which has a value property.
// maxValue is temporary unique value, is not derived from datapoint,same for every chart
//in key datapoint.label is used so that every chartBar has unique label
const Chart = (props) => {
	const valueArray = props.dataPoints.map(
		(dataPoint) => dataPoint.value
	);
	const totalMaximum = Math.max(...valueArray);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
