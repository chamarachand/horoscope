import React from "react";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.containerAbout}>
      <div className={styles.titleAbout}>
        <h1>About Us</h1>
      </div>
      <div className={styles.contentAbout}>
        <div className={styles.articleAbout}>
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
        <div className={styles.imageSectionAbout}>
          <img src="RashiChakraya.png" alt="image-about" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
