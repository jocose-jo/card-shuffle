import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";

function Card({index, onDelete, ...props}) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prevFlipped) => !prevFlipped);
  };

  return (
    <div className="wrapper">
      <ReactCardFlip isFlipped={flipped}>
        <div className="card-container front" onClick={handleClick}>
          <div className="card-text">{props.text}</div>
        </div>
        <div className="card-container back" onClick={handleClick}>
          <div className="card-text">Back of Card</div>
        </div>
      </ReactCardFlip>
      <div className="delete-button" onClick={() => onDelete(index)}>-</div>
    </div>
  );
}

export default Card;
