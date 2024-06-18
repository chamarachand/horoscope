import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container-about">
      <div className="title-about">
        <h1>About Us</h1>
      </div>
      <div className="content-about">
        <div className="article-about">
          <h2>About Astro Visionary</h2>
          <p>
            At Astro Visionary, we're passionate about the celestial journey of
            self-discovery. Our platform connects you with experienced
            astrologists who craft personalized horoscopes, offering guidance on
            love, career, and personal growth. Join us as we illuminate your
            path to enlightenment through the wisdom of the stars. Welcome to
            Astro Visionary, where destiny meets insight.
          </p>
          <a href="/#">Read More</a>
        </div>
        <div className="image-section-about">
          <img
            src="RashiChakraya.png"
            alt="image-about"
            className="image-about"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
