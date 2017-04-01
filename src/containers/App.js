import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Login from '../containers/Login'
import FixMe from '../containers/FixMe'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' component={FixMe}/>
        </div>
      </Router>
    )
  }
}

export default App
