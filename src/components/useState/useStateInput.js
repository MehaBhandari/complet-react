import { useState } from "react";

export default function UseStateInput() {
    let [firstName, setFirstName] = useState("First Name");
    let [lastName, setLastName] = useState("Last Name");

    function inputValue(event) {
        if(event.target.id === "firstName") {
            setFirstName(event.target.value);
        } else if(event.target.id === "lastName") {
            setLastName(event.target.value)
        }
        
    }

    return (
        <>
            <h1>UseState Usage: </h1>
            First Name <input type="text" id="firstName" onChange={inputValue} value={firstName}/> <br/>
            Last Name <input type="text" id="lastName" onChange={inputValue} value={lastName}/> <br/><br/>
        </>
    );
}