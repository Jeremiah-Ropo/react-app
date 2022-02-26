
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NewUser from './users/components/pages/NewUser';
import NewPlace from './place/NewPlace';
import MainNav from './users/components/Navigation/MainNav';

function App (){
  return(
      <div>
      <Router>
      <MainNav/>
      <main>
      <Routes>
          <Route path="/" element={<NewUser/>} />
          <Route path='/place/new' element={<NewPlace/>}/>
        </Routes>
      </main>
      </Router>
        
      </div>
      
    
  ) 
};

export default App;