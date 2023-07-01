import React, {useState,useEffect} from "react"
import io from "socket.io-client"

const socket = io("http://localhost:3001")

function Chat () {
    const [username, setUsername] = useState("")
    const [messages, setMessages] = useState([]) // 메세지는 계속 리스트형태로 쌓일거니까 배열 이용
    const [inputValue, setInputValue] = useState("")

    useEffect (() => {
        socket.on("message", handleMessage)
        return () => {
            socket.off("message", handleMessage)
        }
    })

    const handleMessage = (message) => {
        setMessages((prev) => [...prev, message])
    }

    const handleMessageSubmit = () => {
        if (inputValue.trim() !== ""){
            const currentTime = new Date().toLocaleDateString()
            socket.emit("message", {
                username,
                content: inputValue,
                time: currentTime
            })
            setInputValue("") // 메세지 전송하면서 inputValue를 비워주는 코드
        }
    }
    
    return(
        <div>
            <h1>실시간 채팅</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="사용자 이름을 입력하세요." />
            <h1>채팅</h1>
            <div>
                {messages.map((messages, index) => {
                    return (
                    <p key={index}>
                        {messages.username} : {messages.content} - {messages.time}
                    </p> // map 이용할떈 항 상 key값 넣어줘야한다
                )})}
            </div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <button onClick={handleMessageSubmit}>전송</button>

        </div>
    );
}

export default Chat;