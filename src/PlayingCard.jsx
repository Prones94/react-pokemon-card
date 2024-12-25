import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, setIsFacingUp] = useFlip();

  return (
    <div onClick={flipCard} className="PlayingCard Card">
      {isFacingUp ? (
        <img src={front} alt="playing card front" />
      ) : (
        <div className="PlayingCard-back" />
      )}
    </div>
  );
}

export default PlayingCard;
