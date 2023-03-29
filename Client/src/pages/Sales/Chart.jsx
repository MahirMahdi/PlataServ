import Sidebar from "../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import { mainBoxStyle } from "../../mui-styles/SharedStyles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Datepicker, { MonthPicker, DateRangePicker } from "../../components/Shared/DatePicker";
import Query from "../../components/Shared/Query";
import axios from "../../api/api";
import { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function SalesChart() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [selectDate, setSelectDate] = useState(new Date());
    const [selectMonth, setSelectMonth] = useState(new Date());
    const [selectType, setSelectType] = useState('Monthly');
    const [reports, setReports] = useState([]);

    const getDefaultReport = async() => {
        const response = await axios.post('/report/sales-chart',{type:'monthly', month: selectMonth});
        setReports(response.data.reports);
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
            const response = await axios.post('/report/sales-chart',{type:'daily', date: selectDate})
            setReports(response.data.reports)
        }
        else if (selectType === 'Custom Period') {
            const response = await axios.post('/report/sales-chart',{type:'custom', start_date: startDate, end_date: endDate})
            setReports(response.data.reports)
        }
        else{
          const response = await axios.post('/report/sales-chart',{type:'monthly', month: selectMonth})
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

  const data = {
    labels: ['Burger', 'Sandwich', 'Drinks', 'Sides'],
    datasets: [
      {
        label: '% of Sales',
        data: reports,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

    return(
        <>
            <Sidebar/>
            <Box sx={mainBoxStyle}>
                <Query handlePeriod={handlePeriod} select_type={select_type} selectType={selectType} handleSearch={handleSearch}/>
                <Box sx={{width:'100%',marginTop:'3.5rem',backgroundColor:'white',display:'grid',justifyContent:'center',padding:'2.5rem 0'}}>
                    <Box sx={{width:'25em',height:'fit-content'}}>
                        <Pie data={data}/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}