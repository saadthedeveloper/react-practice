import Cars from "./Cars";

function NestedLoop() {
    let carData = [
        {
            brand: "Honda",
            model: "Accord",
            available: [
                {
                    color: "red",
                    year: 2017
                },
                {
                    color: "black",
                    year: 2025
                },
                {
                    color: "blue",
                    year: 2010
                }
            ]

        },

        {
            brand: "Toyota",
            model: "Crown",
            available: [
                {
                    color: "pearl white",
                    year: 2012
                },
                {
                    color: "metallic black",
                    year: 2023
                },
                {
                    color: "off white",
                    year: 2013
                }
            ]
        },

        {
            brand: "KIA",
            model: "Sonata",
            available: [
                {
                    color: "Gray",
                    year: 2017
                },
                {
                    color: "Black",
                    year: 2010
                },
                {
                    color: "Bronze",
                    year: 2024
                }
            ]
        }
    ];



    return (
        <div>
            <h1 style={{textAlign:"center"}}>NESTED LOOP</h1>
            {
                carData.map((car) =>
                    <Cars car={car} />

                )
            }
        </div>
    )
}

export default NestedLoop;