import { useState } from "react";

function StringUseStateHook() {

    // using string value in useState function.
    const [string, setString] = useState("Unknown");

    // changing string value using setString function from useState hook.
    const nameHandle = () => {
        setString("Son Gohan");
    }

    return (
        <>
            <h4>Name: {string}</h4>
            <button onClick={nameHandle}>change name</button>
        </>
    );
}

export default StringUseStateHook;