import React, { useState } from "react";

import CarouselControl from "./carousel-control.component";
import CarouselIndicators from "./carousel-indicators.component";

const ItemCarousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const next = () => {
    if (currentItem < items.length - 1) {
      setCurrentItem(currentItem + 1);
    }
  };

  const prev = () => {
    if (currentItem !== 0) {
      setCurrentItem(currentItem - 1);
    }
  };

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <CarouselIndicators
          active={currentItem}
          length={items.length}
          slideTo={setCurrentItem}
        ></CarouselIndicators>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={items[currentItem].imgUrl} className="d-block w-100" />
          </div>
        </div>
        <CarouselControl onNext={next} onPrev={prev} />
      </div>
    </>
  );
};

export default ItemCarousel;
