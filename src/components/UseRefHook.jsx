import { useRef } from "react";

export default function UseRefHook() {

    const inputElement = useRef(null);

    const focusInput = () => {
        console.log(inputElement);
        inputElement.current.focus();
        inputElement.current.value = "Roronoa Zoro";
    }

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus & write Zoro</button>

        </>
    );
}