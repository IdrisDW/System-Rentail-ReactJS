import React, { useState, useEffect } from 'react';
import '../styles/app.sass'
import PrimarySearchAppBar from './PrimarySearchAppBar'
import Catalog from './Catalog';
import DetailsPublication from './DetailsPublication';
import NotFound from './NotFound'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useHistory } from "react-router-dom";

function App() {

  const [ publications, setPublications ] = useState([]);
  const [ loading, setLoading ] = useState(null);
  const [ search, setSearch ] = useState(null)

//   useEffect(() => {
//     const getPublications = async (url) => {
//         setLoading(true)
//         const request = await fetch(url)
//         if (request.status === 200) {
//           const jsonRequest = await request.json()
//               setLoading(false)
//               setSearch(search)
//               setPublications(jsonRequest)
//       } else {
//           setSearch(null)
//           setLoading(false)
//           setPublications([])
//       }
//     }

//     getPublications('https://income-system.herokuapp.com/publications')

// },[])

  const searchPublications = async (url_search, search) => {
    setLoading(true)
    const request = await fetch(url_search)
    if (request.status === 200) {
        const jsonRequest = await request.json()
            setLoading(false)
            setSearch(search)
            setPublications(jsonRequest)
    } else {
        setSearch(null)
        setLoading(false)
        setPublications([])
    }
}

  return (
    <div className="App">
      <PrimarySearchAppBar searchPublications={searchPublications}/>
      <Router>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/catalog_search=/:title?" component={Catalog} />
          <Route exact path="/catalog_category=/:category?" component={Catalog} />
          <Route exact path="/catalog_sector=/:sector?" component={Catalog} />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/detail-publication">
            <DetailsPublication />
          </Route>
          <Route path="" component={NotFound} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
