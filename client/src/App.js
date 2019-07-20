import React from 'react';
import Login from './components/Login'
import Restricted from './components/Restricted'

import {Route, Link, Redirect} from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <div>
        <Link to='/api'>Login</Link>
        <br/>
        <Link to='/api/restricted/data'>Restricted</Link>
      </div>

      <Route exact path='/api' component={Login} />

      
      <Route exact path="/api/restricted/data" render={props => {
          const token = localStorage.getItem("token");
          if (!token) {
            console.log("you've been rejected")
            return <Redirect to="/" />;
          }
          return <Restricted {...props} />;
        }}
      />

    </div>
  );
}

export default App;
