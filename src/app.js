import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

import Picks from './components/Picks';
import Buttons from './components/Buttons';
import Scoreboard from './components/Scoreboard';

class App extends Component {

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
      winner: 'Choose wisely',
      playing: false,
      playerScore: 0,
      computerScore: 0
    };

  }

  play(e) {
    // update player pick, disable buttons and clear winner text
    this.setState({ playerPick: e.target.value, playing: true, winner: null, computerPick: null });

    // implement delay to simulate computer choosing
    setTimeout(this.checkWin.bind(this), 800);
  }

  checkWin() {
    // set random computer pick
    this.setState({ computerPick: this.state.choices[Math.floor(Math.random() * 3)] });

    // use the winConditions object to determine if the user pick beats the computer
    if (this.state.playerPick === this.state.computerPick) {
      // declare tie
      this.setState({ winner: 'It\'s a tie!'});
    } else if (this.state.winConditions[this.state.playerPick] === this.state.computerPick) {
      // declare win and increase score
      this.setState({
        winner: 'You win!',
        playerScore: this.state.playerScore + 1
      });
    } else {
      // declare loss and increase score
      this.setState({
        winner: 'You lost!',
        computerScore: this.state.computerScore + 1
      });
    }

    this.setState({ playing: false });
  }

  reset() {
    this.setState({
      playerPick: null,
      computerPick: null,
      winner: 'Choose wisely',
      playing: false,
      playerScore: 0,
      computerScore: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Rock-Paper-Scissors</h1>
        <main>
          <div className="gameboard">
            <Picks
              playerPick={this.state.playerPick}
              winner={this.state.winner}
              computerPick={this.state.computerPick}
            />
            <Buttons
              play={this.play.bind(this)}
              playing={this.state.playing}
            />
            <Scoreboard
              playerScore={this.state.playerScore}
              computerScore={this.state.computerScore}
              reset={this.reset.bind(this)}
            />
          </div>
        </main>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
