import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

const Routes = () => (
  <Router>
    <Route exact path={process.env.PUBLIC_URL + '/'}
      component={Home} 
    />
  </Router>
)

export default Routes
