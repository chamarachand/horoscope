import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="HomePage">
        <img
          src="HomePageImage.png"
          alt="HomePageImage"
          className="HomePageImage"
        />
        <h1 className="text">Welcome To The Nakatha Horoscope</h1>
        <div className="HomePageContent">
          <p>
            Welcome to Celestial Insights, your go-to destination for daily
            horoscopes and astrological guidance! Whether you're a curious
            Capricorn, a passionate Pisces, or anywhere in between, our expert
            astrologers are here to illuminate your path with personalized
            predictions and cosmic wisdom. Dive into the stars and uncover what
            the universe has in store for you today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
