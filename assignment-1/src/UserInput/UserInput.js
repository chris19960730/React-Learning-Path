import React from "react";

const userInput = (props) =>{
    return (
        <div>
            <input type='text' onChange = {props.changed} value={props.userName}/> Hello
        </div>
    )
}

export default userInput;