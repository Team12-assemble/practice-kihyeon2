import React, {useState, useEffect} from "react";

export default function Timer () {
    const [ seconds, setSeconds ] = useState(0);

    useEffect ( () => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev +1)
        }, 1000);

        return () => {
            console.log("리턴되었습니다."); // 콘솔 찍으니 시작과 동시에 클리어 되고 다시 올라감
            clearInterval(timer);
        }
    }, [])
    // return부터 clearInterval까지 의미 여쭤보자
    // 왜 리턴되었습니다는 계속 쌓이지 않는건지? >  setInterval은 1000); 까지만 계속 반복하게 만들어 주는거라 리턴되었습니다는 딱 한번만 실행된다.
    // return부터 clearInterval은 사실 안써도 되긴한다

    //타이머라는 함수형컴포넌트가 마운트 될때 한번 타이머가 실행
    //언제 클리어가 되서 언마운트가 되는지를 보여주고 싶은것
    //컴포넌트를 연결하든 데이터를 관리하든 다 같은 원리

    return (
        <div>
            <p>초 : {seconds}</p>
        </div>
    );
}