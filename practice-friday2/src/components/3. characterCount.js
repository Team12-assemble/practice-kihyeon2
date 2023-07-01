import React, {useState,useEffect} from "react";

export default function CharacterCount () {
    const [text, setText] = useState("")
    const [charCount, setCharCount] = useState(0);

    // useEffect (()=> {
    //     const counter = onchange (() => {
    //         setCount((prev) => prev +1)
    //     }, event)
    // },text)

    useEffect(() => {
        setCharCount(text.length);
    }, [text]);

    const handleTextChange = e => {
        setText(e.target.value);
    };

    return (
        <div>
            <textarea value={text} onChange={handleTextChange} />
            <p>Character Count: {charCount}</p>
        </div>
    )
}


//1. textarea
//2. 카운트하는 부분

// 이해안되면 꼭 다시 물어봐라(강사님이든 멘토님이든)