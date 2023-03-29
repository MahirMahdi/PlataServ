import { Box, Typography } from "@mui/material"

export default function Query({select_type, handlePeriod, handleSearch, selectType}){
    
    return(
        <Box sx={{width:{xs:'100vw',md:'75vw'}, padding:'0 2.5rem',height:'min-content', display:'flex', justifyContent:'space-around' ,flexDirection:'column',backgroundColor:'white', borderRadius:2.5}}>
            <Typography sx={{padding:'1rem',fontFamily: "'Roboto', sans-serif"}} variant="h4">Query</Typography>
            <Box sx={{display:{xs:'grid',sm:'flex'} ,alignItems:'center' ,justifyContent:'space-evenly',fontFamily: "'Roboto', sans-serif"}}>
                <div style={{width:'15rem'}} className="w-full sm:w-half formbold-px-3">
                    <div className="formbold-mb-5">
                    <label>Select Period</label>
                    <select
                    required={true}
                    onChange={handlePeriod}
                    className="formbold-form-input"
                    >
                        <option>Monthly</option>
                        <option>Daily</option>
                        <option>Custom Period</option>
                    </select>
                    </div>
                </div>
                <div style={{width:'15rem'}} className="w-full sm:w-half formbold-px-3">
                        {
                         select_type && select_type.filter(item => item.type === selectType).map((type,i) => (
                            <div key={i} className="formbold-mb-5">
                                <label>{type.label}</label>
                                {type.component}
                            </div>
                            ))
                        }
                </div>
                <button onClick={handleSearch} style={{marginTop:'1rem'}} className="formbold-btn">Search</button>
            </Box>
        </Box>
    );
}