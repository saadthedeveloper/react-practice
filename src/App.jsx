import { useState } from 'react';

import User from "./Props";
import Counter from "./State";
import Student from "./Props-2";
import Greetings from "./Props-3"
import DynamicVal from './DynamicVal';
import ControlledComp from './ControlledComp';
import Checkboxes from './Checkboxes';
import Radio from './Radio';


function App(){
  let [name, updName] = useState();

  return(
    <>
    <Counter /> {/*Example Of State*/}
    <hr />
    <User name="Saad" major="Software Eng."/> {/*Example Of Props*/}
    <hr />
    <Student name={name} updName={updName}/> {/*Another Example Of Props*/}
    <hr />
    <Greetings><h2 style={{ backgroundColor : 'blue'}}>Passing JSX</h2></Greetings>{/*Another Example Of Props - Passing JSX*/}
    <hr />
    <DynamicVal/> {/*Dynamically updating value of elsewhere from input field*/}
    <hr />
    <ControlledComp />
    <hr />
    <Checkboxes />
    <hr />
    <Radio />
    <hr />
    </>
  )
}

export default App;