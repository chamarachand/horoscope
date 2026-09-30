import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../newComponents/NavBar";
import Footer from "../newComponents/Footer";

const PanchangaPage = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("si");
  const [theme, setTheme] = useState("dark");
  const [selectedDate, setSelectedDate] = useState("2026-09-27");
  const [location, setLocation] = useState("Colombo, Sri Lanka");

  const isDark = theme === "dark";

  // ==========================================
  // TRANSLATIONS
  // ==========================================

  const t = {
    si: {
      title: "පංචාංග ලිත",
      subtitle: "අද දවසේ ලිත සහ ජ්‍යෝතිෂ්‍ය තොරතුරු",
      daily: "දෛනික ලිත",
      today: "අද",
      location: "ස්ථානය",
      date: "දිනය",

      sun: "සූර්ය තොරතුරු",
      solarInformation: "සූර්ය තොරතුරු",
      sunrise: "හිරු උදාව",
      sunset: "හිරු බැසීම",
      solarNoon: "සූර්ය මධ්‍යහ්නය",
      dayLength: "දවසේ දිග",

      moon: "චන්ද්‍ර තොරතුරු",
      lunarInformation: "චන්ද්‍ර තොරතුරු",
      moonrise: "සඳු උදාව",
      moonset: "සඳු බැසීම",
      moonPhase: "චන්ද්‍ර කලාව",
      moonSign: "චන්ද්‍ර රාශිය",

      panchanga: "පංචාංගය",
      fiveElements: "පංචාංගයේ ප්‍රධාන අංග",
      vara: "වාරය",
      tithi: "තිථිය",
      nakshatra: "නැකත",
      pada: "පාදය",
      yoga: "යෝගය",
      karana: "කරණය",

      timings: "වැදගත් වේලා",
      traditionalTimings: "සාම්ප්‍රදායික වේලා",
      rahu: "රාහු කාලය",
      gulika: "ගුලික කාලය",
      yamaganda: "යමගණ්ඩය",

      hora: "හෝරා",
      planetaryHours: "ග්‍රහ හෝරා",

      auspicious: "සුභ වේලා",
      traditionalTiming:
        "සාම්ප්‍රදායික ජ්‍යෝතිෂ්‍ය මත පදනම් වූ වේලා",

      wedding: "විවාහ නැකත්",
      housewarming: "ගෘහ ප්‍රවේශ",
      business: "ව්‍යාපාර",
      travel: "ගමන්",

      aiTitle: "AI ලිත විස්තරය",
      aiDescription:
        "අද දවසේ පංචාංග තොරතුරු සහ සාම්ප්‍රදායික ජ්‍යෝතිෂ්‍ය අර්ථයන් AI මගින් පැහැදිලි කරගන්න.",
      askAI: "AI මගින් විස්තර කරන්න",

      moreFeatures: "තවත් ලිත තොරතුරු",
      calendar: "ලිත දින දර්ශනය",
      nakath: "නැකත්",
      poya: "පෝය දින",
      avurudu: "අවුරුදු නැකත්",

      note: "සටහන:",
      disclaimer:
        "පංචාංග සහ නැකත් තොරතුරු සාම්ප්‍රදායික ජ්‍යෝතිෂ්‍ය හා සංස්කෘතික භාවිතයන් සඳහා ඉදිරිපත් කෙරේ. AI මගින් ලබාදෙන විස්තරවල දෝෂ ඇති විය හැක.",
    },

    en: {
      title: "Panchanga Litha",
      subtitle:
        "Daily Panchanga and traditional astrology information",
      daily: "Daily Litha",
      today: "Today",
      location: "Location",
      date: "Date",

      sun: "Sun Information",
      solarInformation: "Solar information",
      sunrise: "Sunrise",
      sunset: "Sunset",
      solarNoon: "Solar Noon",
      dayLength: "Day Length",

      moon: "Moon Information",
      lunarInformation: "Lunar information",
      moonrise: "Moonrise",
      moonset: "Moonset",
      moonPhase: "Moon Phase",
      moonSign: "Moon Sign",

      panchanga: "Panchanga",
      fiveElements: "The five elements of Panchanga",
      vara: "Vara",
      tithi: "Tithi",
      nakshatra: "Nakshatra",
      pada: "Pada",
      yoga: "Yoga",
      karana: "Karana",

      timings: "Important Timings",
      traditionalTimings: "Traditional time periods",
      rahu: "Rahu Kalam",
      gulika: "Gulika Kalam",
      yamaganda: "Yamaganda",

      hora: "Hora",
      planetaryHours: "Planetary hours",

      auspicious: "Auspicious Times",
      traditionalTiming:
        "Traditional astrology-based timing",

      wedding: "Wedding Nakath",
      housewarming: "Housewarming",
      business: "Business",
      travel: "Travel",

      aiTitle: "AI Litha Explanation",
      aiDescription:
        "Use AI to explain today's Panchanga information and traditional astrological meanings.",
      askAI: "Explain with AI",

      moreFeatures: "More Litha Features",
      calendar: "Litha Calendar",
      nakath: "Nakath",
      poya: "Poya Days",
      avurudu: "Avurudu Nakath",

      note: "Note:",
      disclaimer:
        "Panchanga and auspicious-time information is provided for traditional astrological and cultural purposes. AI-generated explanations may contain errors.",
    },
  };

  const text = t[language];

  // ==========================================
  // DEMO DATA
  // ==========================================
  // These are demo values only.
  // Replace them later with the real Panchanga API.

  const data = {
    weekday: language === "si" ? "ඉරිදා" : "Sunday",

    sunrise: "06:00 AM",
    sunset: "06:05 PM",
    solarNoon: "12:02 PM",
    dayLength: "12h 05m",

    moonrise: "08:15 AM",
    moonset: "08:30 PM",
    moonPhase:
      language === "si" ? "වැඩෙන සඳ" : "Waxing Moon",
    moonSign:
      language === "si" ? "වෘශ්චික" : "Scorpio",

    tithi:
      language === "si"
        ? "ශුක්ල පංචමී"
        : "Shukla Panchami",
    tithiEnd: "02:20 PM",

    nakshatra:
      language === "si"
        ? "අනුරාධා"
        : "Anuradha",
    nakshatraPada: "2",
    nakshatraEnd: "04:40 PM",

    yoga:
      language === "si"
        ? "සිද්ධ"
        : "Siddha",
    yogaEnd: "06:10 PM",

    karana:
      language === "si"
        ? "බව"
        : "Bava",
    karanaEnd: "02:20 PM",

    rahu: "04:30 PM – 06:00 PM",
    gulika: "03:00 PM – 04:30 PM",
    yamaganda: "12:00 PM – 01:30 PM",
  };

  // ==========================================
  // HORA DATA
  // ==========================================

  const horaData =
    language === "si"
      ? [
          ["06:00", "☀️", "රවි හෝරාව"],
          ["07:00", "♀️", "ශුක්‍ර හෝරාව"],
          ["08:00", "☿", "බුධ හෝරාව"],
          ["09:00", "🌙", "සඳු හෝරාව"],
          ["10:00", "♄", "ශනි හෝරාව"],
          ["11:00", "♃", "ගුරු හෝරාව"],
          ["12:00", "♂️", "කුජ හෝරාව"],
        ]
      : [
          ["06:00", "☀️", "Sun Hora"],
          ["07:00", "♀️", "Venus Hora"],
          ["08:00", "☿", "Mercury Hora"],
          ["09:00", "🌙", "Moon Hora"],
          ["10:00", "♄", "Saturn Hora"],
          ["11:00", "♃", "Jupiter Hora"],
          ["12:00", "♂️", "Mars Hora"],
        ];

  // ==========================================
  // THEME CLASSES
  // ==========================================

  const cardClass = isDark
    ? "border-white/10 bg-white/[0.04]"
    : "border-black/10 bg-white";

  const secondaryText = isDark
    ? "text-gray-400"
    : "text-gray-600";

  const mainText = isDark
    ? "text-white"
    : "text-gray-900";

  const pageBg = isDark
    ? "bg-[#050509]"
    : "bg-[#f7f5f0]";

  // ==========================================
  // AI BUTTON
  // ==========================================

  const handleAI = () => {
    alert(
      language === "si"
        ? "Groq AI connection එක ඊළඟ පියවරේදී සම්බන්ධ කළ හැක."
        : "The Groq AI connection can be connected in the next step."
    );
  };

  // ==========================================
  // QUICK FEATURE BUTTONS
  // ==========================================

  const handleFeatureClick = (feature) => {
    alert(
      language === "si"
        ? `${feature} පිටුව ඊළඟ පියවරේදී සම්බන්ධ කරමු.`
        : `${feature} page can be connected in the next step.`
    );
  };

  return (
    <div
      className={`min-h-screen ${pageBg} ${mainText} transition-colors duration-300`}
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-[-150px] h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[120px]" />

        <div className="absolute right-[-100px] top-[30%] h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[120px]" />
      </div>

      {/* ==========================================
          REUSABLE NAVBAR
      ========================================== */}

      <NavBar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <main className="relative mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="mb-8 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-500">
            🌙 {text.daily}
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {text.title}
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl ${secondaryText}`}
          >
            {text.subtitle}
          </p>
        </section>

        {/* ==========================================
            DATE + LOCATION
        ========================================== */}

        <section
          className={`mb-6 rounded-3xl border ${cardClass} p-5 backdrop-blur-xl`}
        >
          <div className="grid gap-4 md:grid-cols-3">

            {/* DATE */}

            <div>
              <label
                className={`mb-2 block text-sm ${secondaryText}`}
              >
                📅 {text.date}
              </label>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) =>
                  setSelectedDate(e.target.value)
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-black/10 bg-gray-50"
                }`}
              />
            </div>

            {/* LOCATION */}

            <div>
              <label
                className={`mb-2 block text-sm ${secondaryText}`}
              >
                📍 {text.location}
              </label>

              <select
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none ${
                  isDark
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-black/10 bg-gray-50"
                }`}
              >
                <option>Colombo, Sri Lanka</option>
                <option>Kandy, Sri Lanka</option>
                <option>Galle, Sri Lanka</option>
                <option>Matara, Sri Lanka</option>
                <option>Jaffna, Sri Lanka</option>
              </select>
            </div>

            {/* TODAY */}

            <div className="flex items-end">
              <button
                onClick={() =>
                  setSelectedDate("2026-09-27")
                }
                className="w-full rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
              >
                📅 {text.today}
              </button>
            </div>

          </div>
        </section>

        {/* ==========================================
            DAY HEADER
        ========================================== */}

        <section
          className={`mb-6 overflow-hidden rounded-3xl border ${cardClass}`}
        >
          <div className="bg-gradient-to-r from-yellow-500/20 via-purple-500/10 to-transparent p-6">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>
                <p
                  className={`text-sm ${secondaryText}`}
                >
                  {selectedDate}
                </p>

                <h3 className="mt-1 text-3xl font-bold">
                  {data.weekday}
                </h3>

                <p
                  className={`mt-2 text-sm ${secondaryText}`}
                >
                  📍 {location}
                </p>
              </div>

              <div className="text-5xl">
                🌙
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            SUN + MOON
        ========================================== */}

        <section className="grid gap-6 lg:grid-cols-2">

          {/* SUN */}

          <div
            className={`rounded-3xl border ${cardClass} p-6`}
          >
            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                ☀️
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  {text.sun}
                </h3>

                <p
                  className={`text-sm ${secondaryText}`}
                >
                  {text.solarInformation}
                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <InfoBox
                icon="🌅"
                title={text.sunrise}
                value={data.sunrise}
                dark={isDark}
              />

              <InfoBox
                icon="🌇"
                title={text.sunset}
                value={data.sunset}
                dark={isDark}
              />

              <InfoBox
                icon="☀️"
                title={text.solarNoon}
                value={data.solarNoon}
                dark={isDark}
              />

              <InfoBox
                icon="⏱️"
                title={text.dayLength}
                value={data.dayLength}
                dark={isDark}
              />

            </div>
          </div>

          {/* MOON */}

          <div
            className={`rounded-3xl border ${cardClass} p-6`}
          >
            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                🌙
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  {text.moon}
                </h3>

                <p
                  className={`text-sm ${secondaryText}`}
                >
                  {text.lunarInformation}
                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <InfoBox
                icon="🌙"
                title={text.moonrise}
                value={data.moonrise}
                dark={isDark}
              />

              <InfoBox
                icon="🌘"
                title={text.moonset}
                value={data.moonset}
                dark={isDark}
              />

              <InfoBox
                icon="◐"
                title={text.moonPhase}
                value={data.moonPhase}
                dark={isDark}
              />

              <InfoBox
                icon="♏"
                title={text.moonSign}
                value={data.moonSign}
                dark={isDark}
              />

            </div>
          </div>

        </section>

        {/* ==========================================
            PANCHANGA
        ========================================== */}

        <section className="mt-10">

          <SectionTitle
            icon="🕉️"
            title={text.panchanga}
            subtitle={text.fiveElements}
            dark={isDark}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            <PanchangaCard
              icon="📅"
              title={text.vara}
              value={data.weekday}
              dark={isDark}
            />

            <PanchangaCard
              icon="🌗"
              title={text.tithi}
              value={data.tithi}
              end={data.tithiEnd}
              dark={isDark}
            />

            <PanchangaCard
              icon="⭐"
              title={text.nakshatra}
              value={data.nakshatra}
              end={`${text.pada}: ${data.nakshatraPada}`}
              dark={isDark}
            />

            <PanchangaCard
              icon="✨"
              title={text.yoga}
              value={data.yoga}
              end={data.yogaEnd}
              dark={isDark}
            />

            <PanchangaCard
              icon="🔱"
              title={text.karana}
              value={data.karana}
              end={data.karanaEnd}
              dark={isDark}
            />

          </div>
        </section>

        {/* ==========================================
            IMPORTANT TIMINGS
        ========================================== */}

        <section className="mt-10">

          <SectionTitle
            icon="⏰"
            title={text.timings}
            subtitle={text.traditionalTimings}
            dark={isDark}
          />

          <div className="grid gap-4 md:grid-cols-3">

            <TimingCard
              icon="☄️"
              title={text.rahu}
              value={data.rahu}
              dark={isDark}
              danger
            />

            <TimingCard
              icon="🔱"
              title={text.gulika}
              value={data.gulika}
              dark={isDark}
            />

            <TimingCard
              icon="🌑"
              title={text.yamaganda}
              value={data.yamaganda}
              dark={isDark}
            />

          </div>
        </section>

        {/* ==========================================
            HORA
        ========================================== */}

        <section className="mt-10">

          <SectionTitle
            icon="🕐"
            title={text.hora}
            subtitle={text.planetaryHours}
            dark={isDark}
          />

          <div
            className={`overflow-hidden rounded-3xl border ${cardClass}`}
          >

            <div className="grid grid-cols-3 border-b border-white/10 px-5 py-4 text-sm font-semibold">
              <span>
                {language === "si" ? "වේලාව" : "Time"}
              </span>

              <span>
                {language === "si" ? "ග්‍රහයා" : "Planet"}
              </span>

              <span>
                {language === "si" ? "හෝරාව" : "Hora"}
              </span>
            </div>

            {horaData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 px-5 py-4 ${
                  index !== horaData.length - 1
                    ? "border-b border-white/5"
                    : ""
                }`}
              >

                <span className={secondaryText}>
                  {item[0]}
                </span>

                <span className="text-xl">
                  {item[1]}
                </span>

                <span>
                  {item[2]}
                </span>

              </div>
            ))}

          </div>
        </section>

        {/* ==========================================
            AUSPICIOUS TIMES
        ========================================== */}

        <section className="mt-10">

          <SectionTitle
            icon="✨"
            title={text.auspicious}
            subtitle={text.traditionalTiming}
            dark={isDark}
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <ActionCard
              icon="💍"
              title={text.wedding}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.wedding)
              }
            />

            <ActionCard
              icon="🏠"
              title={text.housewarming}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.housewarming)
              }
            />

            <ActionCard
              icon="💼"
              title={text.business}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.business)
              }
            />

            <ActionCard
              icon="✈️"
              title={text.travel}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.travel)
              }
            />

          </div>
        </section>

        {/* ==========================================
            AI SECTION
        ========================================== */}

        <section className="mt-10">

          <div
            className={`relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br ${
              isDark
                ? "from-yellow-500/10 via-purple-500/10 to-white/[0.02]"
                : "from-yellow-100 via-purple-50 to-white"
            } p-6 sm:p-8`}
          >

            <div className="absolute right-[-40px] top-[-40px] text-[150px] opacity-10">
              ✦
            </div>

            <div className="relative">

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/15 text-3xl">
                🤖
              </div>

              <h3 className="text-2xl font-bold">
                {text.aiTitle}
              </h3>

              <p
                className={`mt-3 max-w-2xl leading-7 ${secondaryText}`}
              >
                {text.aiDescription}
              </p>

              <button
                onClick={handleAI}
                className="mt-6 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
              >
                ✨ {text.askAI}
              </button>

            </div>
          </div>
        </section>

        {/* ==========================================
            QUICK FEATURES
        ========================================== */}

        <section className="mt-10">

          <SectionTitle
            icon="📚"
            title={text.moreFeatures}
            subtitle=""
            dark={isDark}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <ActionCard
              icon="📆"
              title={text.calendar}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.calendar)
              }
            />

            <ActionCard
              icon="⭐"
              title={text.nakath}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.nakath)
              }
            />

            <ActionCard
              icon="🌕"
              title={text.poya}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.poya)
              }
            />

            <ActionCard
              icon="🌞"
              title={text.avurudu}
              dark={isDark}
              onClick={() =>
                handleFeatureClick(text.avurudu)
              }
            />

          </div>
        </section>

        {/* ==========================================
            DISCLAIMER
        ========================================== */}

        <section
          className={`mt-10 rounded-2xl border p-5 text-sm leading-6 ${
            isDark
              ? "border-white/10 bg-white/[0.03] text-gray-400"
              : "border-black/10 bg-white text-gray-600"
          }`}
        >
          <strong className={mainText}>
            {text.note}
          </strong>{" "}
          {text.disclaimer}
        </section>

      </main>

      {/* ==========================================
          REUSABLE FOOTER
      ========================================== */}

      <Footer
        language={language}
        theme={theme}
      />
    </div>
  );
};

