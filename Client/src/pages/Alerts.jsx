import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import { headerBoxStyle, itemsBoxStyle, mainBoxStyle } from "../mui-styles/SharedStyles";
import AlertCard from "../components/Alerts/AlertCard";
import axios from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import OrderPreviewCard from "../components/Alerts/OrderPreviewCard";
import CloseIcon from '@mui/icons-material/Close';
import Alert from '../components/Shared/Alert';

export default function Alerts(){

    const [alerts, setAlerts] = useState();
    const [preview, setPreview] = useState(false)
    const [previewType, setPreviewType] = useState()
    const [previewAlert, setPreviewAlert] = useState()
    const [parOrder, setPAROrder] = useState()
    const [totalPacks, setTotalPacks] = useState()
    const [open, setOpen] = useState(false)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const getAlerts = async() => {
        const response = await axios.get('/alerts');
        setAlerts(response.data.alerts);
    }

    const applyDiscount = async(alert) => {
        const response = await axios.post('/discount',alert);
        getAlerts();
    }

    const donateFoodBank = async(alert) => {
        const response = await axios.post('/foodbank',alert);
        getAlerts();
    }

    const getPARBuilderOrder = async() => {
        const count_alerts = alerts?.filter(alert => alert.alert_tag === 'count')
        const response = alerts && await axios.post('/par', count_alerts)
        setPAROrder(response?.data.par)
    }

    const previewOrderCard = (e,alertItem) => {
        setPreview(true)
        setPreviewType(e.target.innerHTML);
        setPreviewAlert(alertItem)
    }

    const handleTotalPacks = (e) => {
        setTotalPacks(e.target.value)
    }

    const confirmOrder = async(details,orderType) => {
        if(orderType === 'Custom Order'){
            delete details.total_packs

            const newDetails = Object.assign({total_packs: Number(totalPacks)}, details)

            await axios.post('/purchases',[newDetails])

            const response = await axios.post('/inventory/alert',[newDetails])

            if (response.data.error) setError(response.data.error)

            else{
                setError(null)
                setSuccess(response.data.success)
            }

            setOpen(true)
            setPreview(false)
        }
        
        else{
            await axios.post('/purchases',[details])

            const response = await axios.post('/inventory/alert',[details])

            if (response.data.error) setError(response.data.error)

            else{
                setError(null)
                setSuccess(response.data.success)
            }

            setOpen(true)
            setPreview(false)
        }

        getAlerts();
    }

    useEffect(()=>{
        getAlerts();
    },[])

    useEffect(()=> {
        getPARBuilderOrder();
    },[alerts])

    useEffect(()=>{parOrder && console.log(parOrder);},[getPARBuilderOrder])

    return(
        <> 
            <Sidebar/>
            <Alert open={open} setOpen={setOpen} error={error} success={success}/>
            <Box sx={mainBoxStyle}>
                {preview?
                    <Box sx={{zIndex:1, width:{xs:'100%', md:'80%'},margin:'2.5rem auto'}}>
                        <CloseIcon fontSize="small" sx={{cursor:'pointer', position:'absolute',color:'red'}} onClick={()=> setPreview(false)}/>
                        {
                            parOrder && parOrder.filter(order => previewAlert.name === order.name).map((order,i)=> (
                                <OrderPreviewCard key={i} name={order.name} unitName={order.unit_name} unitsInAPack={order.units_in_a_pack} totalPacks={previewType !== "Custom Order"? order.total_packs: totalPacks} handleTotalPacks={handleTotalPacks} packPrice={order.pack_price} previewType={previewType} expiryPeriod={order.expiry_period} confirmOrder={()=> confirmOrder(order, previewType)}/>
                            ))
                        }
                    </Box>
                    :
                    <Box sx={{marginTop:'1.5rem'}}>
                        <Typography sx={{paddingTop:'1rem'}} variant="h4">Notifications</Typography>
                        <Box sx={headerBoxStyle}>
                            <Typography variant="h5">Alerts</Typography>
                        </Box>
                        <Box sx={itemsBoxStyle}>
                            { alerts && alerts.length !== 0? 
                                alerts.map(alert => (
                                    <AlertCard key={alert._id} type={alert.alert_tag} item={alert.item} alertDate={alert.createdAt} applyDiscount={()=> applyDiscount(alert)} donateFoodBank={()=> donateFoodBank(alert)} preview={(e)=> previewOrderCard(e,alert.item)}/>
                                ))
                                :
                                <Typography variant="h5">Empty</Typography>
                                }
                        </Box>
                    </Box>
                
                }
            </Box>
        </>
    )
}