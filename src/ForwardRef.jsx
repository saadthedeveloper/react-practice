import { useRef } from "react";
import InputField from './ForwardRef2';

function ForwardRef(){
let inputRef = useRef(null);

const updateInput = ()=>{
    inputRef.current.value = "Meow";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
}


    return(
        <div>
            <h1>FORWARD REF</h1>
            <InputField ref={inputRef}/>
            <button onClick={updateInput}>Click Me!</button>
        </div>
    )
}

export default ForwardRef;