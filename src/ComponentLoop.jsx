import ComponentLoopDisplay from "./ComponentLoopDisplay"

function ComponentLoop() {
    let user = [{
        name: "jhon",
        age: 20
    },
    {
        name: "Leo",
        age: 24
    },
    {
        name: "Jaden",
        age: 30
    }
    ]

    return (
        <>
        {
            user.map((e)=>(

                
                <ComponentLoopDisplay user={e} key={e.name}/>
                
        ))
        }
        </>
    )
}

export default ComponentLoop;