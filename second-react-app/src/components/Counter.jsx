import { useState } from "react";
import Message from "./Message";

function Counter(){
    const [count , setCount] = useState(0);
    const [delta , setDelta] = useState(1);
    const[msg , setMsg] = useState();
    function handleDeltaInc(){
        console.log("handleDeltaInc");
        setDelta(delta+1);
    }
    function handleDeltaDec(){
        console.log("handleDeltaDec");
        setDelta(delta-1);
    }
    function handleDeltaDefault(){
        console.log("handleDeltaDefault");
        setDelta(1);
    }
    function handleIncClick(){
        console.log("Button Clicked");
        setCount(count+delta);
    }
    function handleDecClick(){
        console.log("Button Clicked");
        setCount(count-delta);
    }
    function handleResetClick(){
        console.log("Button Clicked");
        setCount(0);
    }
    function printMsg(){
        setMsg(<Message/>);
    }

    return(
        <div>
            <h1>Counter : {count} </h1>
            <button onClick={handleIncClick}>Increment Count</button>
            <button onClick={handleDecClick}>Decrement Count</button>
            <button onClick={handleResetClick}>Reset</button>
            <h1>Couter Delta is : {delta}</h1>
            <button onClick={handleDeltaInc}>Increment Delta</button>
            <button onClick={handleDeltaDec}>Decrement Delta</button>
            <button onClick={handleDeltaDefault}>Reset Delta</button>
            <h1>Print Msg {msg}</h1>
            <button onClick={printMsg}>Click Button</button>
        </div>
    );
}

export default Counter;