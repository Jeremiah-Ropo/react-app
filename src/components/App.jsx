import React, {useState} from 'react';
import TodoItems from './todoItem';
import Header from './Header';
import InputArea from './inputText';

function App(){
    const [items, setItems] = useState([]);

    function addItems(inputText){
        setItems(prevItems => {
            return [...prevItems, inputText ]
        });
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

            <InputArea OnAdd={addItems}/>
            
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