import React, { Component } from 'react'

import './App.css'

import Dice from './Dice'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dice />
        <Dice />
      </div>
    )
  }
}

export default App