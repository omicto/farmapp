import React from "react";
import PropTypes from "prop-types";

const CarouselControlButton = ({ next, onClick }) => {
  const action = next ? "next" : "prev";
  return (
    <a
      className={`carousel-control-${action}`}
      href="#carouselExampleFade"
      role="button"
      data-slide={action}
      onClick = {onClick}
    >
      <span className={`carousel-control-${action}-icon`} aria-hidden="true"></span>
      <span className="sr-only">{action}</span>
    </a>
  );
};

const CarouselControl = ({ onPrev, onNext }) => (
  <>
    <CarouselControlButton onClick={onPrev} />
    <CarouselControlButton next onClick={onNext} />
  </>
);

CarouselControl.propTypes = {
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired
}

export default CarouselControl;
