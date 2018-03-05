import React, { Component } from 'react';

class Gameboard extends Component {

  constructor() {
    super();

    // setting win conditions in state along with user + computer picks
    this.state = {
      winConditions: {
        Rock: 'Scissors',
        Scissors: 'Paper',
        Paper: 'Rock'
      },
      choices: ['Rock', 'Paper', 'Scissors'],
      playerPick: null,
      computerPick: null,
      winner: null,
      playing: false
    };

  }

  play(e) {
    // disable buttons and clear winner text
    this.setState({ playing: true, winner: null, computerPick: null });

    // update player pick from button value
    this.setState({ playerPick: e.target.value });

    //
    setTimeout(() => {

      // set random computer pick
      this.setState({ computerPick: this.state.choices[Math.floor(Math.random() * 3)] });

      // use the winConditions object to determine if the user pick beats the computer
      if (this.state.playerPick === this.state.computerPick) {
        this.setState({ winner: 'It\'s a tie!'});
      } else if (this.state.winConditions[this.state.playerPick] === this.state.computerPick) {
        this.setState({ winner: 'You win!'});
      } else {
        this.setState({ winner: 'You lost!'});
      }

      this.setState({ playing: false });

    }, 1000);

  }

  render() {
    return (
      <div className="gameboard">
        <div className="picks">
          <div>Player: <span id="playerPick">{this.state.playerPick}</span></div>
          <div><span id="winner">{this.state.winner}</span></div>
          <div>Computer: <span id="computerPick">{this.state.computerPick}</span></div>
        </div>
        <div className="buttonContainer">
          <button value="Rock" onClick={this.play.bind(this)} disabled={this.state.playing}>Rock</button>
          <button value="Paper" onClick={this.play.bind(this)} disabled={this.state.playing}>Paper</button>
          <button value="Scissors" onClick={this.play.bind(this)} disabled={this.state.playing}>Scissors</button>
        </div>
      </div>
    );
  }

}

export default Gameboard;
