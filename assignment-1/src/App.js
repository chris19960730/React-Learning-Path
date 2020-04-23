import React, { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";

function App() {
  const [userNameState, setUserNameState] = useState({
    User: [{ name: "Kobe" }, { name: "Harden" }],
  });

  const switchUserNameHandler = (event) => {
    setUserNameState({
      User: [
        {
          name: event.target.value,
        },
        {
          name: "Harden",
        },
      ],
    });
  };

  return (
    <div>
      <UserInput changed={switchUserNameHandler} >input the sentences here: </UserInput>
      <UserOutput username="Chris"></UserOutput>
      <UserOutput
        username={userNameState.User[0].name}
      ></UserOutput>
      <UserOutput username={userNameState.User[1].name}></UserOutput>
    </div>
  );
}

export default App;
