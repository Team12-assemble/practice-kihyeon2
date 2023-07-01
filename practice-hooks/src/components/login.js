import { useForm } from "hooks/useForm";

function Login () {
    const {values, handleChange, resetForm} = useForm({username: "", password: "",});

    const handleSubmit = e => {
        e.preventDefault();
        console.log("로그인 데이터", values)
        resetForm();
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <div>
                <label>사용자명:</label>
                <input 
                    type="text" 
                    placeholder="아이디" 
                    name="username" 
                    value={values.username}  // values.username도 상관없나? 이렇게 써야 맞다 > 위에서 username:"" 이렇게 정의했으니까
                    onChange={handleChange} />
                <label>비밀번호:</label>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="비밀번호" 
                    value={values.password} 
                    onChange={handleChange} />
            </div>
            <button type="submit">로그인</button>
        </form>
        
    );
}

export default Login;