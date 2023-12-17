import React from "react";
import "../styles/cardData.css";

function CardData() {
  return (
    <div className="cardDataMain">
      <div className="cardData">
        <p>Sprint Forecast</p>
        <h1>4</h1>
      </div>
      <div className="cardData">
        <p>SP Completed</p>
        <h1>360</h1>
      </div>
      <div className="cardData">
        <p>Overall Progress</p>
        <div className="increaseIconContainer">
          <h1>95%</h1>
          <i
            class="fa fa-caret-up"
            style={{ fontSize: "48px", color: "red" }}></i>
        </div>
      </div>
    </div>
  );
}

export default CardData;
