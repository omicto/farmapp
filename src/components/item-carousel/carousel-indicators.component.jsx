import React from "react";

const getIndicators = (n, active, slideTo) => {
  const indicators = [];
  for (let i = 0; i < n; i++) {
    indicators.push(
      <li
        key={i}
        onClick={() => slideTo(i)}
        className={i === active ? "active" : ""}
      ></li>
    );
  }
  return indicators;
};

const CarouselIndicators = ({ length, active, slideTo }) => (
  <ol className="carousel-indicators">
    {getIndicators(length, active, slideTo)}
  </ol>
);

export default CarouselIndicators;
