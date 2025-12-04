import CarsAvailable from "./CarsAvailable";

function Cars({ car }) {
    return (
        <div>
            <h1 style={{fontWeight:"700"}}>{car.brand}</h1>
            <h3 style={{fontWeight:"100"}}>{car.model}</h3>
            <CarsAvailable available={car.available}/>
        </div>
    )
}

export default Cars;