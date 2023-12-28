import { useRef } from "react";

export default function UseRefComponent() {
    let inputRef = useRef(null);

    function refButton() {
        console.log("inputRef is: ", inputRef)
    }

    return (
        <>
            <h1>Example of useRef</h1>
            <input ref={inputRef} type="text" /> <br/>
            <button onClick={refButton}>Click for reference</button>
        </>
    )
}