// useState hook in react.
import NumberUseStateHook from "./NumberUseStateHook";
import StringUseStateHook from "./StringUseStateHook";
import ArrayUseStateHook from "./ArrayUseStateHook";
import ObjectUseStateHook from "./ObjectUseStateHook";
import ArrayOfObjectsUseStateHook from "./ArrayOfObjectsUseStateHook";

function UseStateHook() {

    return (
        <>
            <h2>NumberUseStateHook Component placed here:</h2>
            <NumberUseStateHook />

            <h2>StringUseStateHook Component placed here:</h2>
            <StringUseStateHook />

            <h2>ArrayUseStateHook Component placed here:</h2>
            <ArrayUseStateHook />

            <h2>ObjectUseStateHook Component placed here:</h2>
            <ObjectUseStateHook />

            <h2>ArrayOfObjectsUseStateHook Component placed here:</h2>
            <ArrayOfObjectsUseStateHook />
        </>
    );
}

export default UseStateHook;