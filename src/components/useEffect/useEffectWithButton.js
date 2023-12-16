import { useEffect, useState } from "react";

export default function UseEffectWithButton() {
    let [name, setName] = useState("Meha");
    function changeName() {
        setName("Ahem");
    }

    /* 
        Here we have added setTimeout to show that initially name is Meha,
        then it changes to Ram.
        Whenever there is a button click it changes to Ahem and then back to Ram.
    */

    useEffect(()=>{
        setTimeout(()=>{
            setName("Ram");
        }, 5000);
    }, [name]);

    return(
        <>
            <h2>This is an example of change in name twice...</h2>
            <h3> Name is: {name}</h3>
            <button onClick={changeName}>Change Name</button>
        </>
    )
}