import { useEffect } from "react";


function Unmount02(){

    useEffect(() => {
        alert("Mounted");
        return () => {
            alert("Unmounted");
        };
    }, []);

    return(
        <h2>😃</h2>
    )
}

export default Unmount02;