import { useState, createContext } from "react";
export const PaternalContext = createContext();

export default function UseContextHook(props) {
    let [bankBalance, setBankBalance] = useState(0);
    let [origin, setOrigin] = useState("Asian");

    function inheritMoney() {
        setBankBalance(1000000000);
        setOrigin("Bharat");
    }

    return (
        <PaternalContext.Provider value={{bankBalance,origin}}>
            {props.children}
        </PaternalContext.Provider>
    );
}