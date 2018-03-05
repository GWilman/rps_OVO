import React from 'react';

const Buttons = ({ play, playing }) => {

  return (
    <div className="buttonContainer">
      <button value="Rock" onClick={play} disabled={playing}><i className="fas fa-2x fa-hand-rock"></i></button>
      <button value="Paper" onClick={play} disabled={playing}><i className="fas fa-2x fa-hand-paper"></i></button>
      <button value="Scissors" onClick={play} disabled={playing}><i className="fas fa-2x fa-hand-scissors"></i></button>
    </div>
  );

};

export default Buttons;
