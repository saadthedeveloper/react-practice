function Student({name, updName}){
    return(
        <>
        <hr />
        <h1>PROPS 2</h1>
        <h1>STUDENT OF THE YEAR IS {name}</h1>
        <button onClick={()=>{updName("Saad")}}>Show Name</button>
        </>
    )
}

export default Student;