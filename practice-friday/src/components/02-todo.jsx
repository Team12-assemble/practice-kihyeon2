import React, {useState} from "react";

function TodoApp () {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (event) => {
        console.log(event);
        console.log(event.target.value);
        setNewTodo(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault ();
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    return (
        <div>
            <h1>할일 목록</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={newTodo} onChange={handleInputChange} />
                <button type="submit">추가</button>
            </form>
            <ul>
                {console.log("todos == ", todos)}
                {todos.map((todo,index) => (
                    
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;