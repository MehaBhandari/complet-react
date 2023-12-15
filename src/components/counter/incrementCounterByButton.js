import { useState, useEffect } from "react";

export default function IncrementCounterByButton() {

    let [counterButton, setCounterButton] = useState(0);

    function incrementCounter() {
        setCounterButton(++counterButton);
    }

    return(
        <>
            <h2> Increment by clicking button</h2>
            <h3>{counterButton}</h3>
            <button onClick={incrementCounter}>Click here to increment</button>
        </>
    )

}