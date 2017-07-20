import React, { Component } from 'react'
import { render } from 'react-dom'
import { } from './styles/global.css'
import Countdown from './countdown'
import Home from './home'
import Room from './room'
import { Switch, Redirect , Route,
  BrowserRouter as Router,
 } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Route path='/C:/Users/quentin.cornevin/Documents/work/focus/app/index.html' component={Home} />
          <Route path='/room' component={Room} />
          </div>
        </Router>
      </div>
    )
  }
}
