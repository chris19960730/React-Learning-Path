import React from "react";

const style = {
  background: "#eee",
  border: "2px solid orange",
};
const userInput = (props) => {
  return (
    <div style= {style}>
      <input type="text" onChange={props.changed} value={props.userName} />{" "}
      Hello
    </div>
  );
};

export default userInput;
