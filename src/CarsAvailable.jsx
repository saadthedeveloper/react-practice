function CarsAvailable({ available }) {
    return (
        <div>
            {
                available.map((elements, index)=>{
                    return(
                        <div key={index}>
                            <h3>AVAILABLE</h3>
                            <h5 style={{fontWeight:"100"}}>{elements.color}</h5>
                            <h5 style={{fontWeight:"100"}}>{elements.year}</h5>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default CarsAvailable;