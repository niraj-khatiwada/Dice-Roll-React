import React, { Component } from 'react'
import './RollDice.css'
import Dice from './Dice'

class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice1: 'one',
      dice2: 'one',
      isRolling: 'Roll',
    }
  }
  static defaultProps = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
  }
  generateRandomDice = () => {
    const randDiceNum = this.props[Math.ceil(Math.random() * 5) + 1]
    const randDiceNum2 = this.props[Math.ceil(Math.random() * 5) + 1]
    this.setState({
      dice1: randDiceNum,
      dice2: randDiceNum2,
      isRolling: 'Rolling',
    })
    setTimeout(() => {
      return this.setState({ isRolling: 'Roll' })
    }, 200)
  }

  render = () => {
    return (
      <div className="RollDice">
        <div className="RollDice-Grid">
          <Dice face={this.state.dice1} rolling={this.state.isRolling} />
          <Dice face={this.state.dice2} rolling={this.state.isRolling} />
        </div>
        <div>
          <button
            className={`RollDice-Roll-Button ${this.state.isRolling}-btn`}
            onClick={this.generateRandomDice}
          >
            {this.state.isRolling}
          </button>
        </div>
      </div>
    )
  }
}

export default RollDice
