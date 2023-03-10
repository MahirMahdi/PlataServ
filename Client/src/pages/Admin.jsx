import { useState, useEffect } from "react"
import Sidebar from "../components/POS/Sidebar"
import { Box, Typography, Chip } from "@mui/material"
import axios from '../api/api'
import { uid } from "uid"
import ProductForm from "../components/POS/ProductForm"
import SuppliesForm from "../components/POS/SuppliesForm"
import { mainBoxStyle } from "../mui-styles/SharedStyles"
import { chipsBoxStyle } from "../mui-styles/adminStyles"

export default function Admin(){

    const [category, setCategory] = useState('Supplies')
    
    const handleCategory = (e) => {
        setCategory(e.target.innerHTML)
    }

    //product states
    const [type, setType] = useState('')
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState()
    const [productData, setProductData] = useState()

    // ingredient states
    const [name, setName] = useState('')
    const [unit, setUnit] = useState('')
    const [unitPrice,setUnitPrice] = useState('')
    const [unitCount,setUnitCount] = useState('')
    const [expiryPeriod, setExpiryPeriod] = useState('')
    const [ingredients, setIngredients] = useState([])

    // supplies states
    const [itemInfo, setItemInfo] = useState([])
    const [totalUnit, setTotalUnit] = useState('')
    const [supplies, setSupplies] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const currentDate = new Date()
    const expiry_date = new Date(currentDate.setDate(currentDate.getDate() + expiryPeriod))
    
    //product functions
    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleProductName = (e) => {
        setProductName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const addProduct = async() => {
        const response = await axios.post('/product', productData,{headers:{'Content-Type':'multipart/form-data'}})

    }

    useEffect(()=>{
        setProductData({
            product_id: uid(5),
            type:type,
            name: productName,
            price: price,
            description: description,
            image: image,
            ingredients: ingredients
        })
    },[productName,price,description,image,type,ingredients])

    //ingredient funtions
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleUnit = (e) => {
        setUnit(e.target.value)
    }

    const handleUnitPrice = (e) => {
        setUnitPrice(e.target.value)
    }

    const handleUnitCount = (e) => {
        setUnitCount(e.target.value)
    }

    const handleExpiryPeriod = (e) => {
        setExpiryPeriod(e.target.value)
    }

    const addIngredient = () => {
        setIngredients(prev=> [...prev,{name:name, unit:unit, unit_price: unitPrice, unit_count: unitCount, expiry_period: expiryPeriod}])
        setName('')
        setUnit('')
        setUnitPrice('')
        setUnitCount('')
        setExpiryPeriod('')
    }

    const updateIngredients = (e) => {
        const item = e.target.parentElement.children[0].innerHTML;

        setIngredients(ingredients?.filter(ingredient=> ingredient.name !== item))
    }

    //supplies functions
    const getSupplyItemsInfo = async() => {
        const response = await axios.get('/supplies')
        response.data.supplies?.map(ingredient=> setItemInfo(prev=> [...prev, ingredient]))
    }

    const handleSupplyInputs = (e) => {
        setName(e.target.value)
        const item = itemInfo.filter(info=> info.name === e.target.value)[0]
        setUnit(item.unit)
        setUnitPrice(item.unit_price)
        setUnitCount(item.unit_count)
        setExpiryPeriod(item.expiry_period)
    }

    const handleTotalUnit = (e) => {
        setTotalUnit(e.target.value)
    }

    const addItem = () => {
        setSupplies(prev=> [...prev,{name:name, unit:unit, unit_price: unitPrice, unit_count: unitCount, expiry_date: expiry_date, total_unit: totalUnit,total_count: (totalUnit* unitCount)}])
        setName('')
        setUnit('')
        setUnitPrice('')
        setUnitCount('')
        setExpiryPeriod('')
        setTotalUnit('')
    }

    const updateSupplies = (e) => {
        const item = e.target.parentElement.children[0].innerHTML;

        setSupplies(supplies?.filter(supply=> supply.name !== item))
    }

    const supplyCalculations = () => {
        var subTotal = 0
        supplies?.map(supply=> subTotal += (supply.total_unit * supply.unit_price))

        setSubTotal(subTotal)
    }

    const orderSupplies = async() => {
        const response = await axios.post('/inventory',supplies)
        console.log(response);
    }

    useEffect(()=>{
        getSupplyItemsInfo()
    },[])

    useEffect(()=>{
        supplyCalculations()
    },[supplies])

    return(
        <Box sx={{width:'100vw',display:'flex'}}> 
            <Sidebar/>
            <Box sx={mainBoxStyle}>
                <Box sx={chipsBoxStyle}>
                    <Chip onClick={handleCategory} sx={{width:'40%',textAlign:'center'}} label="Product" component="div" clickable />
                    <Chip onClick={handleCategory} sx={{width:'40%',textAlign:'center'}} label="Supplies" component="div" clickable />
                </Box>
                <Box sx={{textAlign:'center',margin:'1.5rem 0'}}><Typography variant="h4">{category === 'Product'? 'Add a new product' : 'Order new supplies'}</Typography></Box>
                {category === 'Product'? 
                    <ProductForm type={type} productName={productName} price={price} description={description} image={image} ingredients={ingredients}
                    name={name} unit={unit} unitCount={unitCount} unitPrice={unitPrice} expiryPeriod={expiryPeriod} handleType={handleType} 
                    handleProductName={handleProductName} handlePrice={handlePrice} handleDescription={handleDescription} handleImage={handleImage}
                    addIngredient={addIngredient} addProduct={addProduct} handleName={handleName} handleUnit={handleUnit} 
                    handleUnitPrice={handleUnitPrice} handleUnitCount={handleUnitCount} handleExpiryPeriod={handleExpiryPeriod} updateIngredients={updateIngredients}/>
                    
                    :<SuppliesForm supplies={supplies} itemInfo={itemInfo} ingredients={ingredients} name={name} unit={unit} unitCount={unitCount} unitPrice={unitPrice} 
                    expiryPeriod={expiryPeriod} totalUnit={totalUnit} subTotal={subTotal} handleSupplyInputs={handleSupplyInputs} handleTotalUnit={handleTotalUnit} addItem={addItem} updateSupplies={updateSupplies} orderSupplies={orderSupplies}/>    
                }
            </Box>
        </Box>
    )
}