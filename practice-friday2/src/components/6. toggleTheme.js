import React, {useReducer} from "react";

const initialState = {
    theme : "light"
}

const reducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_THEME":
            return {
                ...state, //원래 있는 값 받아오게끔 ...state 기입
                theme: state.theme === "light" ? "dark" : "light"
            }
        default:
            return state;
    }
}

const ThemeSwitcher = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Current Theme: {state.theme}</p>
            <button onClick={() => dispatch({type: "TOGGLE_THEME"})}>Toggle(색상변경)
            </button>
        </div>
    )
}

export default ThemeSwitcher