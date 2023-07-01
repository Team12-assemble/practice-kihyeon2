import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?query=${search}`)
    }
    // form의 onSubmit에선 event.preventDefault(새로고침 막아주는것)가 필수라고 보며됌

    const onChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value)
    };


    return (
        <div>
            <h1>about</h1>
            <form onSubmit={onSubmit}>
                <input placeholder="여행가고 싶은 지역" type="text" value={search} onChange={onChange} />
                <button type="submit">검색</button>
            </form>
        </div>
    );
};

export default About;