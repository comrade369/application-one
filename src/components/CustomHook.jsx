import UseFetchCustomHook from "./UseFetchCustomHook";

export default function CustomHook() {

    const [data] = UseFetchCustomHook("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            <ul>
                {data && data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            
        </>
    );
}