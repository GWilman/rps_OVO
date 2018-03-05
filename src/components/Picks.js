import React from 'react';

const Picks = ({ playerPick, winner, computerPick }) => {

  return (
    <div className="picks">
      <div>
        <p>Player:</p>
        <p>{playerPick}</p>
      </div>
      <div><span id="winner">{winner}</span></div>
      <div>
        <p>Computer:</p>
        <p>{computerPick}</p>
      </div>
    </div>
  );

};

export default Picks;
