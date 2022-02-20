import React, {useState} from "react";

function InputArea(props){

    const [inputText, setInput] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInput(newValue);
    }

    <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
                <button onClick={() => {
                    props.add(inputText)
                    setInput("");
                }}>
                    <span>Add</span>
                </button>
    </div>
   
};

export default InputArea;