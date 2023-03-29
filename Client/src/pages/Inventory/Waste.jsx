import Sidebar from "../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import { mainBoxStyle } from "../../mui-styles/SharedStyles";
import { useEffect, useState } from "react";
import Datepicker, { MonthPicker, DateRangePicker } from "../../components/Shared/DatePicker";
import Query from "../../components/Shared/Query";
import axios from "../../api/api";
import Table1 from "../../components/Table/InventoryTable";

export default function Waste(){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectMonth, setSelectMonth] = useState(new Date());
    const [selectType, setSelectType] = useState('Monthly');
    const [reports, setReports] = useState([]);

    const getDefaultReport = async() => {
        const response = await axios.post('/report/waste',{type:'monthly', month: selectMonth})
        setReports(response.data.reports)
    };

    useEffect(()=>{
        getDefaultReport()
    },[]);

    const handlePeriod = (e) => {
        setSelectType(e.target.value);
    };

    const handleDateRange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const handleSearch = async() => {
        if (selectType === 'Daily') {
            const response = await axios.post('/report/waste',{type:'daily', date: selectDate})
            setReports(response.data.reports)
        }
        else if (selectType === 'Custom Period') {
            const response = await axios.post('/report/waste',{type:'custom', start_date: startDate, end_date: endDate})
            setReports(response.data.reports)
        }
        else{
          const response = await axios.post('/report/waste',{type:'monthly', month: selectMonth})
          setReports(response.data.reports)
        }
    };

    const select_type = [
        {
            type: 'Daily',
            label: 'Select Date',
            component: <Datepicker startDate={selectDate} setStartDate={setSelectDate}/>
        },
        {
            type: 'Monthly',
            label: 'Select Month',
            component: <MonthPicker startDate={selectMonth} setStartDate={setSelectMonth}/>
        },
        {
            type: 'Custom Period',
            label: 'Select Date Range',
            component: <DateRangePicker startDate={startDate} endDate={endDate} handleDateRange={handleDateRange}/>
        },
    
    ];

    return(
        <>
            <Sidebar/>
            <Box sx={mainBoxStyle}>
                <Query handlePeriod={handlePeriod} select_type={select_type} selectType={selectType} handleSearch={handleSearch}/>
                <Table1 reports={reports} header={'Waste'} type={selectType}/>
            </Box>
        </>
    );
}