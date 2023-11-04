import React from "react";

export class ClassComponent extends React.Component {
    render() {
        return (
            <p>This is a Class Component</p>
        );
    }
}

export class AnotherClassComponent extends React.Component { // export component returns Ojbect and we destructure while importing it.
    render() {
        return (
            <p>I am an Another Class Component</p>
        )
    }
}

// Does not learn about HigherOrder Components and Pure Components.
