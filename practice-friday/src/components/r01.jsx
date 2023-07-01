import React, {useState} from "react"

function AuthApp2 () {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleUsernameChange = (event) => {
    console.log(event);
    console.log(event.target.value);
    setUsername (event.target.value);
};

const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
};

const handleFormSubmit = (event) => {
    event.preventDefault (event);
    if (username === "admin" && password === "password") {
        setIsLoggedIn(true);
    }
};
// event 가 함수 안에서 필요할때만 ()안에 event를 넣어주면 된다

const handleLogout = () => {
    console.log();
    setIsLoggedIn(false);
}
// 함수 안에 event가 사용되지 않아서 ()안에 event 생략

    if (isLoggedIn) {
        return (
        <div>
            <h1>로그인 성공!</h1>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
} else {
    return (
    <div>
        <h1>로그인</h1>
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                value={username}
                placeholder="사용자명" 
                onChange={handleUsernameChange} 
            />
            <input 
                type="text"
                value={password}
                placeholder="패스워드"
                onChange={handlePasswordChange} 
            />
            <button type="submit">로그인</button>
        </form>
    </div>
    )
}
}

export default AuthApp2;