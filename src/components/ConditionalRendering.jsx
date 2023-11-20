// Conditional rendering in react.

function ValidPassword() {
    return <h1>Valid Password</h1>
}

function InvalidPassword() {
    return <h1>Invalid Password</h1>
}

function IfElsePassword({isValid}) {

    if (isValid) {
        return <ValidPassword />
    } else {
        return <InvalidPassword />
    }

}

function TernaryPassword({isValid}) {
    return isValid ? <ValidPassword /> : <InvalidPassword />
}

function AndStatement() {
    const products = ["Keyboard", "Formal Shirt", "Formal Pant", "Oxford Shoes", "Leather Purse"];

    return (

        <>
            {products.length > 0 && 
                <h2>You Have {products.length} Products in your cart.</h2>}

            <ul>
                <h3><strong><em>Products in Cart:</em></strong></h3>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </>
    );
}

function ConditionalRendering() {

    return (
        <>
            <h3>Passing Props to Component to check Condition.</h3>
            <strong>Checking Conditional rendering using if-else statements:</strong>
            <IfElsePassword isValid={true} />

            <em>Checking Conditional rendering using ternary operator:</em>
            <TernaryPassword isValid={false} />

            <p>Using && Operator for Conditional rendering:</p>
            <AndStatement />
        </>
    );
}

export default ConditionalRendering;