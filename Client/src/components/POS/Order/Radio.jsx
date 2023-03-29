export default function Radio({id,value, isSelected, method}){
    return(
        <div className="radioWrapper">
            <input
                id={id}
                onChange={method}
                value={value}
                type="radio"
                checked={isSelected}
                className="radioButton"
            />
            <label htmlFor={id}>{value}</label>
        </div>
    );
}