import React, {useState} from "react";

function InputArea(props){

    const [inputText, setInput] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInput(newValue);
    }

    return(
        <div className="form">
        <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={() => {
                props.OnAdd(inputText)
                setInput("");
            }}> 
                <span>Add</span>
            </button>
    </div>
    )

   
};

export default InputArea;