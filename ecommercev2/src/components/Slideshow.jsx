import React, { useEffect } from 'react';
import f5 from './Adidas1BGR.png'
import f6 from './Nike1BGR.png'
import f7 from './Jordan1BGR.png'
import f8 from './Yeezy1BGR.png'

const Slideshow = () => {
  useEffect(() => {
    const prevButton = document.querySelector(".navButton#previous");
    const nextButton = document.querySelector(".navButton#next");
    const wrapper = document.querySelector(".sliderWrapper");
    const slideWidth = document.querySelector(".sliderItem").clientWidth;
    let slideIndex = 0;

    const handlePrevClick = () => {
      if (slideIndex > 0) {
        slideIndex--;
        wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
      }
    };
    prevButton.addEventListener("click", handlePrevClick);

    const handleNextClick = () => {
      if (slideIndex < 3) {
        slideIndex++;
        wrapper.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
      }
    };
    nextButton.addEventListener("click", handleNextClick);

    return () => {
      prevButton.removeEventListener("click", handlePrevClick);
      nextButton.removeEventListener("click", handleNextClick);
    };
  }, []);

  return (
    <div className="slider">
      <div className="sliderWrapper">
        <div className="sliderItem">
          <img src={f5} width="550" alt="Adidas" className="sliderImg" />
          <div className="slideBg" />
          <h1 className="sliderTitle">NEWEST SEASON <br/> OUT NOW</h1>
          <a href="http://localhost:3000/products">
            <br/><br/><br/><br/>
            <button className="buyButton">Buy Now</button>
          </a>
        </div>
        <div className="sliderItem">
          <img src={f6} width="530" alt="Nike" className="sliderImg" />
          <div className="slideBg" />
          <h1 className="sliderTitle">NEWEST SEASON <br/> OUT NOW</h1>
          <a href="http://localhost:3000/products">
            <br/><br/><br/><br/>
            <button className="buyButton">Buy Now</button>
          </a>
        </div>
        <div className="sliderItem">
          <img src={f7} alt="Jordan" className="sliderImg" />
          <div className="slideBg" />
          <h1 className="sliderTitle">NEWEST SEASON <br/> OUT NOW</h1>
          <a href="http://localhost:3000/products">
            <br/><br/><br/><br/>
            <button className="buyButton">Buy Now</button>
          </a>
        </div>
        <div className="sliderItem">
          <img src={f8} width="550" alt="Yeezy" className="sliderImg" />
          <div className="slideBg" />
          <h1 className="sliderTitle">NEWEST SEASON<br/> OUT NOW</h1>
          <a href="/http://localhost:3000/products">
            <br/><br/><br/><br/>
            <button className="buyButton">Buy Now</button>
          </a>
        </div>
      </div>
      <div className="navButton" id="previous">&#10094;</div>
      <div className="navButton" id="next">&#10095;</div>
    </div>
  );
};

export default Slideshow;
