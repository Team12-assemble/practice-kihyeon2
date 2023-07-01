import {useState} from "react";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues((prevValues) => ({...prevValues, [name]: value})); // setValues는 ...을 항상 쓰는거다(이전값을 저장시키기 위해)
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return{values, handleChange, resetForm};
};

export {useForm};







// 1. ... 이 말하는 이전값이 무엇인가요? 모든 키값 및 값들을 의미한다
// 4. const 함수명 = () => {return ~~} 이렇게 쓰는 식이었는데 setValues((x) => ({})) 이게 규칙?  >>  ({}) 여기서 {}는 객체의 중괄호를 의미 + return 뺴기위해 ()이걸 쓴거다
// 5. resetForm은 입력된 값을 없애주는 의미? ㅇㅇ