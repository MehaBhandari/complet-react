import { useState } from "react";

export default function IncrementCounterByButtonWithParam() {

    let [paramCount, setParamCounter] = useState(0);
    let [incrementParamValue, setIncrementParamValue] = useState("");
    
    function incrementByParam() {
        setParamCounter(paramCount + incrementParamValue);
        setIncrementParamValue("");
    }

    function incrementParamFunc(event) {
        setIncrementParamValue(+event.target.value);
    }

    return(
        <>
            <h2>Increment by selected amount of number</h2>
            <h3>Param Count: {paramCount}</h3>
            <input type="text" onChange={incrementParamFunc} value={incrementParamValue}/>
            <button onClick={incrementByParam}>Click to increment by above number</button>
        </>
    )
}