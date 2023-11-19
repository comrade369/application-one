// Expressions in jsx.
const myName = "Jai Hanuman";
const multiply = (a, b) => a * b;
const myList = ["Lord Hanuman", "Lord Shiva", "Goddess Saraswathi"];
const myClassName = "simple-class";

function Expressions() {
    // Expressions write inside curly brackets.
    return (
        <div>
            <h1>My name is {myName}</h1>
            <p>3 * 6 = {multiply(3, 6)}</p>
            <p>Gods I devote: {myList}</p>
            <p className={myClassName}>Giving props name for p tag from expression.</p>
        </div>
    );
}

export default Expressions;