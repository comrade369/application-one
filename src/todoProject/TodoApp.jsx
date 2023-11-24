import { useState } from "react";
import "./style.css";


function TodoApp() {

    const [todoList, setTodoList] = useState([]);

    const [input, setInput] = useState("");

    const generateId = () => {
        return Math.floor(Math.random() * 100);
    }


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        setTodoList((todoList) => {
            return (
                todoList.concat({
                    id: generateId(),
                    text: input,
                })
            );
        });

        setInput("");
    }

    const removeTodo = (id) => {
        return (
            setTodoList((todoList) => {
                return (
                    todoList.filter(todo => todo.id !== id)
                );
            })
        );
    }

    return (
        <>
            <div className="container">
                <input 
                    type="text" 
                    value={input}
                    placeholder="New TODO"
                    onChange={handleChange} />

                <button onClick={handleSubmit}>Submit</button>

                <ul className="todos-list">
                    {
                        todoList.map(({id, text}) => {
                            return (
                                <li key={id} className="todo">
                                    <span>{text}</span>
                                    <button className="close" onClick={() => removeTodo(id)}>X</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default TodoApp;