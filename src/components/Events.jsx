// Events in react.

function ButtonEvent() {

    const clickHandle = () => {
        return window.alert("You Clicked Button!!!");
    }

    return (
        <button onClick={clickHandle}>Click me</button>
    );
}

function CopyEvent() {

    const copyHandle = () => {
        return window.alert("Stop Copying Text!!!");
    }

    return (
        <p onCopy={copyHandle}>When you try to copy this text, you will get alert message because of
            onCopy handler.
        </p>
    );
}

function MouseOverEvent() {

    const moveHandler = () => {
        return window.alert("Mouse Moved here.");
    }

    return (
        <button onMouseMove={moveHandler}>Move your mouse here.</button>
    );
}

function EventsComponent() {

    return (
        <>
            <em>Button Event component placed here.</em> <br />
            <ButtonEvent /> <br />

            <em>Copy Event component placed here.</em> <br />
            <CopyEvent /> <br />

            <em>Mouse Over Event component placed here.</em> <br />
            <MouseOverEvent />
        </>
    );
}

export default EventsComponent;