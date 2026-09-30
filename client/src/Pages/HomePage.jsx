import React, { useState } from "react";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  const [language, setLanguage] = useState("si");

  const content = {
    en: {
      badge: "✦ ASTRO VISIONARY",
      title: "Discover Your",
      title2: "Destiny Among The Stars",
      description:
        "Explore your horoscope and discover meaningful insights about love, career, relationships, and your future.",
      check: "Check Your Horoscope",
      learn: "Learn More",
      horoscopes: "Horoscopes",
      zodiac: "Zodiac Signs",
      access: "Access",
    },

    si: {
      badge: "✦ ඇස්ට්‍රෝ විෂනරි",
      title: "ඔබේ ඉරණම",
      title2: "තරු අතරින් සොයාගන්න",
      description:
        "ඔබේ කේන්දරය පරීක්ෂා කර ආදරය, රැකියාව, සබඳතා සහ අනාගතය පිළිබඳ වැදගත් ජ්‍යෝතිෂ්‍ය තොරතුරු ලබාගන්න.",
      check: "ඔබේ කේන්දරය බලන්න",
      learn: "වැඩි විස්තර",
      horoscopes: "කේන්දර",
      zodiac: "රාශි",
      access: "පැය 24 පුරා",
    },
  };

  const text = content[language];

  return (
    <div className={styles.home}>

      <div className={styles.stars}></div>

      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      {/* Language Switcher */}
      <div className={styles.languageSwitcher}>
        <button
          className={language === "si" ? styles.activeLanguage : ""}
          onClick={() => setLanguage("si")}
        >
          සිංහල
        </button>

        <span>|</span>

        <button
          className={language === "en" ? styles.activeLanguage : ""}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
      </div>

      <section className={styles.hero}>

        <div className={styles.heroText}>

          <div className={styles.badge}>
            {text.badge}
          </div>

          <h1>
            {text.title}
            <span>{text.title2}</span>
          </h1>

          <p>
            {text.description}
          </p>

          <div className={styles.buttons}>

            <button className={styles.primaryBtn}>
              {text.check}
              <span>→</span>
            </button>

            <button className={styles.secondaryBtn}>
              {text.learn}
            </button>

          </div>

          <div className={styles.stats}>

            <div>
              <strong>10K+</strong>
              <small>{text.horoscopes}</small>
            </div>

            <div className={styles.line}></div>

            <div>
              <strong>12</strong>
              <small>{text.zodiac}</small>
            </div>

            <div className={styles.line}></div>

            <div>
              <strong>24/7</strong>
              <small>{text.access}</small>
            </div>

          </div>

        </div>

        <div className={styles.cosmos}>

          <div className={`${styles.ring} ${styles.ring1}`}></div>

          <div className={`${styles.ring} ${styles.ring2}`}></div>

          <div className={`${styles.ring} ${styles.ring3}`}></div>

          <div className={styles.moon}>
            🌙
          </div>

          <div className={`${styles.zodiac} ${styles.z1}`}>
            ♈
          </div>

          <div className={`${styles.zodiac} ${styles.z2}`}>
            ♉
          </div>

          <div className={`${styles.zodiac} ${styles.z3}`}>
            ♌
          </div>

          <div className={`${styles.zodiac} ${styles.z4}`}>
            ♏
          </div>

          <div className={`${styles.zodiac} ${styles.z5}`}>
            ♐
          </div>

          <div className={`${styles.zodiac} ${styles.z6}`}>
            ♒
          </div>

        </div>

      </section>
    </div>
  );
}

export default HomePage;