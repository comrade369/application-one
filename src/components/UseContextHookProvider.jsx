import { createContext } from "react";
import UseContextHook from "./UseContextHook";

export const Username = createContext();
export const Anime = createContext();

export default function UseContextHookProvider() {

    const username = "Monkey D.Luffy";
    const anime = "One Piece";

    return (
        <>
        <Username.Provider value={username}>
            <Anime.Provider value={anime}>
                <UseContextHook />
            </Anime.Provider>
        </Username.Provider>
        </>
    );
}