import React from "react";
import "./UserOutput.css";
const userOutPut = (props) => {
  return (
    <div className="output">
      <p>Hello {props.username}</p>
    </div>
  );
};

export default userOutPut;
