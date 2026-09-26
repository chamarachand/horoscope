import React, { useState } from "react";
import NavBar from "../newComponents/NavBar";
import Horoscope from "../newComponents/Horoscope";
import Footer from "../newComponents/Footer";

const HoroscopePage = () => {
  const [language, setLanguage] = useState("si");
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#05030b] text-white"
          : "bg-[#faf8f2] text-[#17130d]"
      }`}
    >
      <NavBar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="pt-20">
        <Horoscope
          language={language}
          theme={theme}
        />
      </main>

      <Footer
        language={language}
        theme={theme}
      />
    </div>
  );
};

export default HoroscopePage;