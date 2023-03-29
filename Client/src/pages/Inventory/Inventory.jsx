import Sidebar from "../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";
import { mainBoxStyle } from "../../mui-styles/SharedStyles";
import { useEffect, useState } from "react";
import axios from "../../api/api";
import Table1 from "../../components/Table/InventoryTable";

export default function Inventory(){

    const [reports, setReports] = useState([]);

    const getInventoryReport = async() => {
        const response = await axios.get('/report/inventory')
        setReports(response.data.reports)
    };

    useEffect(()=>{
        getInventoryReport()
    },[]);

    return(
        <>
            <Sidebar/>
            <Box sx={mainBoxStyle}>
                <Table1 reports={reports} header={'Inventory'}/>
            </Box>
        </>
    );
}