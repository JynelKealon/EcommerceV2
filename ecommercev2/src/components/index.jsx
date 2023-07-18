import React from 'react'

const Index = () => {
return (
    <>
      <div className="slider">
        <div className="sliderWrapper">
          <div className="sliderItem">
            <img src="../Images/Adidas1BGR.png" width="550" alt="Adidas" className="sliderImg"></img>
            <div className="slideBg"></div>
            <h1 className="sliderTitle">NEWEST SEASON <br/> OUT NOW</h1>
            <a href="../HTML/products.html"><br/><br/><br/><br/><button className="buyButton">Buy Now</button></a>
          </div>
          <div className="sliderItem">
            <img src="../Images/Nike1BGR.png" width="530" alt="Nike" className="sliderImg"></img>
            <div className="slideBg"></div>
            <h1 className="sliderTitle">NEWEST SEASON <br/> OUT NOW</h1>
            <a href="../HTML/products.html"><br/><br/><br/><br/><button className="buyButton">Buy Now</button></a>
          </div>
          <div className="sliderItem">
            <img src="../Images/Jordan1BGR.png" alt="Jordan" className="sliderImg"></img>
            <div className="slideBg"></div>
            <h1 className="sliderTitle">NEWEST SEASON <br/> OUT NOW</h1>
            <a href="../HTML/products.html"><br/><br/><br/><br/><button className="buyButton">Buy Now</button></a>
          </div>
          <div className="sliderItem">
            <img src="../Images/Yeezy1BGR.png" width="550" alt="Yeezy" className="sliderImg"></img>
            <div className="slideBg"></div>
            <h1 className="sliderTitle">NEWEST SEASON<br/> OUT NOW</h1>
            <a href="../HTML/products.html"><br/><br/><br/><br/><button className="buyButton">Buy Now</button></a>
          </div>
        </div>
        <div className="navButton" id="previous">&#10094;</div>
        <div className="navButton" id="next">&#10095;</div>
      </div>
      <div className="features">
        <div className="feature">
          <img src="/Images/Truck.png" alt="" className="featureIcon"></img>
          <span className="featureTitle">FREE SHIPPING</span> 
          <span className="featureDesc">Free shipping on all orders.</span>
        </div>
        <div className="feature">
          <img src="/Images/ReturnBox.png" alt="" className="featureIcon"></img>
          <span className="featureTitle">30 DAY RETURN</span> 
          <span className="featureDesc">Easy to return, and refund within 14 days.</span>
        </div>
        <div className="feature">
          <img src="/Images/GiftCard.png" alt="" className="featureIcon"></img>
          <span className="featureTitle">GIFT CARDS</span> 
          <span className="featureDesc">Buy gift cards, and use coupons easily.</span>
        </div>
        <div className="feature">
          <a href="/HTML/contactus.html"><img src="/Images/Mail.png" alt="" className="featureIcon"></img></a>
          <span className="featureTitle">CONTACT US</span> 
          <span className="featureDesc">Keep in touch via email and support system.</span>
        </div>
      </div>
    </>
  );
}

export default Index