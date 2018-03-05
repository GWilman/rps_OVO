import React from 'react';

const Scoreboard = ({ playerScore, computerScore, reset }) => {
  return (
    <div className="scoreboard">
      <div>
        <p>Player</p>
        <p>{playerScore}</p>
      </div>
      <button onClick={reset}>Reset</button>
      <div>
        <p>Computer</p>
        <p>{computerScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
