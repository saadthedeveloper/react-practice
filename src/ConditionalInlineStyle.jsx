import { useState } from "react";

function ConditionalInlineStyle() {




    let [color, setColor] = useState({
        backgroundColor: "black",
        height: "50px",
        width: "500px"
    });

    const randomColor = () => {

        const n1 = Math.floor(Math.random() * 256);
        const n2 = Math.floor(Math.random() * 256);
        const n3 = Math.floor(Math.random() * 256);


        let random = `rgb(${n1},${n2},${n3})`


        setColor(
            {
                ...color,
                backgroundColor: random
            }
        )
    }

    return (
        <>
            <h1>CONDITIONAL INLINE STYLE</h1>
            <div style={color}></div>
            <p>Click The Button To Get A Random Color</p>
            <button onClick={randomColor}>Click Me!</button>
        </>
    )
}

export default ConditionalInlineStyle;