import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerHome}>
        <h1>Welcome To The Nakatha Horoscope</h1>
      </div>
      <div className={styles.contentHome}>
        <p>
          Welcome to Astro Visionary! Publish your horoscope details and have
          them reviewed by experienced astrologists. Join our community, share
          celestial insights, and receive guidance on love, career, and personal
          growth. Embark on a transformative journey as the stars illuminate
          your path. Welcome to your celestial haven!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
