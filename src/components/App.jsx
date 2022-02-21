import React from 'react';
import Header from "./Header.jsx";
import CreateArea from './CreateArea.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';

function App(){
    return (
        <div>
            <Header />
            <CreateArea />
            <Note key={1} title="Note title" content="Note content"/>
            <Footer />
        </div>
    )
}


export default App; 