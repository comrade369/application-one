// 5 types of styles in react we use.

function StylesInReact() {

    const styles = {
        color: "red",
        backgroundColor: "black",
    }

    return (
        <>
            <h1 style={{color: "orange", backgroundColor: "#ccc"}}>First is Inline Styling, Which is Style tag using style attribute,
                and Passes object in style attribute.
            </h1>

            <h1 style={styles}>Second is creating object of css attributes as key value pair,
                and applying in style attribute of a tag.
            </h1>

            <h1 id="third-style">Third is creating a css file as usual and import it.</h1>

            <h1>Fourth is installing Bootstrap in react using npm.</h1>

            <h1>Fifth is installing Tailwind CSS in react using npm.</h1>
        </>
    );
}

export default StylesInReact;