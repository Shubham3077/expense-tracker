import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
      props.onChangingFilter(event.target.value)
    }

    
    return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label className='label'>Filter by year</label>
          <select className= 'select'value={props.selected} onChange={dropdownChangeHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2023</option>
            <option value='2020'>2024</option>
            <option value='2019'>2025</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default ExpensesFilter;