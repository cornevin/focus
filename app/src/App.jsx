import React, { Component } from 'react'
import { render } from 'react-dom'
import { } from './styles/global.css'
import Countdown from './countdown'
import Home from './home'
import { Switch, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route default path='/' component={Home} />
          <Route exact path='/room' component={Countdown} />
        </Switch>
      </div>
    )
  }
}
