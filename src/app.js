import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <main>
          <Gameboard props={this.state} />
          <Scoreboard />
        </main>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
