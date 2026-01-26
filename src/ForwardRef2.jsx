// import ForwardRef from "./ForwardRef";
// import { forwardRef } from "react";
// //whys the name ref zaroori

// function InputField(props, ref){
//     return(
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )
// }

// export default forwardRef(InputField);

function InputField(props){
return(
    <div>
        <input style={{backgroundColor:props.colo}} type="text" ref={props.ref}/>
    </div>
)
}

export default InputField;