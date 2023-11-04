// import './App.css';
import FunctionalComponent from "./Components/FunctionalComponent";
import {ClassComponent, AnotherClassComponent} from "./Components/ClassComponent";


function App() {
  return (
    <div>
    <h1>Hello, Welcome to application-one</h1>
    <h1>This is about Components in ReactJS</h1>
    <FunctionalComponent />
    <ClassComponent />
    <AnotherClassComponent />
    </div>
  );
}

export default App;
