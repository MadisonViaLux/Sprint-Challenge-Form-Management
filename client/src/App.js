import React from 'react';
import Login from './components/Login'

import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <div>
        <Link to='/api'>Login</Link>
        <Link to='/api/restricted'>Restricted</Link>
      </div>

      <Route exact path='/api' component={Login} />
      {/* <Route exact path='/api/restricted'  /> */}

    </div>
  );
}

export default App;