// ==========================================
// INFO BOX
// ==========================================

const InfoBox = ({
  icon,
  title,
  value,
  dark,
}) => (
  <div
    className={`rounded-2xl border p-4 ${
      dark
        ? "border-white/10 bg-white/[0.03]"
        : "border-black/10 bg-gray-50"
    }`}
  >
    <div className="text-xl">
      {icon}
    </div>

    <p className="mt-3 text-xs text-gray-500">
      {title}
    </p>

    <p className="mt-1 font-semibold">
      {value}
    </p>
  </div>
);

// ==========================================
// SECTION TITLE
// ==========================================

const SectionTitle = ({
  icon,
  title,
  subtitle,
  dark,
}) => (
  <div className="mb-5">

    <div className="flex items-center gap-3">

      <span className="text-2xl">
        {icon}
      </span>

      <div>

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        {subtitle && (
          <p
            className={`text-sm ${
              dark
                ? "text-gray-500"
                : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        )}

      </div>

    </div>
  </div>
);

// ==========================================
// PANCHANGA CARD
// ==========================================

const PanchangaCard = ({
  icon,
  title,
  value,
  end,
  dark,
}) => (
  <div
    className={`rounded-3xl border p-5 transition hover:-translate-y-1 ${
      dark
        ? "border-white/10 bg-white/[0.04] hover:border-yellow-500/30"
        : "border-black/10 bg-white hover:border-yellow-500/40"
    }`}
  >

    <div className="text-3xl">
      {icon}
    </div>

    <p className="mt-4 text-sm text-gray-500">
      {title}
    </p>

    <h4 className="mt-1 text-lg font-bold">
      {value}
    </h4>

    {end && (
      <p className="mt-2 text-xs text-yellow-500">
        {end}
      </p>
    )}

  </div>
);

// ==========================================
// TIMING CARD
// ==========================================

const TimingCard = ({
  icon,
  title,
  value,
  dark,
  danger,
}) => (
  <div
    className={`rounded-3xl border p-6 ${
      dark
        ? "border-white/10 bg-white/[0.04]"
        : "border-black/10 bg-white"
    }`}
  >

    <div className="flex items-center gap-3">

      <div className="text-2xl">
        {icon}
      </div>

      <p className="font-semibold">
        {title}
      </p>

    </div>

    <p
      className={`mt-5 text-xl font-bold ${
        danger
          ? "text-red-400"
          : "text-yellow-500"
      }`}
    >
      {value}
    </p>

  </div>
);

// ==========================================
// ACTION CARD
// ==========================================

const ActionCard = ({
  icon,
  title,
  dark,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`w-full rounded-3xl border p-6 text-left transition hover:-translate-y-1 ${
      dark
        ? "border-white/10 bg-white/[0.04] hover:border-yellow-500/30"
        : "border-black/10 bg-white hover:border-yellow-500/40"
    }`}
  >

    <div className="text-3xl">
      {icon}
    </div>

    <h4 className="mt-4 font-semibold">
      {title}
    </h4>

    <p className="mt-2 text-xs text-gray-500">
      {dark
        ? "View details →"
        : "View details →"}
    </p>

  </button>
);

export default PanchangaPage;