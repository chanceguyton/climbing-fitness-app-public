import React, {useState} from "react"

function TextInputBox({type, placeholder, externalChange, index}) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const input = e.target.value;
        setValue(e.target.value);
        externalChange(index, input);
    }


    return (
        <input 
        value={value} 
        type={type} 
        placeholder={placeholder} 
        onChange={handleChange}>
        </input>
    );
}
export default TextInputBox;