// Handling lists in react.
const myList = ["Lord Hanuman", "Lord Shiva", "Goddess Saraswathi"];

const userInfo = [
    {name: "Monkey D.Luffy", anime: "One Piece", goal: "King of Pirates"},
    {name: "Naruto Uzamaki", anime: "Naruto", goal: "Hokage"},
    {name: "Son Goku", anime: "Dragon Ball Z", goal: "Strong fighter in universe"},
];

function ListsComponent() {
    // list render using map function in react.
    
    return (
        <>
            <h2>The Gods I worship:</h2>
            {myList.map((listItem) => (
                <ul key={Math.random() * 10}>
                    <li>{listItem}</li>
                </ul>
            ))}

            <h2>Main Protagonists Goals in Anime:</h2>
            {userInfo.map((userObj, index) => (
                <ul key={index}>
                    <li>Name: {userObj.name}</li>
                    <li>Anime: {userObj.anime}</li>
                    <li>Goal: <strong>{userObj.goal}</strong></li>
                </ul>
            ))}
        </>
    );
}

export default ListsComponent;