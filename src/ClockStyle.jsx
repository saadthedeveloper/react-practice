import { useState } from 'react';


function Clock({time}){
    let [color, setColor] = useState("White");

    function updateColor(e){
        setColor(e.target.value);
    }


    return(
        <>
        <h1 style={{width:"200px", textAlign:"center"}}>CLOCK</h1>
        
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"200px", padding:"20px 0"}}>
        <select name="color" id="color-select" onChange={updateColor} >
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
        </select>
        </div>

        <div style={{border:"1px solid white", backgroundColor:"black", color:color, width:"200px",padding:"50px 0", textAlign:"center", borderRadius:"20px"}}>
            <span>{time}</span>
        </div>

        <h1>{color}</h1>
        </>
    )
}

export default Clock;