import Expressions from "./Expressions";
import Fragments from "./Fragments";
import ListsComponent from "./ListsComponent";
import PropsComponent from "./PropsComponent";
import ConditionalRendering from "./ConditionalRendering";
import StylesInReact from "./SytlesInReact";
import EventsComponent from "./Events";
import UseStateHook from "./UseStateHook";
import Forms from "./Forms";
import UseEffectHook from "./UseEffectHook";
import PropDrilling1 from "./PropDrilling1";
import ContextAPIProvider from "./ContextAPIProvider";
import UseContextHookProvider from "./UseContextHookProvider";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";
import CustomHook from "./CustomHook";

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

            <h1>UseStateHook Component placed here.</h1>
            <UseStateHook />

            <h1>Forms Component placed here.</h1>
            <Forms />

            <h1>UseEffectHook Component placed here.</h1>
            <UseEffectHook />

            <h1>PopDrilling1 Component placed here with a prop.</h1>
            <PropDrilling1 name="Prince Vegeta" />

            <h1>ContextAPIProvider Component placed here.</h1>
            <ContextAPIProvider />

            <h1>UseContextProvider Component placed here.</h1>
            <UseContextHookProvider />

            <h1>UseReducerHook Component placed here.</h1>
            <UseReducerHook />

            <h1>UseRefHook Component placed here.</h1>
            <UseRefHook />

            <h1>CustomHook Component placed here.</h1>
            <CustomHook />


        </div>
    );
}

export default MultipleComponents;