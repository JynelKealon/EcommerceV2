import React from "react";
import './contact.css'
import f1 from './Truck.png'
import f2 from './ReturnBox.png'
import f3 from './GiftCard.png'
import f4 from './Mail.png'

const Contact = () => {
    return (
      <>
        <div className="parallax"></div>
        <div className="container">
          <form id="contact">
            <h3>Sneakers Contact Form</h3>
            <h4>Contact Us For Custom Sneakers</h4>
            <fieldset>
              <input placeholder="Your name" type="text" tabindex="1" required autofocus />
            </fieldset>
            <fieldset>
              <input placeholder="Your Email Address" type="email" tabindex="2" required />
            </fieldset>
            <fieldset>
              <input placeholder="Your Phone Number" type="tel" tabindex="3" required />
            </fieldset>
            <fieldset>
              <input placeholder="Your Web Site (optional)" type="url" tabindex="4" />
            </fieldset>
            <fieldset>
              <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit">Submit</button>
            </fieldset>
            <p className="copyright">
              Designed by <a target="_blank" title="Bottom">Jynel Kealon</a>
            </p>
          </form>
        </div>
        <div className="features">
          <div className="feature">
            <img src={f1} alt="" className="featureIcon" />
            <span className="featureTitle">FREE SHIPPING</span>
            <span className="featureDesc">Free shipping on all orders.</span>
          </div>
          <div className="feature">
            <img src={f2} alt="" className="featureIcon" />
            <span className="featureTitle">30 DAY RETURN</span>
            <span className="featureDesc">Easy to return, and refund within 14 days.</span>
          </div>
          <div className="feature">
            <img src={f3} alt="" className="featureIcon" />
            <span className="featureTitle">GIFT CARDS</span>
            <span className="featureDesc">Buy gift cards, and use coupons easily.</span>
          </div>
          <div className="feature">
            <a href="/contact"><img src={f4} alt="" className="featureIcon" /></a>
            <span className="featureTitle">CONTACT US</span>
            <span className="featureDesc">Keep in touch via email and support system.</span>
          </div>
        </div>
      </>
    );
  }
  export default Contact 