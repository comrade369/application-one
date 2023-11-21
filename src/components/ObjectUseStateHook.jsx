import { useState } from "react";

function ObjectUseStateHook() {

    // using object in useState function.
    const [anime, setAnime] = useState({name: "One Piece", ratings: 9.6});

    // changing object using setAnime function from useState hook.
    const handleRating = () => {
        setAnime({
            ...anime,
            ratings: 9.9,
        });
    }

    return (
        <>
            <h3>{anime.name}</h3>
            <p>Rating: {anime.ratings}</p>
            <button onClick={handleRating}>Change rating</button>
        </>
    );

}

export default ObjectUseStateHook;