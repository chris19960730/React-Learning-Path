import React, { useState } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
import "./App.css";

function App() {
  const [userInputState, changeUserInputState] = useState({
    userInput: "",
  });
  const inputChangedHandler = (event) => {
    changeUserInputState({ userInput: event.target.value });
  };
  const removeCharHandler = (index) => {
    const text = userInputState.userInput.split("");
    text.splice(index, 1);
    const updatedTxt = text.join("");
    changeUserInputState({ userInput: updatedTxt });
  };

  const charList = userInputState.userInput.split("").map((ch, index) => {
    return (
      <Char
        character={ch}
        key={index}
        clicked={removeCharHandler.bind(this, index)}
      />
    );
  });

  return (
    <div className="App">
      <input
        type="text"
        onChange={inputChangedHandler}
        value={userInputState.userInput}
      />
      <p> {userInputState.userInput}</p>
      <Validation inputLength={userInputState.userInput.length} />
      {charList}
    </div>
  );
}

export default App;
