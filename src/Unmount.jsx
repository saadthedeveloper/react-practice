import { useEffect, useState } from "react";
import Unmount02 from "./Unmount02";

function Unmount() {
    let [display, setDisplay] = useState(true);

    


    return (
        <div>
            <h1>UNMOUNT</h1>
            {
                display ? <Unmount02 /> : null
            }
            <button onClick={() => setDisplay(!display)}>Click Me!</button>
        </div>
    )
}

export default Unmount;