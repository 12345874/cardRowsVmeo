import React from "react";
import "./Carousel.css";

const Carousel = ({ cards }) => {
  const numCards = cards.length;

  return (
    <div className="carousel">
      <div
        className={`card-container ${numCards % 2 !== 0 ? "odd-length" : ""}`}
      >
        {cards.map((card, index) => (
          <div key={index} className="card">
            {/* Render content for each card */}
            <div>{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
