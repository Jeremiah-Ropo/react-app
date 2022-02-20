import React, {useState} from 'react';
import TodoItems from './todoItem';
import Header from './Header';

function App(){
    const [inputText, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItems(){
        setItems(prevItems => {
            return [...prevItems, inputText ]
        });
        setInput("");
    }


    function handleChange(event){
        const newValue = event.target.value;
        setInput(newValue);
    }

    function deleteitems(id){
        setItems(prevItems =>{
            return prevItems.filter((item, index)=>{
                return index !== id 
            })
        })
    }

    return (
        <div className="container">
            <div className="heading">
              <Header />
            </div>
            <div className="form">
                <input type="text" onChange={handleChange} value={inputText}/>
                <button onClick={addItems}>
                    <span>Add</span>
                </button>
            </div>
            <div>
            <ul>
                {items.map((todoItems, index) => 
                <TodoItems
                    key={index}
                    id={index}
                    onChecked ={deleteitems}
                    item={todoItems}
                />)}
             </ul>
            </div>

        </div>

    )
};

export default App; 