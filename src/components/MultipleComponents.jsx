import Expressions from "./Expressions";
import Fragments from "./Fragments";
import ListsComponent from "./ListsComponent";
import PropsComponent from "./PropsComponent";
import ConditionalRendering from "./ConditionalRendering";
import StylesInReact from "./SytlesInReact";
import EventsComponent from "./Events";


function MultipleComponents() {
    // Takes multiple components inside.
    return (
        <div>
            <h1>This Components takes Multiple Other Components.</h1>
            <p>This is an Expressions Component placed here.</p>
            <Expressions />

            <h1>This is a Fragments Component placed here.</h1>
            <Fragments />

            <h1>ListsComponent placed here.</h1>
            <ListsComponent />

            <h1>PropsComponent placed here.</h1>
            <PropsComponent />

            <h1>ConditionalRendering Component placed here.</h1>
            <ConditionalRendering />

            <h1>StylesInReact Component placed here.</h1>
            <StylesInReact />

            <h1>Events Component placed here.</h1>
            <EventsComponent />

        </div>
    );
}

export default MultipleComponents;