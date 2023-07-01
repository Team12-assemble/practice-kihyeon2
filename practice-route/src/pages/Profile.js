import React from "react"
import { useNavigate, useParams } from "react-router-dom"

const ProfileData = {
    donghun : {
        id: 1,
        name: "정동훈",
        description: "리액트 강의를 담당하고 있는 사람입니다."
    },

    henry : {
        id: 2,
        name: "기현",
        description: "리액트를 배우고 있는 사람입니다."
    }
};

const Profile = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    const profile = ProfileData[username]

    // console.log(username);
    // console.log(useParams());
    // console.log(useNavigate());
    console.log(profile)

    return (
        <div>
            <h3>{profile.name}: ({username})이 무엇을 하는 사람일까요?</h3>
            <p>{profile.description}</p>
            <div onClick={() => navigate(-1)}>뒤로가기</div>
        </div>
    );
};

export default Profile;