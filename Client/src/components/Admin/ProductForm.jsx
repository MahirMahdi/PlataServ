import { Grid } from "@mui/material"
import Chip from "./Chip"

export default function ProductForm({type,productName,price,description,image,ingredients,name,unitName,packPrice,unitsInAPack,expiryPeriod,handleType,handleProductName,handlePrice,handleDescription,handleImage,addIngredient,handleName,handleUnitName,handlePackPrice,handleUnitsInAPack,handleExpiryPeriod,addProduct,updateIngredients}){

    const addIngredientCondition = name && unitName && packPrice && unitsInAPack && expiryPeriod? false : true

    const addProductCondition = productName && price && type && description && image && ingredients.length !== 0? false : true
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
                                        value={unitName}
                                        required={true}
                                        type="text"
                                        onChange={handleUnitName}
                                        placeholder="Unit Name"
                                        className="formbold-form-input"
                                    />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                    <input
                                        value={packPrice}
                                        required={true}
                                        onChange={handlePackPrice}
                                        type="number"
                                        placeholder="Pack price"
                                        className="formbold-form-input"
                                    />
                                    </div>
                                </div>
                                <div className="w-full sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                    <input
                                        value={unitsInAPack}
                                        required={true}
                                        onChange={handleUnitsInAPack}
                                        type="number"
                                        placeholder="Units In A Pack"
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
                        <button disabled={addIngredientCondition} onClick={addIngredient} className="formbold-btn">Add</button>
                        <Grid container spacing={2}>
                            {ingredients.map((ingredient,i)=>(
                                <Grid key={i} item xs={12} sm={6} md={4}>
                                    <Chip name={ingredient.name} remove={updateIngredients}/>
                                </Grid>
                            ))}
                        </Grid>
                </div>
                <button disabled={addProductCondition} className="formbold-btn" onClick={addProduct}>Add new product</button>
            </div>
        </div>
    )
}