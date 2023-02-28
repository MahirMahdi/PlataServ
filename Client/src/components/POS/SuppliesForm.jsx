import Chip from "./Chip"
import { Grid, Box, Typography } from "@mui/material";

const calculationBox = {border:'1px solid #e4e9eb',padding:{xs:'1.25rem .25rem',md:'.5rem'},paddingRight:'0',display:'grid',rowGap:'1rem'}
const calculationBoxItem = {display:'flex',justifyContent:'space-between', width:'15rem'}

export default function SuppliesForm({supplies,itemInfo,name,unit,unitPrice,unitCount,expiryPeriod,addItem,totalUnit,handleSupplyInputs,handleTotalUnit,updateSupplies,subTotal,orderSupplies}){
    return(
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                    <div className="formbold-mb-5 formbold-pt-3">
                        <label className="formbold-form-label formbold-form-label-2">
                        Add an item
                        </label>
                        <div className="flex flex-wrap formbold--mx-3">
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                <label>Item</label>
                                <select
                                required={true}
                                onChange={handleSupplyInputs}
                                className="formbold-form-input"
                                >
                                    {itemInfo?.map((info,i)=>{
                                        return <option key={i}>{info.name}</option>
                                    })}
                                </select>
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                <label>Unit</label>
                                <input
                                    readOnly
                                    value={unit}
                                    type="text"
                                    placeholder="Unit"
                                    className="formbold-form-input"
                                />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                <label>Unit Price</label>
                                <input
                                    readOnly
                                    value={unitPrice}
                                    type="number"
                                    placeholder="Unit price"
                                    className="formbold-form-input"
                                />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                <label>Unit Count</label>
                                <input
                                    readOnly
                                    value={unitCount}
                                    type="number"
                                    placeholder="Unit count"
                                    className="formbold-form-input"
                                />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                <label>Expiry Period</label>
                                <input
                                    readOnly
                                    value={10}
                                    type="number"
                                    placeholder="Expiry period in days"
                                    className="formbold-form-input"
                                />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                <label>Total Unit</label>
                                <input
                                    onChange={handleTotalUnit}
                                    value={totalUnit}
                                    required={true}
                                    type="number"
                                    placeholder="Enter total unit"
                                    className="formbold-form-input"
                                />
                                </div>
                            </div>       
                        </div>
                        <button disabled={name && totalUnit? false : true} onClick={addItem} className="formbold-btn" style={{width:'fit-content',padding:'1rem 2rem',margin:'auto'}}>Add</button>
                    </div>
                        <Box sx={{display:'grid',rowGap:'2.5rem',justifyItems:'center'}}>
                            <Grid container spacing={2}>
                                {supplies.map((supply,i)=>(
                                    <Grid key={i} item xs={12} sm={6} md={4}>
                                        <Chip name={supply.name} remove={updateSupplies}/>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box sx={calculationBox}>
                                {supplies?.map((supply,i)=>(
                                    <Box key={i} sx={calculationBoxItem}>
                                        <Typography>{supply.name}({supply.total_unit})</Typography>
                                        <Typography>${(supply.total_unit * supply.unit_price).toFixed(2)}</Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Box sx={calculationBox}>
                                <Box sx={calculationBoxItem}>
                                    <Typography>Subtotal</Typography>
                                    <Typography>${subTotal.toFixed(2)}</Typography>
                                </Box>
                                <Box sx={calculationBoxItem}>
                                    <Typography>Tax</Typography>
                                    <Typography>${(subTotal * .1).toFixed(2)}</Typography>
                                </Box>
                                <Box sx={calculationBoxItem}>
                                    <Typography>Total</Typography>
                                    <Typography>${(subTotal + (subTotal * .1)).toFixed(2)}</Typography>
                                </Box>
                            </Box>
                            <button disabled={supplies.length > 0? false : true} onClick={orderSupplies} className="formbold-btn">Order Supplies</button>
                        </Box>
                    </div>
                </div>
    )
}