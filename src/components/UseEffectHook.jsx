// useEffect hook in react.
import { useEffect, useState } from "react";

function UseEffectHook() {

    const [value, setValue] = useState(0);

    // useEffect works on first render.
    // useEffect works on side effect.
    // useEffect works on Dependency list.
    useEffect(() => {
        console.log("Working");
        document.title = value;
    }, [value]);

    // const [data, setData] = useState([]);

    // geting data from outside.
    // fetch data in reactjs.
    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //         const data = await response.json();

    //         if (data && data.length) {
    //             setData(data);
    //         }
    //     }

    //     getData();
    // })
    
    return (
        <>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Change value</button>

            {/* <h1>Data we fetch from outside:</h1>
            <ul>
                {data.map(item => item.id < 4 ? 
                <li key={item.id}>{item.title}</li> : null)}
            </ul> */}
        </>
    );
}

export default UseEffectHook;