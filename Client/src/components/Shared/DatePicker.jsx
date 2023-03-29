import DatePicker from 'react-datepicker';

export default function Datepicker({startDate, setStartDate}){
    return(
        <DatePicker
        showIcon={true}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Select Date"
        dateFormat="dd/MM/yyyy"
        popperClassName="popper"
        className="formbold-form-input"
      />
    );
}

export function DateRangePicker({startDate, handleDateRange, endDate}){
    return(
        <DatePicker
        selected={startDate}
        onChange={handleDateRange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="dd/MM/yyyy"
        placeholderText="Select Date Range"
        popperClassName="popper"
        className="formbold-form-input"
    />
    );
}

export function MonthPicker({startDate, setStartDate}){
    return(
        <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        placeholderText="Select Month"
        popperClassName="popper"
        className="formbold-form-input"
    />
    );
}