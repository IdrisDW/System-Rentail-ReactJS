import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../styles/app.sass'
import Catalog from './Catalog';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/catalog">
          <Catalog />
        </Route>
      </Router>
    </div>
  );
}

export default App;
