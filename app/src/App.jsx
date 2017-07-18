import React, { Component } from 'react'
import { render } from 'react-dom'
import { } from './styles/global.css'
/* import Countdown from './components/Countdown.js */
import Countdown from './countdown'


export default class App extends Component {
  render() {
    return (
      <div>
        <Countdown initialCount={1500} />
      </div>
    )
  }
}
