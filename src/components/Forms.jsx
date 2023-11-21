// forms in react.
import { useState } from "react";

function Forms() {

    const [username, setUsername] = useState("");

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert(`You Changed username to this: ${username}`);
        setUsername("");
    }

    return (
        <>
            <h1>Form:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleChange} />
                <button>submit</button>
            </form>
        </>
    );
}

export default Forms;