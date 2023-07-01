import React, {useState} from "react";


function Counter () {
    const [count, setCount] = useState(0)
    const onClick = () => {
        setCount(count + 1);
        // setCount((pre) = pre + 1) 과 같다
    };

    return(
    <div>
        <p>카운트: {count}</p>
        <button onClick={onClick}>증가</button>
    </div>
    );
}


export default Counter;

// = export default function Counter () {~~} 이렇게 바로 써버려도 된다