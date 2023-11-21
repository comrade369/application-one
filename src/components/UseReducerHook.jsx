import { useReducer } from "react";

export default function UseReducerHook() {
 
    const [state, dispatch] = useReducer(reducer, intialState);

    return (
        <>
        <h3>{state.count}</h3>
        <button
            onClick={() => dispatch({type: "increment"})}
        >increment</button> {" "}
        <button
            onClick={() => dispatch({type: "decrement"})}
        >decrement</button> {" "}
        <button
            onClick={() => dispatch({type: "reset"})}
        >reset</button>
        </>
    );
}

const intialState = {count: 0};

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1,
            }
        case "decrement":
            return {
                ...state,
                count: state.count - 1,
            }
        case "reset":
            return {
                ...state,
                count: 0,
            }
        default:
            return state;
    }
}