import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Box, Typography, Chip } from "@mui/material";
import axios from '../api/api';
import { uid } from "uid";
import ProductForm from "../components/Admin/ProductForm";
import SuppliesForm from "../components/Admin/SuppliesForm";
import { mainBoxStyle } from "../mui-styles/SharedStyles";
import { chipsBoxStyle } from "../mui-styles/AdminStyles";
import Alert from '../components/Shared/Alert';

export default function Admin(){

    const [category, setCategory] = useState('Supplies');

    //Alert states
    const [open, setOpen] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    
    const handleCategory = (e) => {
        setCategory(e.target.innerHTML);
    };

    //product states
    const [type, setType] = useState('');
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState();
    const [productData, setProductData] = useState();

    // ingredient states
    const [name, setName] = useState('');
    const [unitName, setUnitName] = useState('');
    const [packPrice,setPackPrice] = useState('');
    const [unitsInAPack,setUnitsInAPack] = useState('');
    const [expiryPeriod, setExpiryPeriod] = useState('');
    const [ingredients, setIngredients] = useState([]);

    // supplies states
    const [itemInfo, setItemInfo] = useState([]);
    const [totalPacks, setTotalPacks] = useState('');
    const [supplies, setSupplies] = useState([]);
    const [total, setTotal] = useState(0);
    
    const handleType = (e) => {
        setType(e.target.value)
    };

    const handleProductName = (e) => {
        setProductName(e.target.value)
    };

    const handlePrice = (e) => {
        setPrice(e.target.value)
    };

    const handleDescription = (e) => {
        setDescription(e.target.value)
    };

    const handleImage = (e) => {
        setImage(e.target.files[0])
    };

    const addProduct = async() => {
        const response = await axios.post('/product', productData,{headers:{'Content-Type':'multipart/form-data'}})
        if (response.data.error) setError(response.data.error)
        else{
            setError(null)
            setProductData(null)
            setIngredients(null)
            setSuccess(response.data.success)
        }

        setOpen(true)
    };

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
    },[productName,price,description,image,type,ingredients]);

    //ingredient funtions
    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleUnitName = (e) => {
        setUnitName(e.target.value)
    };

    const handlePackPrice = (e) => {
        setPackPrice(e.target.value)
    };

    const handleUnitsInAPack = (e) => {
        setUnitsInAPack(e.target.value)
    };

    const handleExpiryPeriod = (e) => {
        setExpiryPeriod(e.target.value)
    };

    const addIngredient = () => {
        setIngredients(prev=> [...prev,{
            name:name, 
            unit_name:unitName, 
            pack_price: packPrice, 
            unit_in_a_pack: unitsInAPack, 
            expiry_period: expiryPeriod
        }]);
        setName('');
        setUnitName('');
        setPackPrice('');
        setUnitsInAPack('');
        setExpiryPeriod('');
    };

    const updateIngredients = (e) => {
        const item = e.target.parentElement.children[0].innerHTML;
        setIngredients(ingredients?.filter(ingredient=> ingredient.name !== item));
    };

    //supplies functions
    const getSupplyItemsInfo = async() => {
        const response = await axios.get('/supplies');
        setItemInfo(response.data.supplies);
    };

    const handleSupplyInputs = (e) => {
        setName(e.target.value);
        const item = itemInfo.filter(info=> info.name === e.target.value)[0];
        setUnitName(item.unit_name);
        setPackPrice(item.pack_price);
        setUnitsInAPack(item.units_in_a_pack);
        setExpiryPeriod(item.expiry_period);
    };

    const handleTotalPacks = (e) => {
        setTotalPacks(e.target.value);
    };

    const addItem = () => {
        setSupplies(prev=> [...prev,{
            name: name, 
            unit_name: unitName, 
            pack_price: packPrice, 
            units_in_a_pack: unitsInAPack, 
            expiry_period: expiryPeriod, 
            total_packs: totalPacks, 
            total_units: (totalPacks* unitsInAPack)
        }]);
        setName('');
        setUnitName('');
        setPackPrice('');
        setUnitsInAPack('');
        setExpiryPeriod('');
        setTotalPacks('');
    };

    const updateSupplies = (e) => {
        const item = e.target.parentElement.children[0].innerHTML;

        setSupplies(supplies?.filter(supply=> supply.name !== item))
    };

    const supplyCalculations = () => {
        var total = 0
        supplies?.map(supply=> total += (supply.total_packs * supply.pack_price))
        setTotal(total)
    };

    const orderSupplies = async() => {
        await axios.post('/purchases',supplies)
        const response = await axios.post('/inventory/admin',supplies)
        if (response.data.error) setError(response.data.error)
        else{
            setError(null)
            setSupplies([])
            setSuccess(response.data.success)
        }
        setOpen(true)
    };

    useEffect(()=>{
        getSupplyItemsInfo()
    },[]);

    useEffect(()=>{
        supplyCalculations()
    },[supplies]);

    return(
        <> 
            <Sidebar/>
            <Box sx={mainBoxStyle}>
                <Box sx={chipsBoxStyle}>
                    <Chip onClick={handleCategory} sx={{width:'40%',textAlign:'center'}} label="Product" component="div" clickable />
                    <Chip onClick={handleCategory} sx={{width:'40%',textAlign:'center'}} label="Supplies" component="div" clickable />
                </Box>
                <Box sx={{textAlign:'center',margin:'1.5rem 0'}}><Typography variant="h4">{category === 'Product'? 'Add a new product' : 'Order new supplies'}</Typography></Box>
                <Alert open={open} setOpen={setOpen} error={error} success={success}/>
                {category === 'Product'? 
                    <ProductForm type={type} productName={productName} price={price} description={description} image={image} ingredients={ingredients}
                    name={name} unitName={unitName} unitsInAPack={unitsInAPack} packPrice={packPrice} expiryPeriod={expiryPeriod} handleType={handleType} 
                    handleProductName={handleProductName} handlePrice={handlePrice} handleDescription={handleDescription} handleImage={handleImage}
                    addIngredient={addIngredient} addProduct={addProduct} handleName={handleName} handleUnitName={handleUnitName} 
                    handlePackPrice={handlePackPrice} handleUnitsInAPack={handleUnitsInAPack} handleExpiryPeriod={handleExpiryPeriod} updateIngredients={updateIngredients}/>
                    
                    :<SuppliesForm supplies={supplies} itemInfo={itemInfo} ingredients={ingredients} name={name} unitName={unitName} unitsInAPack={unitsInAPack} packPrice={packPrice} 
                    expiryPeriod={expiryPeriod} totalPacks={totalPacks} total={total} handleSupplyInputs={handleSupplyInputs} handleTotalPacks={handleTotalPacks} addItem={addItem} updateSupplies={updateSupplies} orderSupplies={orderSupplies}/>    
                }
            </Box>
        </>
    );
}