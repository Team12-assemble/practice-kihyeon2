import React, { useState } from "react";

function Counter () {
    const[count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count+1)
    }
    return (
        <div>
            <p>값 : {count}</p>
            <button onClick={increment}>+1</button>
        </div>
    )
}

export default Counter