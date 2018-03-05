import React from 'react';

const Scoreboard = ({ playerScore, computerScore }) => {
  return (
    <div className="scoreboard">
      <div>Player: {playerScore}</div>
      <div>Computer: {computerScore}</div>
    </div>
  );
};

export default Scoreboard;
