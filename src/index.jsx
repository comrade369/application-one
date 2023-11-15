import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const MyButton = () => {
    return (
        <button>I'm a Button</button>
    );
}

const user = {
    name: "Hedy Lamarr", 
    imaUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imgSize: 90,
}

const Profile = () => {
    return (
        <>
            <h1>{user.name}</h1>
            <img src={user.imaUrl} alt={"The photo of " + user.name} 
                style={{width: user.imgSize, height: user.imgSize}} />
        </>
    );
}

const products = [
    {title: "Cabbage", isFruit: false, id: 1},
    {title: "Garlic", isFruit: false, id: 2},
    {title: "Apple", isFruit: true, id: 3},
];

const ShoppingList = () => {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{color: product.isFruit ? "magenta" : "darkgreen"}}
        >
            {product.title}
        </li>
    );
    
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const MyButton2 = () => {

    // Event handler function.
    const handleOnClick = () => {
        return window.alert("You clicked me.");
    }

    return (
        <button onClick={handleOnClick}>Click me</button>
    );
}

const MyButton3 = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <button onClick={handleCount}>Clicked {count} times</button>
    );
}

const LiftingTheStateUpExample = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

    function MyButton4(props) {
        const {count, onClick} = props;
        return (
            <button onClick={onClick}>Clicked {count} times</button>
        )
    }

    return (
        <div>
            <MyButton4 count={count} onClick={handleCount} />
            <MyButton4 count={count} onClick={handleCount} />
        </div>
    );
}

const App = () => {
    return (
        <div>
            <h1>Welcome to my App</h1>
            <MyButton />

            <h1>Second Example</h1>
            <Profile />

            <h1>Third Example</h1>
            <ShoppingList />

            <h1>Fourth Example</h1>
            <MyButton2 />

            <h1>Fifth Example</h1>
            <MyButton3 />
            <MyButton3 />

            <h1>Lifting Up State Example</h1>
            <LiftingTheStateUpExample />
        </div>
    );
}

rootElement.render(<App />);