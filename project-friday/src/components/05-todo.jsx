import React from "react";

function TodoList(props) {
    console.log(props);
    const todos = props.todos
    return(
        <ul>
        {todos.map((item) => (
            <li>{item.text}</li>
        ))}
        </ul>
    );
}

function Practice05() {
    const todos = [
        {id: 1, text: "할일 목록1"},
        {id: 2, text: "할일 목록2"},
        {id: 3, text: "할일 목록3"},
        {id: 4, text: "할일 목록4"},
    ];



    return <TodoList todos={todos} />;
}

export default Practice05;


// map으로 반복문 돌려서 새로운 배열 만들어주는것
// item이란 값 말고 다른게 들어가도 된다