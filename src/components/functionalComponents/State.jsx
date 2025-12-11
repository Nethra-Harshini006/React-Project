import { useState } from "react";

const State=() =>{
    const [state,updateState]=useState("State");
    function setState(){
        updateState("Updated State");
    }
    function handleMouseEnter(){
        updateState("Mouse Entered State 😎");
    }
    function handleMouseLeave(){
        updateState("State");
    }
    function handleDoubleClick(){
        updateState("Double Clicked State 😲");
    }

    return(
        <div>
            <h2>This is a {state} Component</h2>
            <button onClick={setState}>Update</button>
            
            <h2 onMouseEnter={handleMouseEnter}>This is a {state} component</h2>

            <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>This is a {state} Component</h2>

            <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
        </div>
    );
};
export default State;