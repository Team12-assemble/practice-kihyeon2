import React, {useState} from "react";


function AuthApp () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUsernameChange = (event) => {
        console.log(event)
        console.log(event.target.value)
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault ();
        //사용자 인증 로직
        if (username === "admin" && password === "password") {
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

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
                <form onSubmit = {handleFormSubmit}>
                    <input 
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder = "사용자명"
                    />
                    <input 
                        type="text"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder = "비밀번호" 
                    />
                    <button type="submit">로그인</button>
                </form>
            </div>
        )
    };
}

export default AuthApp;