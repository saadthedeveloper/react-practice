import { useState } from 'react';

function DynamicVal(){
    let [val, updVal]=useState("Default Value");
    return(
        <>
        <input type="text" placeholder="Hello" onChange={(event)=>{updVal(event.target.value)}}/>
        <h3>{val}</h3>
        </>
    )
}

export default DynamicVal;