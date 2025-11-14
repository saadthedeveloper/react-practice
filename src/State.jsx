import { useState } from 'react';

function Counter(){
    const [count, updCounter]=useState(0);
    return(
        <>
        <h1>STATE </h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>{updCounter(count+1)}}>Increment</button>
        </>
    )
}

export default Counter; 