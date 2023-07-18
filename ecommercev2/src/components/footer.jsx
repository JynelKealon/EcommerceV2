import React from 'react';
import f1 from './FacebookLogoBGR.png'
import f2 from './IGLogoBGR.png'
import f3 from './TwitterLogoBGR.png'
import f4 from './YoutubeLogoBGR.png'

const Footer = () => {
    return (
      <>
        <footer className="footer">
          <p>&copy; 2023 Sneaker.Inc</p>
          <a href="https://m.facebook.com">
            <img src={f1} alt="FacebookLogo" width="40" height="40" />
          </a>
          <a href="https://www.instagram.com">
            <img src={f2} alt="InstagramLogo" width="40" height="40" />
          </a>
          <a href="https://twitter.com">
            <img src={f3} alt="TwitterLogo" width="40" height="40" />
          </a>
          <a href="https://www.youtube.com">
            <img src={f4} width="40" height="40" />
          </a>
        </footer>
      </>
    );
  }

  export default Footer