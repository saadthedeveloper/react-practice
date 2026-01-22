import { useEffect, useRef, useState } from "react";


function Useref(){
    const render = useRef(0);
    const [name, updName] = useState("User");
    
    useEffect(()=>{
        render.current++;
    });

    return(

        <div>
            <p>Number Of Time Component Rendered: {render.current}</p>
            <p>Name: {name}</p>
            <input type="text" onChange={(e)=>updName(e.target.value)} />
        </div>
    )
}

export default Useref;