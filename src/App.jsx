import { useState } from 'react';

import User from "./Props";
import Counter from "./State";
import Student from "./Props-2";
import Greetings from "./Props-3"

function App(){
  let [name, updName] = useState();

  return(
    <>
    <Counter /> {/*Example Of State*/}
    <User name="Saad" major="Software Eng."/> {/*Example Of Props*/}
    <Student name={name} updName={updName}/> {/*Another Example Of Props*/}
    <Greetings><h2 style={{ backgroundColor : 'blue'}}>Passing JSX</h2></Greetings>{/*Another Example Of Props - Passing JSX*/}
    </>
  )
}

export default App;