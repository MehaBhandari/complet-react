import { useContext } from "react";
import UseContextHook from "./useContextHook";
import Parent from "./parent";

export default function GrandParent() {

    return (
        <UseContextHook>
            <h1>This is Grand Parent</h1>
            <Parent/>
        </UseContextHook>
    );
}