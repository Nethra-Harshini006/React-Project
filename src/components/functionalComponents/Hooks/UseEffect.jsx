import { useEffect, useState } from "react";
const UseEffectExample =()=>{
    var[text,updateText] =useState("hello");
    useEffect(()=>{
        console.log(text);
    },[text]);
    return(
       <div>
        <h2>This is UseEffect Hook</h2>
        <input type="text" value={"text"} onChange={(e)=>{
            console.log(e.target.value);
        }}/>
        </div>

    );
};
export default UseEffectExample;