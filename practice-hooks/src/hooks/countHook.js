import {useState} from "react";

function useCounter (initialCount) {
    const [count, setCount] = useState(initialCount); // 초기값이 0일지 10일지 뭐일지 모르니까 initialCount 사용
    const increment = () => {
        setCount(count+1) // useState 사용할때 값을 변하시켜주는 함수(setCount)는 ()쓰고 그 안에 함수내용을 써주는게 일종의 규칙
    };
    return {count,increment}; // 기능을 만들기 위해서 return 에 ()가 아니라 {}를 쓴거다(오늘6/28 새로 배우는것)
                              // () 안엔 HTML 혹은 () 안에 {}를 써서 자바스크립트 추가하는것(그동안 해왔던것)
}


export default useCounter;
// = export {useCounter};
// 커스텀훅은 export default 할때 useCounter 처럼 use는 소문자 그 이후에 대문자 쓰는게 규칙이다