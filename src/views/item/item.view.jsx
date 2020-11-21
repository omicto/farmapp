import React from "react";
import ItemCarousel from "../../components/item-carousel/item-carousel.component";

const ItemView = () => {
  const images = [
    "https://via.placeholder.com/149",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/151",
  ];
  return (
    <div >
      <ItemCarousel images={images}></ItemCarousel>
    </div>
  );
};

export default ItemView;
