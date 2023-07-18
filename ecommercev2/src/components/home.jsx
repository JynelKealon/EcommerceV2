import React from "react";
import Slideshow from './Slideshow'
import f1 from './Truck.png'
import f2 from './ReturnBox.png'
import f3 from './GiftCard.png'
import f4 from './Mail.png'


const Home = () => {
    return (
      <>
       <Slideshow/>
        <div className="features">
          <div className="feature">
            <img src={f1} alt="" className="featureIcon"></img>
            <span className="featureTitle">FREE SHIPPING</span> 
            <span className="featureDesc">Free shipping on all orders.</span>
          </div>
          <div className="feature">
            <img src={f2} alt="" className="featureIcon"></img>
            <span className="featureTitle">30 DAY RETURN</span> 
            <span className="featureDesc">Easy to return, and refund within 14 days.</span>
          </div>
          <div className="feature">
            <img src={f3} alt="" className="featureIcon"></img>
            <span className="featureTitle">GIFT CARDS</span> 
            <span className="featureDesc">Buy gift cards, and use coupons easily.</span>
          </div>
          <div className="feature">
            <a href="/contact"><img src={f4} alt="" className="featureIcon"></img></a>
            <span className="featureTitle">CONTACT US</span> 
            <span className="featureDesc">Keep in touch via email and support system.</span>
          </div>
        </div>
      </>
    );
  }

  export default Home 