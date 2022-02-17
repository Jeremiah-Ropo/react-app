import React, {useState} from 'react';

function App(){
    const [inputText, setInput] = useState("");
    const [items, setItems] = useState([]);


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text"/>
                <button >
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
             
                </ul>
            </div>
        </div>

    )
};

export default App; 