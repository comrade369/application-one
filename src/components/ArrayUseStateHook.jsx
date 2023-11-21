import { useState } from "react";

function ArrayUseStateHook() {

    // using array in useState function.
    const [admirals, setAdmirals] = useState(["Akainu", "Aokiji", "Kizaru"]);

    // changing array items using setAdmirals function in useState hook.
    const addHandler = () => {
        setAdmirals([...admirals, "Fujitora"]);
    }

    const removeHandler = () => {
        setAdmirals(admirals.filter(admiral =>
            admiral !== "Aokiji"));
    }

    const updateHandler = () => {
        const updateAdmirals = [];
        // eslint-disable-next-line array-callback-return
        admirals.map((admiral) => {
            if (admiral === "Aokiji") {
                updateAdmirals.push("Fujitora");
            } else if (admiral === "Akainu") {
                updateAdmirals.push("Ryokugyu");
            } else {
                updateAdmirals.push(admiral);
            }
        })
        setAdmirals(updateAdmirals);
    }

    return (
        <>
          <h3>Admirals in One Piece:</h3>  
          {admirals.map((admiral, index) => (
            <li key={index}>{admiral}</li>
          ))}

          <button onClick={addHandler}>Add an Admiral</button> {" "}
          <button onClick={removeHandler}>Remove an Admiral</button> {" "}
          <button onClick={updateHandler}>Update Admirals</button>

        </>
    );
}

export default ArrayUseStateHook;