import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NewUser from './users/components/NewUser';

function App (){
  return (
    <Router>
      <Route path='/'>
        <NewUser/>
      </Route>
    </Router>
  )
};

export default App;