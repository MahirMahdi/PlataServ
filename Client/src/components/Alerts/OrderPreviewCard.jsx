export default function OrderPreviewCard({name,unitName,packPrice,unitsInAPack,expiryPeriod,previewType,handleTotalPacks,confirmOrder,totalPacks}){
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
                            <label>Name</label>
                            <input
                                readOnly
                                value={name}
                                type="text"
                                placeholder="Name"
                                className="formbold-form-input"
                            />
                            </div>
                        </div>
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5">
                            <label>Unit Name</label>
                            <input
                                readOnly
                                value={unitName}
                                type="text"
                                placeholder="Unit Name"
                                className="formbold-form-input"
                            />
                            </div>
                        </div>
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5">
                            <label>Pack Price</label>
                            <input
                                readOnly
                                value={packPrice}
                                type="number"
                                placeholder="Pack price"
                                className="formbold-form-input"
                            />
                            </div>
                        </div>
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5">
                            <label>Units In A Pack</label>
                            <input
                                readOnly
                                value={unitsInAPack}
                                type="number"
                                placeholder="Units In A Pack"
                                className="formbold-form-input"
                            />
                            </div>
                        </div>
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5">
                            <label>Expiry Period</label>
                            <input
                                readOnly
                                value={expiryPeriod}
                                type="number"
                                placeholder="Expiry period in days"
                                className="formbold-form-input"
                            />
                            </div>
                        </div>
                        {previewType === "Preview PAR"?
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                <label>Total Packs</label>
                                <input
                                    readOnly
                                    value={totalPacks}
                                    type="number"
                                    placeholder="Total Packs"
                                    className="formbold-form-input"
                                />
                                </div>
                            </div>
                        
                            :
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <label>Total Packs</label>
                                    <input
                                        onChange={handleTotalPacks}
                                        required={true}
                                        type="number"
                                        placeholder="Enter total packs"
                                        className="formbold-form-input"
                                        min="1"
                                    />
                                </div>
                            </div> 
                            }      
                    </div>
                    {previewType === "Preview PAR"?  
                        <button onClick={confirmOrder} className="formbold-btn" style={{width:'fit-content',padding:'1rem 2rem',margin:'auto'}}>Confirm Order</button>
                        :
                        <button disabled={name && totalPacks? false : true} onClick={confirmOrder} className="formbold-btn" style={{width:'fit-content',padding:'1rem 2rem',margin:'auto'}}>Confirm Order</button>
                    }
                </div>
            </div>
        </div>
    )
}