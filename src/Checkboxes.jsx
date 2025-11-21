import { useState } from 'react';

function Checkboxes(){
    let [value, updValue] = useState([]);
    function handleValue(event){
        if(event.target.checked){
            updValue([...value,event.target.value]);
        }else{
            updValue([...value.filter((item)=>item!=event.target.value)]);
        }
    }

    return(
        <>
        <input onChange={handleValue} type="checkbox" id="english" value="English"/>
        <label htmlFor="english">English</label>

        <input onChange={handleValue} type="checkbox" id="french" value="French"/>
        <label htmlFor="french">French</label>
        
        <input onChange={handleValue} type="checkbox" id="dutch" value="Dutch"/>
        <label htmlFor="dutch">Dutch</label>

        <h1>{value}</h1>
        </>
    )
}

export default Checkboxes;