import React from 'react';
import Login from './components/Login'

import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <div>
        <Link to='/'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>

      <Route exact path='/' component={Login} />
      <Route exact path='/register'  />

    </div>
  );
}

export default App;
