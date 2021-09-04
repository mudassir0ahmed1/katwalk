import React, { useRef } from "react";
import Card from "./Card";
import chevron_left from "../../assets/imgs/left_chevron.svg";
import chevron_right from "../../assets/imgs/right_chevron.svg";
import { useState } from "react";

const CardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carousel = useRef();
  const slideLeft = () => {
    let width = window.innerWidth;
    let scrolled = carousel.current.scrollLeft;
    carousel.current.scrollTo(scrolled - width, 0);
  };
  const slideRight = () => {
    let width = window.innerWidth;
    let scrolled = carousel.current.scrollLeft;
    carousel.current.scrollTo(width + scrolled, 0);
  };
  return (
    <div className='GRIDCARDS'>
      <h4>What's New In Products</h4>
      <img
        className="card_carousel_chevron card_carousel_chevron_left"
        onClick={slideLeft}
        src={chevron_left}
        alt=""
      />
      <img
        className="card_carousel_chevron card_carousel_chevron_right"
        src={chevron_right}
        onClick={slideRight}
        alt=""
      />
    <div ref={carousel} className="GRID_CAROUSEL_CONTAINER">
      <div className="CARDCONTAINER">
        <div
          className="CardRow Grid4-2"
          style={{ opacity: 0, pointerEvents: "none" }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
     
      
      <div className="CARDCONTAINER GridCarousel">
        <div className="CardRow Grid4-2 GridCarouselSlide">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="CardRow Grid4-2 GridCarouselSlide">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="CardRow Grid4-2 GridCarouselSlide">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardCarousel;
