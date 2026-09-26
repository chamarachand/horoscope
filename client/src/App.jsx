import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./newPages/Home";
import HoroscopePage from "./newPages/HoroscopePage";
import HoroscopeResult from "./newPages/HoroscopeResult";
import Contact from "./newPages/Contact";
import ZodiacPage from "./newPages/ZodiacPage";

function App() {
  return (
    <Router>
      <Routes>

        {/* ==========================================
            NEW THARURAHAS HOME
        ========================================== */}

        <Route path="/" element={<Home />} />

        {/* ==========================================
            HOROSCOPE FORM
        ========================================== */}

        <Route
          path="/horoscope"
          element={<HoroscopePage />}
        />

        {/* ==========================================
            HOROSCOPE RESULT
        ========================================== */}

        <Route
          path="/horoscope/result"
          element={<HoroscopeResult />}
        />

        {/* ==========================================
            ZODIAC PAGE
        ========================================== */}

        <Route
          path="/zodiac"
          element={<ZodiacPage />}
        />

        {/* ==========================================
            CONTACT PAGE
        ========================================== */}

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    </Router>
  );
}

export default App;