import React from 'react';
import '../styles/app.sass'
import Catalog from './Catalog';
import NotFound from './NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/catalog" component={Catalog} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router> 
    </div>
  );
}

export default App;
