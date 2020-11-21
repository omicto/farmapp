import React from "react";
import ItemCarousel from "../../components/item-carousel/item-carousel.component";

const ItemView = () => {
  const images = [
    {imgUrl : "https://via.placeholder.com/149"},
    {imgUrl : "https://via.placeholder.com/150"},
    {imgUrl : "https://via.placeholder.com/151"},
  ];
  return (
    <div >
      <ItemCarousel items={images}></ItemCarousel>
    </div>
  );
};

export default ItemView;
