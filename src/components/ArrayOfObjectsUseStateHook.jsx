
import { useState } from "react";

function ArrayOfObjectsUseStateHook() {

    const animeDate = [
        {name: "One Piece", rating: 9.6},
        {name: "Naruto", rating: 9.1},
        {name: "Dragon Ball Z", rating: 9.3},
    ];

    // using array of objects in useState function.
    const [animes, setAnimes] = useState(animeDate);

    // changing array of objects using setAnimes function from useState hook.
    const animeHandle = () => {
        setAnimes(animes.map(anime => (
            anime.name === "Naruto" ?
                {...animes, name: "Naruto Shippuden", rating: 9.8} : anime
        )));
    }

    return (
        <>
            <em>Animes:</em>
            {animes.map((anime, index) => (
                <ul key={index}>
                    <li>Title: {anime.name}</li>
                    <li>Rating: {anime.rating}</li>
                </ul>
            ))}

            <button onClick={animeHandle}>Change Anime</button>
        </>
    );
}

export default ArrayOfObjectsUseStateHook;