import {useState} from React;

const UseState = () =>{
    const [number,updateNumber]= useState(0);
    return(
        <div>
            <h2>UseState Hook Example</h2>
            <button onClick={updateNumber(number - 1)}>-</button>
            <button>-</button>
            <input type="number" value={0}/>
            <button>+</button>
            <button>Reset</button>
        </div>
    )
}