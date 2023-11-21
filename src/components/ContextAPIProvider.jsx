import { createContext } from "react";
import ContextAPIConsumer from "./ContextAPIConsumer";

// Creating instance of createContext.
export const Data = createContext();

export const Data1 = createContext();

export default function ContextAPIProvider() {


    const name = "Son Goku";
    const age = 89;

    return (
        <>
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ContextAPIConsumer />
                </Data1.Provider>
            </Data.Provider>
        </>
    );

}