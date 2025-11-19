import { useState } from 'react';

function ControlledComp() {
    let [name, updName] = useState("");
    let [email, updEmail] = useState("");
    let [password, updPassword] = useState("");


    return (
        <>
            <h1>Controlled Components</h1>

            <form action="get">
                <input value={name} type="Name" placeholder="Enter Your Name" onChange={(e) => { updName(e.target.value); }} />
                <br />
                <input value={email} type="Email" placeholder="Enter Your Email" onChange={(e) => { updEmail(e.target.value); }} />
                <br />
                <input value={password} type="Password" placeholder="Enter Your Password" onChange={(e) => { updPassword(e.target.value); }} />
                <br />
                <button>Submit</button>
                <button onClick={()=>{updName(""); updEmail(""); updPassword("")}}>Clear</button>
            </form>

            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
        </>
    )

}

export default ControlledComp; 