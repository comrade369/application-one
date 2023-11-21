import { Data, Data1 } from "./ContextAPIProvider";

export default function ContextAPIConsumer() {

    return (
        <>
            <Data.Consumer>
                {(name) => {
                    return (<><h3>The name prop comes from Data.Provider
                        tag from createContext API, The value passed
                        is: <em>{name}</em>
                    </h3>

                    <Data1.Consumer>
                        {(age) => {
                            return (
                                <h4>The value prop comes from Data1.Provider tag from 
                                    createContext API, The value passed is: <em>{age}</em>
                                </h4>
                            )
                        }}
                    </Data1.Consumer>
                    
                    </>);
                }}
            </Data.Consumer>
        </>
    );

}