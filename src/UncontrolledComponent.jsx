import {useRef} from 'react';

//This is an example of uncontrolled Component, We are fetching values from the input without the use of useState. We have used useRef and document.querySelector to fetch value from 2 different input fields.

function UncontrolledComponents(){
    let inputField = useRef();
    const buttonClicked = () => {
        let val = inputField.current.value;
        console.log(val);
        
        let nextVal = document.querySelector("#query").value;
        console.log(nextVal);
    }

    return(
        <div>
        <h1>UNCONTROLLED COMPONENT</h1>
        <input ref={inputField} type="text" />
        <input type="text" id="query"/>
        <button onClick={buttonClicked}>Click Me!</button>
        </div>
    )
}

export default UncontrolledComponents;