
import { useState } from "react";
import "./style.css";

function CounterApp() {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);
    
    return (
        <>
            <div className="container">
                <h1 className="number">{count}</h1>
            </div>

            <section className="btn-container">
                <button className="button" onClick={increment}>+</button>
                <button className="button" onClick={decrement}>-</button>
            </section>
        </>
    );
}

export default CounterApp;