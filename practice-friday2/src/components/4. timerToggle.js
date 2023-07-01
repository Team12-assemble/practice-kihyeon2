import React, {useState} from "react"
import Timer from "./2. timer"

export default function ToggleTimer () {
    const [showTimer, setShowTimer] = useState(true);

    const handleToggleTimer = () => {
        setShowTimer((prev) => !prev);
    };
   
    return (
        <div>
            {showTimer && <Timer />}
            {/* && 대신 ||을 써도 위에선 크게 달라질게 없다 > 그리고냐 또는이냐 가 중요한게 아니라 앞의 조건식(showTimer)이 참이냐 아니냐가 중요 */}
            {/* 추가로 showTimer && <Timer />> 주위에 {}로 묶은건 리액트의 문법(이렇게 중괄호로 써야 렌더링된다) */}
            <button onClick={handleToggleTimer}>
                {showTimer ? "Hide Timer" : "Show Timer"}
            </button>
        </div>
    )
}

//이거 전체적인 로직(각각의 의미도) 설명 따로 다시 듣자
// {showTimer && <Timer />} > 이부분은 참이면 화면에 나타나고 거짓이면 사라지는 로직? 이전에 && || 이런거 할떄 같이 배운개념이라 했으니 복습해보자
// 모르겠으면 콘솔을 찍어보면 된다고 하심
// {}를 쓴건 자바스크립트 문법으로 불러오기 위해 쓴것



// import React, {useState,useEffect} from "react"

// export default function TimerUpdate () {
//     const [seconds,setSeconds] = useState(0) 

//     useEffect (() => {
//         const timerUpdate = setInterval(() => {
//             setSeconds((prev) => prev+1)
//         },1000);

//         return (()=> {
//             console.log("리턴되었습니다.")
//             clearInterval(timerUpdate)
//         })
//     },[])

//     function HideBar () {
//         clearInterval(timerUpdate)
//         resetNumber = () => {
            
//         }
//     }

//     function showBar () {

//     }

//     return (
//         <div>
//             <p>초 : {seconds}</p>
//             <button onClick={HideBar}>Hide Timer</button>
//             <button onClick={showBar}>Show Timer</button>
//         </div>
//     )
// }


//hide누르면 마운트가 언마운트가 되고 show 누르면 다시 언마운트가 마운트가 되고



// 아래는 GPT가 짜준 코드
// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [count, setCount] = useState(0);
//   const [isHidden, setIsHidden] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const resetTimer = () => {
//     setCount(0);
//   };

//   const toggleVisibility = () => {
//     setIsHidden((prevState) => !prevState);
//   };

//   return (
//     <div>
//       {!isHidden && (
//         <div>
//           <h1>Timer Example</h1>
//           <p>{count}</p>
//           <button onClick={resetTimer}>Reset</button>
//           <button onClick={toggleVisibility}>Hide</button>
//         </div>
//       )}
//       {isHidden && (
//         <div>
//           <button onClick={toggleVisibility}>Show</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Timer;