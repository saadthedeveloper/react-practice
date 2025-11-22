import { useState } from 'react';

function Dropdown(){
    let [country, setCountry] = useState("Qatar");

    return(
        <>
        <h1>Dropdown</h1>
        
        <select name="country" id="country" onChange={(event)=>{setCountry(event.target.value)}} defaultValue={"Qatar"}>
            <option value="Japan">Japan</option>
            <option value="Qatar">Qatar</option>
            <option value="Australia">Australia</option>
            <option value="Indonesia">Indonesia</option>
        </select>

        <h4>Selected Country: {country}</h4>
        </>
    )
}

export default Dropdown;