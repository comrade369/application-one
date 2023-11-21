import { useContext } from "react";
import { Username, Anime } from "./UseContextHookProvider";

export default function UseContextHook() {

    /* Data, Data1 are the instances from create context Api and use them in 
        useContext hook */
    const name = useContext(Username);
    const anime = useContext(Anime);

    return (
        <>
            <h3>My name is {name}, I am from {anime}.</h3>
            <h3>The value of this get from useContext Hook:</h3>
            <h4>The value: {name}, came from Username.Provider context tag</h4>
            <h4>The value: {anime}, came from Anime.Provider context tag</h4>
        </>
    );
}