import React, { useState } from 'react';
// import logo from './logo.svg';
import './Room.css';



function App() {
  const [isLit, setLit] =useState(true);
  // const brightness=isLit ? "lit" : "dark";
  return (
    <div className={"room " +(isLit ? "lit" : "dark")}>      
          The room is {isLit ? "Light" : "Dark"}
          <br/>
          {/* <button onClick = {()=>console.log("button pressed")}>Toggle light</button> */}
          <button onClick = {()=>{
                                  setLit(!isLit)
                                   console.log("button pressed");}}>Toggle light</button>
          
    </div>
  );
}

export default App;
