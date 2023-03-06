export default function Radio({id,value, isSelected, method}){
    return(
        <div style={{display:'flex',columnGap:'1rem',textAlign:'center'}} className="RadioButton">
            <input
                id={id}
                onChange={method}
                value={value}
                type="radio"
                checked={isSelected}
                style={{width:'1.25rem',height:'1.25rem'}}
            />
            <label htmlFor={id}>{value}</label>
        </div>
    )
}