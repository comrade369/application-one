import { useState } from "react";


function NumberUseStateHook() {

    // using useState hook here and destructering it.
    // using numeric value in useState function.
    const [value, setValue] = useState(0);

    // creating events function.
    // changing numeric value using setValue function in useState hook.
    const increaseHandle = () => {
        setValue(value + 1);
    }

    const decreaseHandle = () => {
        setValue(value - 1);
    }

    const resetHandle = () => {
        setValue(0);
    }

    return (
        <>
            <h1>Number: {value}</h1>
            <button onClick={increaseHandle}>increase</button> {" "}
            <button onClick={decreaseHandle}>decrease</button> {" "}
            <button onClick={resetHandle}>reset</button>
        </>
    );
}

export default NumberUseStateHook;