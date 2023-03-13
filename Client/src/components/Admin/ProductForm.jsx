import { Grid } from "@mui/material"
import Chip from "./Chip"

export default function ProductForm({type,productName,price,description,image,ingredients,name,unit,unitPrice,unitCount,expiryPeriod,handleType,handleProductName,handlePrice,handleDescription,handleImage,addIngredient,handleName,handleUnit,handleUnitPrice,handleUnitCount,handleExpiryPeriod,addProduct,updateIngredients}){
    return(
        <div className="formbold-main-wrapper">
            {/* Product form starts here*/}
            <div className="formbold-form-wrapper">
                <div className="formbold-mb-5">
                    <label className="formbold-form-label"> Type </label>
                    <input
                    required={true}
                    onChange={handleType}
                    type="text"
                    placeholder="Type"
                    className="formbold-form-input"
                    />
                </div>
                <div className="formbold-mb-5">
                    <label className="formbold-form-label"> Name </label>
                    <input
                    required={true}
                    onChange={handleProductName}
                    type="text"
                    placeholder="Name"
                    className="formbold-form-input"
                    />
                </div>
                <div className="formbold-mb-5">
                    <label className="formbold-form-label"> Description </label>
                    <input
                    required={true}
                    onChange={handleDescription}
                    type="text"
                    placeholder="Description"
                    className="formbold-form-input"
                    />
                </div>
                <div className="formbold-mb-5">
                    <label className="formbold-form-label"> Price </label>
                    <input
                    required={true}
                    onChange={handlePrice}
                    type="number"
                    placeholder="Price"
                    className="formbold-form-input"
                    />
                </div>
                <div className="formbold-mb-5">
                    <label className="formbold-form-label"> Image</label>
                    <input
                    required={true}
                    onChange={handleImage}
                    accept='image/*'
                    type="file"
                    className="formbold-form-input"
                    />
                </div>

                {/* Ingredient form starts here*/}
                        <div className="formbold-mb-5 formbold-pt-3">
                            <label className="formbold-form-label formbold-form-label-2">
                            Add ingredients
                            </label>
                            <div className="flex flex-wrap formbold--mx-3">
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                    <input
                                    value={name}
                                    required={true}
                                    onChange={handleName}
                                        type="text"
                                        placeholder="Name"
                                        className="formbold-form-input"
                                    />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                    <input
                                        value={unit}
                                        required={true}
                                        type="text"
                                        onChange={handleUnit}
                                        placeholder="Unit"
                                        className="formbold-form-input"
                                    />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                    <input
                                        value={unitPrice}
                                        required={true}
                                        onChange={handleUnitPrice}
                                        type="number"
                                        placeholder="Unit price"
                                        className="formbold-form-input"
                                    />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                    <input
                                        value={unitCount}
                                        required={true}
                                        onChange={handleUnitCount}
                                        type="number"
                                        placeholder="Unit count"
                                        className="formbold-form-input"
                                    />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                    <input
                                        value={expiryPeriod}
                                        required={true}
                                        onChange={handleExpiryPeriod}
                                        type="number"
                                        placeholder="Expiry period in days"
                                        className="formbold-form-input"
                                    />
                                    </div>
                                </div>
                            </div>
                        <button disabled={name && unit && unitPrice && unitCount && expiryPeriod ? false : true} onClick={addIngredient} className="formbold-btn">Add</button>
                        <Grid container spacing={2}>
                            {ingredients.map((ingredient,i)=>(
                                <Grid key={i} item xs={12} sm={6} md={4}>
                                    <Chip name={ingredient.name} remove={updateIngredients}/>
                                </Grid>
                            ))}
                        </Grid>
                </div>
                <button disabled={productName && price && type && description && image && ingredients.length !== 0? false : true} className="formbold-btn" onClick={addProduct}>Add new product</button>
            </div>
        </div>
    )
}