// Destructering props in react

function PropsChildComponent({name, img, mythology, book}) {
    
    return (
        <>
            <img src={img} alt={name} />
            <h1>Name: <strong>{name}</strong></h1>
            <h2>Mythology: <strong>{mythology}</strong></h2>
            <h3>Sacred Book: <strong>{book}</strong></h3>
        </>
    );
}

export default PropsChildComponent;