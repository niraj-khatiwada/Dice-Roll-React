import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
  render = () => {
    console.log(this.props)
    return (
      <div className={`Dice ${this.props.rolling}`}>
        <i className={`fas fa-dice-${this.props.face}`}></i>
      </div>
    )
  }
}

export default Dice
