import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
  static defaultProps = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
  }

  generateRandomDice = () => {
    let randDiceNum = Math.ceil(Math.random() * 5) + 1
    if (randDiceNum !== 0) {
      return this.props[randDiceNum]
    } else {
      this.generateRandomDice()
    }
  }
  render = () => {
    return (
      <div className="Dice">
        <i className={`fas fa-dice-${this.generateRandomDice()}`}></i>
      </div>
    )
  }
}

export default Dice
