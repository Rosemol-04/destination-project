 

import React from "react";
import "./Slider.css";
import leftArrow from "C:/Users/acer/destination-project/src/components/Slider/icons/left-arrow.svg"
import rightArrow from "C:/Users/acer/destination-project/src/components/Slider/icons/right-arrow.svg"
function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
 export default BtnSlider;
