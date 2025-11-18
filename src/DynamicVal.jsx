import { useState } from 'react';

function DynamicVal(){
    let [val, updVal]=useState("Default Value");
    return(
        <>
        <input type="text" placeholder="Hello" onChange={(event)=>{updVal(event.target.value)}}/>
        <h1>{val}</h1>
        </>
    )
}

export default DynamicVal;