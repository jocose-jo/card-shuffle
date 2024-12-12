import React, {useState} from "react";
import './InputBar.css'

function InputBar({onEnter}) {
  const [userInput, setUserInput] = useState()

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="container">
      <input type="text" id="card-input" onChange={handleUserInput}/>
      <button onClick={() => onEnter(userInput)}>Enter</button>
    </div>
  );
}

export default InputBar;
