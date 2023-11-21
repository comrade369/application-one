import PropDrilling3 from "./PropDrilling3";

export default function PropDrilling2({name}) {

    return (
        <>
            <p>PropDrilling2 takes prop and send to PropDrilling3 as prop.</p>
            <PropDrilling3 name={name} />
        </>
    );
}