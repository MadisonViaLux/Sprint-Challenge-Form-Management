import React from 'react';
import Login from './components/Login'
import Restricted from './components/Restricted'

import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <div>
        <Link to='/api'>Login</Link>
        <Link to='/api/restricted'>Restricted</Link>
      </div>

      <Route exact path='/api' component={Login} />
      <Route exact path="/api/restricted" render={props => {
          const token = localStorage.getItem("token");
          if (!token) {
            return <Redirect to="/" />;
          }
          return <Restricted {...props} />;
        }}
      />

    </div>
  );
}

export default App;
