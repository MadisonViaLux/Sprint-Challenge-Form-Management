import React from 'react';
import Login from './components/Login'
import Restricted from './components/Restricted'
import{ useLocalStorage }from './components/useLocalStorage'

import {Route, Link, Redirect} from 'react-router-dom'


function App() {
  const [storedToken, setStoredToken] = useLocalStorage("token")
  return (
    <div className="App">

      <div>
        <Link to='/api'>Login</Link>
        <br/>
        <Link to='/api/restricted/data'>Restricted</Link>
      </div>

      <Route exact path='/api' render={props => {
       
       
       return <Login {...props} setStoredToken={setStoredToken} />
      }} />

      
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
