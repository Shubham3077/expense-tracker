import './ExpenseDate.css';

//this props is coming from ExpenseItem.
function ExpenseDate (props){
    const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = monthArr[props.date.getMonth()];
    const year = props.date.getFullYear();
    const date = props.date.getDate();

    return <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{date}</div>
            <div className="expense-date__year">{year}</div>
        </div>
}


export default ExpenseDate;