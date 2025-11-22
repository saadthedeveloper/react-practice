import { useState } from 'react';

function Radio() {
    let [gender, setGender] = useState("male")
    let genderUpdate = (event) => {
        setGender(event.target.value)
    }
    return (
        <>
            <h1>Radio</h1>

            <input checked={gender == "male"} onChange={genderUpdate} type="radio" name='gender' id='male' value="male" />
            <label htmlFor="male">Male</label>

            <input checked={gender == "female"} onChange={genderUpdate} type="radio" name='gender' id='female' value="female" />
            <label htmlFor="female">Female</label>

            <h4>Selected Gender is {gender}</h4>
        </>
    )
}

export default Radio;