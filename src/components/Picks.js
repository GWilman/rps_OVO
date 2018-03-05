import React from 'react';

const Picks = ({ playerPick, winner, computerPick }) => {

  return (
    <div className="picks">
      <div>Player: <span id="playerPick">{playerPick}</span></div>
      <div><span id="winner">{winner}</span></div>
      <div>Computer: <span id="computerPick">{computerPick}</span></div>
    </div>
  );

};

export default Picks;
