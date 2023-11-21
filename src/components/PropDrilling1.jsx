import PropDrilling2 from "./PropDrilling2";

function PropDrilling1({name}) {

    return (
        <>
            <p>PropDrilling1 take prop and send to PropDrilling2 as Prop.</p>
            <PropDrilling2 name={name} />
            
        </>
    );
}

export default PropDrilling1;