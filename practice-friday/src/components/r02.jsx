import React, {useState} from "react";

function Todo2App () {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault ();
        setTodos([...todos, newTodo]);
        // ...은 기존 리스트를 유지하기 위해 입력해준다
        setNewTodo(newTodo)
        // 위 (newTodo)에 빈칸("")을 넣어야 리스트 추가할떄 input의 value값이 블랭크된 상태로 바뀐다
    }

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <h1>할일 목록</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange} value={newTodo} />
                <button type="submit">추가</button>
            </form>
            <ul>
                {todos.map((todos, index) => (
                    <li key={index}>{todos}</li>
                    // key는 값에 대한 하나의 id와 유사하다. 하나의 key당 하나의 값을 주기위해 사용함
                    //index는 item이나 아무런 값으로 바꿔도 상관없다
                ))}
            </ul>
        </div>
    )
}

export default Todo2App;