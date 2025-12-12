import { useEffect } from "react";


function Unmount02(){

    useEffect(() => {
        console.log("Mounted");
        return () => {
            console.log("Unmounted");
        };
    }, []);

    return(
        <h2>😃</h2>
    )
}

export default Unmount02;