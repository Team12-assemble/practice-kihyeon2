import React, {useReducer} from "react"

const initialState = 0

const reducer = (state,action) => {
    console.log(action)
    switch (action) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return initialState
        default:
            return state
    }
}

const CountReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState) //initialState에 그냥 0 넣고 하면 안되나? > 상관은 없다. 나중에 유지보수를 편리하게 하기위해 변수 지정한것

    return (
        <div>
            <h1>숫자세기</h1>
            <p>값 : {count}</p>
            <button onClick={() => dispatch('INCREMENT')}>증가</button>
            {/* string으로 입력 */}
            <button onClick={() => dispatch({ type: "DECREMENT"})}>감소</button>
            {/* 객체로 입력(중괄호는 객체의 값중 하나를 의미) */}
            <button onClick={() => dispatch({ type: "RESET"})}>리셋</button>
        </div>
    )
}

export default CountReducer;