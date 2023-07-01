import useCounter from "hooks/countHook";

function UseCount () {
    const {count, increment} = useCounter(100)
    return (
        <>
        <p>카운트 : {count}</p>
        <button onClick={increment}>증가</button>
        </>
    );
}

export default UseCount;

//커스텀 훅을 사용해보자