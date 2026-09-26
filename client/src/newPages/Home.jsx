import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../newComponents/NavBar";
import Footer from "../newComponents/Footer";
import Reviews from "../newComponents/Reviews";
import About from "../newComponents/About";

const Home = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("si");
  const [theme, setTheme] = useState("dark");

  const content = {
    en: {
      badge: "✦ DISCOVER YOUR COSMIC PATH",
      title1: "Unlock the",
      title2: "Secrets of the Stars",
      description:
        "Discover meaningful insights about your personality, relationships, career, and future through the ancient wisdom of astrology.",

      primary: "Check Your Horoscope",
      secondary: "Explore Zodiac Signs",

      trusted: "Trusted by thousands of astrology enthusiasts",

      horoscopes: "Horoscopes",
      zodiac: "Zodiac Signs",
      available: "Available",

      sectionTitle: "Explore Your Cosmic Journey",

      sectionDescription:
        "Everything you need to understand your stars and discover what the universe may have in store for you.",

      horoscopeTitle: "Personal Horoscope",

      horoscopeText:
        "Discover personalized insights based on your birth details.",

      zodiacTitle: "Zodiac Signs",

      zodiacText:
        "Explore the characteristics and mysteries of all 12 zodiac signs.",

      guidanceTitle: "Astrological Guidance",

      guidanceText:
        "Gain meaningful guidance for love, career, relationships, and life.",

      explore: "Explore →",
    },

    si: {
      badge: "✦ ඔබේ තරු මඟ සොයාගන්න",

      title1: "තරු වල",

      title2: "රහස් සොයාගන්න",

      description:
        "ජ්‍යෝතිෂ්‍යයේ පුරාණ දැනුම තුළින් ඔබේ පෞරුෂය, ආදරය, සබඳතා, රැකියාව සහ අනාගතය පිළිබඳ වටිනා අවබෝධයක් ලබාගන්න.",

      primary: "ඔබේ කේන්දරය බලන්න",

      secondary: "රාශි ගැන සොයන්න",

      trusted:
        "දහස් ගණනක් ජ්‍යෝතිෂ්‍ය උනන්දුවක් දක්වන්නන්ගේ විශ්වාසය",

      horoscopes: "කේන්දර",

      zodiac: "රාශි",

      available: "සේවාව ලබාගත හැක",

      sectionTitle: "ඔබේ තරු ගමන ආරම්භ කරන්න",

      sectionDescription:
        "ඔබේ තරු හඳුනාගෙන විශ්වය ඔබ වෙනුවෙන් තබා ඇති දේ සොයාගැනීමට අවශ්‍ය සියල්ල එකම ස්ථානයකින්.",

      horoscopeTitle: "පුද්ගලික කේන්දරය",

      horoscopeText:
        "ඔබේ උපන් තොරතුරු මත පදනම් වූ පුද්ගලික ජ්‍යෝතිෂ්‍ය තොරතුරු සොයාගන්න.",

      zodiacTitle: "රාශි 12",

      zodiacText:
        "රාශි 12 හි ලක්ෂණ සහ ඒවායේ සැඟවුණු රහස් පිළිබඳව සොයා බලන්න.",

      guidanceTitle: "ජ්‍යෝතිෂ්‍ය මඟපෙන්වීම",

      guidanceText:
        "ආදරය, රැකියාව, සබඳතා සහ ජීවිතය සඳහා වටිනා මඟපෙන්වීමක් ලබාගන්න.",

      explore: "සොයන්න →",
    },
  };

  const t = content[language];

  const isDark = theme === "dark";

  // ==========================================
  // NAVIGATION
  // ==========================================

  const goToZodiac = () => {
    navigate("/zodiac");
  };

  const goToHoroscope = () => {
    navigate("/horoscope");
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        isDark
          ? "bg-[#05030b] text-white"
          : "bg-[#faf8f2] text-[#17130d]"
      }`}
    >
      {/* ==========================================
          NAVBAR
      ========================================== */}

      <NavBar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* ==========================================
          HERO
      ========================================== */}

      <main
        id="home"
        className={`relative min-h-screen overflow-hidden pt-20 ${
          isDark ? "bg-[#05030b]" : "bg-[#faf8f2]"
        }`}
      >
        {/* ==========================================
            STARS
        ========================================== */}

        {isDark && (
          <>
            <div
              className="pointer-events-none absolute inset-0 opacity-25 animate-[starsMove_25s_linear_infinite]"
              style={{
                backgroundImage: `
                  radial-gradient(circle, white 1px, transparent 1px),
                  radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px, 130px 130px",
              }}
            />

            <span className="absolute left-[8%] top-[18%] h-1 w-1 animate-[twinkle_3s_ease-in-out_infinite] rounded-full bg-white" />

            <span className="absolute left-[20%] top-[35%] h-1.5 w-1.5 animate-[twinkle_4s_ease-in-out_infinite_1s] rounded-full bg-[#d6ad55]" />

            <span className="absolute right-[15%] top-[20%] h-1 w-1 animate-[twinkle_3.5s_ease-in-out_infinite_.5s] rounded-full bg-white" />

            <span className="absolute right-[28%] bottom-[30%] h-1.5 w-1.5 animate-[twinkle_4s_ease-in-out_infinite_1.5s] rounded-full bg-[#d6ad55]" />

            <span className="absolute left-[45%] top-[15%] h-1 w-1 animate-[twinkle_3s_ease-in-out_infinite_2s] rounded-full bg-white" />
          </>
        )}

        {/* ==========================================
            PURPLE GLOW
        ========================================== */}

        <div
          className={`pointer-events-none absolute -right-32 top-20 h-[300px] w-[300px] animate-[orbFloat_8s_ease-in-out_infinite] rounded-full blur-[100px] sm:-right-40 sm:h-[500px] sm:w-[500px] sm:blur-[130px] ${
            isDark ? "bg-purple-700/20" : "bg-purple-400/10"
          }`}
        />

        {/* ==========================================
            GOLD GLOW
        ========================================== */}

        <div
          className={`pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] animate-[orbFloat_10s_ease-in-out_infinite_reverse] rounded-full blur-[100px] sm:-bottom-40 sm:-left-40 sm:h-[450px] sm:w-[450px] sm:blur-[120px] ${
            isDark ? "bg-yellow-600/10" : "bg-yellow-500/10"
          }`}
        />

        {/* ==========================================
            HERO CONTAINER
        ========================================== */}

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-5 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* ==========================================
              HERO LEFT
          ========================================== */}

          <div className="order-1 max-w-2xl">

            {/* BADGE */}

            <div
              className={`animate-[fadeUp_.8s_ease-out_both] mb-6 inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-2 text-[10px] tracking-[2px] backdrop-blur-md sm:mb-7 sm:px-4 sm:text-xs sm:tracking-widest ${
                isDark
                  ? "border-[#d6ad55]/20 bg-white/[0.04] text-[#e0bd70]"
                  : "border-[#d6ad55]/30 bg-white/70 text-[#8c641d]"
              }`}
            >
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#d6ad55] shadow-[0_0_12px_#d6ad55]" />

              <span>{t.badge}</span>
            </div>

            {/* HEADING */}

            <h1
              className={`animate-[fadeUp_.9s_ease-out_.15s_both] max-w-3xl text-[2.7rem] font-bold leading-[1.08] tracking-[-1.5px] sm:text-5xl sm:tracking-[-2px] md:text-6xl lg:text-7xl ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.title1}

              <span className="mt-2 block animate-[goldShimmer_5s_ease-in-out_infinite] bg-gradient-to-r from-[#d6a94e] via-[#ffe6a0] to-[#a875e8] bg-[length:200%_auto] bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className={`animate-[fadeUp_.9s_ease-out_.3s_both] mt-6 max-w-xl text-sm leading-7 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg ${
                isDark ? "text-white/55" : "text-black/55"
              }`}
            >
              {t.description}
            </p>

            {/* BUTTONS */}

            <div className="animate-[fadeUp_.9s_ease-out_.45s_both] mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">

              {/* HOROSCOPE */}

              <button
                onClick={goToHoroscope}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#d4a64e] to-[#f1d27e] px-6 py-4 text-sm font-semibold text-[#140e06] shadow-[0_10px_40px_rgba(214,169,78,.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(214,169,78,.35)] sm:w-auto sm:text-base"
              >
                <span className="absolute inset-y-0 -left-20 w-12 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[120%]" />

                <span className="relative">
                  {t.primary}

                  <span className="ml-3 inline-block transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              {/* ZODIAC */}

              <button
                onClick={goToZodiac}
                className={`group w-full rounded-xl border px-6 py-4 text-sm font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:w-auto sm:text-base ${
                  isDark
                    ? "border-white/10 bg-white/[0.04] text-white hover:border-[#d6ad55]/30 hover:bg-white/[0.08]"
                    : "border-black/10 bg-white/70 text-[#17130d] hover:border-[#d6ad55]/40 hover:bg-white"
                }`}
              >
                {t.secondary}

                <span className="ml-2 inline-block transition duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </button>
            </div>

            {/* TRUST */}

            <p
              className={`animate-[fadeUp_.9s_ease-out_.6s_both] mt-7 text-[11px] leading-5 sm:mt-9 sm:text-xs ${
                isDark ? "text-white/30" : "text-black/35"
              }`}
            >
              ✦ {t.trusted}
            </p>

            {/* STATS */}

            <div className="animate-[fadeUp_.9s_ease-out_.75s_both] mt-6 flex items-center justify-between gap-3 sm:mt-7 sm:justify-start sm:gap-8">

              <div className="min-w-0 transition duration-300 hover:-translate-y-1">
                <p className="text-xl font-bold text-[#dfbd6c] sm:text-2xl">
                  10K+
                </p>

                <p
                  className={`mt-1 text-[10px] sm:text-xs ${
                    isDark ? "text-white/35" : "text-black/40"
                  }`}
                >
                  {t.horoscopes}
                </p>
              </div>

              <div
                className={`h-9 w-px shrink-0 ${
                  isDark ? "bg-white/10" : "bg-black/10"
                }`}
              />

              <div className="min-w-0 transition duration-300 hover:-translate-y-1">
                <p className="text-xl font-bold text-[#dfbd6c] sm:text-2xl">
                  12
                </p>

                <p
                  className={`mt-1 text-[10px] sm:text-xs ${
                    isDark ? "text-white/35" : "text-black/40"
                  }`}
                >
                  {t.zodiac}
                </p>
              </div>

              <div
                className={`h-9 w-px shrink-0 ${
                  isDark ? "bg-white/10" : "bg-black/10"
                }`}
              />

              <div className="min-w-0 transition duration-300 hover:-translate-y-1">
                <p className="text-xl font-bold text-[#dfbd6c] sm:text-2xl">
                  24/7
                </p>

                <p
                  className={`mt-1 text-[10px] sm:text-xs ${
                    isDark ? "text-white/35" : "text-black/40"
                  }`}
                >
                  {t.available}
                </p>
              </div>
            </div>
          </div>

          {/* ==========================================
              COSMIC VISUAL
          ========================================== */}

          <div className="order-2 mx-auto flex h-[300px] w-full max-w-[300px] items-center justify-center sm:h-[400px] sm:max-w-[400px] md:h-[460px] md:max-w-[460px] lg:h-[500px] lg:max-w-[500px]">

            <div className="relative flex h-full w-full items-center justify-center">

              {/* OUTER RING */}

              <div className="absolute inset-0 animate-[spin_35s_linear_infinite] rounded-full border border-[#d6ad55]/20" />

              {/* MIDDLE RING */}

              <div className="absolute inset-[10%] animate-[spin_25s_linear_infinite_reverse] rounded-full border border-purple-400/20" />

              {/* INNER RING */}

              <div className="absolute inset-[20%] animate-[spin_18s_linear_infinite] rounded-full border border-[#d6ad55]/20" />

              {/* GLOW */}

              <div className="absolute h-[55%] w-[55%] animate-pulse rounded-full bg-[#d6ad55]/10 blur-[55px] sm:blur-[70px]" />

              {/* MOON GLOW */}

              <div className="absolute h-[48%] w-[48%] animate-[moonGlow_4s_ease-in-out_infinite] rounded-full bg-[#ffe6a0]/10 blur-2xl" />

              {/* MOON */}

              <div className="relative z-10 flex h-[45%] w-[45%] animate-[moonFloat_5s_ease-in-out_infinite] items-center justify-center rounded-full bg-gradient-to-br from-[#fff8df] via-[#d8bd7c] to-[#665132] text-[3.5rem] shadow-[0_0_60px_rgba(239,207,130,.35)] sm:text-7xl md:text-8xl">
                🌙
              </div>

              {/* ZODIAC 1 */}

              <div className="absolute left-[45%] top-[1%] animate-[zodiacFloat_4s_ease-in-out_infinite] flex h-8 w-8 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#08050f]/90 text-sm text-[#e4bf6b] shadow-[0_0_20px_rgba(214,173,85,.12)] sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 md:text-lg">
                ♈
              </div>

              {/* ZODIAC 2 */}

              <div className="absolute right-[1%] top-[25%] animate-[zodiacFloat_4.5s_ease-in-out_infinite_.4s] flex h-8 w-8 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#08050f]/90 text-sm text-[#e4bf6b] shadow-[0_0_20px_rgba(214,173,85,.12)] sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 md:text-lg">
                ♉
              </div>

              {/* ZODIAC 3 */}

              <div className="absolute bottom-[18%] right-[5%] animate-[zodiacFloat_4s_ease-in-out_infinite_.8s] flex h-8 w-8 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#08050f]/90 text-sm text-[#e4bf6b] shadow-[0_0_20px_rgba(214,173,85,.12)] sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 md:text-lg">
                ♌
              </div>

              {/* ZODIAC 4 */}

              <div className="absolute bottom-[1%] left-[45%] animate-[zodiacFloat_4.5s_ease-in-out_infinite_1.2s] flex h-8 w-8 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#08050f]/90 text-sm text-[#e4bf6b] shadow-[0_0_20px_rgba(214,173,85,.12)] sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 md:text-lg">
                ♏
              </div>

              {/* ZODIAC 5 */}

              <div className="absolute bottom-[19%] left-[5%] animate-[zodiacFloat_4s_ease-in-out_infinite_1.6s] flex h-8 w-8 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#08050f]/90 text-sm text-[#e4bf6b] shadow-[0_0_20px_rgba(214,173,85,.12)] sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 md:text-lg">
                ♐
              </div>

              {/* ZODIAC 6 */}

              <div className="absolute left-[1%] top-[25%] animate-[zodiacFloat_4.5s_ease-in-out_infinite_2s] flex h-8 w-8 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#08050f]/90 text-sm text-[#e4bf6b] shadow-[0_0_20px_rgba(214,173,85,.12)] sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 md:text-lg">
                ♒
              </div>

              {/* ORBITING SPARK */}

              <div className="absolute left-[18%] top-[12%] h-2 w-2 animate-[orbitSpark_8s_linear_infinite] rounded-full bg-[#f1d27e] shadow-[0_0_15px_#f1d27e]" />

              <div className="absolute right-[20%] bottom-[12%] h-1.5 w-1.5 animate-[twinkle_3s_ease-in-out_infinite] rounded-full bg-purple-300 shadow-[0_0_15px_rgba(216,180,254,.8)]" />

            </div>
          </div>
        </div>
      </main>

      {/* ==========================================
          SERVICES
      ========================================== */}

      <section
        id="services"
        className={`relative border-t px-5 py-16 transition-colors duration-500 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${
          isDark
            ? "border-white/5 bg-[#07040e]"
            : "border-black/5 bg-[#f5f1e8]"
        }`}
      >
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}

          <div className="mx-auto max-w-2xl text-center">

            <p className="animate-[fadeUp_.8s_ease-out_both] text-[10px] font-semibold uppercase tracking-[3px] text-[#d6ad55] sm:text-xs sm:tracking-[4px]">
              THARURAHAS
            </p>

            <h2
              className={`animate-[fadeUp_.8s_ease-out_.1s_both] mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.sectionTitle}
            </h2>

            <p
              className={`animate-[fadeUp_.8s_ease-out_.2s_both] mt-4 text-sm leading-7 sm:mt-5 sm:text-base ${
                isDark ? "text-white/45" : "text-black/50"
              }`}
            >
              {t.sectionDescription}
            </p>

          </div>

          {/* SERVICE CARDS */}

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* PERSONAL HOROSCOPE */}

            <div
              className={`group animate-[fadeUp_.8s_ease-out_.25s_both] rounded-2xl border p-6 backdrop-blur-md transition duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(214,173,85,.12)] sm:p-7 ${
                isDark
                  ? "border-white/10 bg-white/[0.03] hover:border-[#d6ad55]/30 hover:bg-white/[0.05]"
                  : "border-black/10 bg-white/70 hover:border-[#d6ad55]/40 hover:bg-white"
              }`}
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#d6ad55]/10 text-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                🔮
              </div>

              <h3
                className={`text-lg font-semibold sm:text-xl ${
                  isDark ? "text-white" : "text-[#17130d]"
                }`}
              >
                {t.horoscopeTitle}
              </h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  isDark ? "text-white/45" : "text-black/50"
                }`}
              >
                {t.horoscopeText}
              </p>

              <button
                onClick={goToHoroscope}
                className="mt-5 text-sm font-semibold text-[#d6ad55] transition hover:translate-x-1 hover:text-[#f1d27e]"
              >
                {t.explore}
              </button>

            </div>

            {/* ZODIAC */}

            <div
              className={`group animate-[fadeUp_.8s_ease-out_.4s_both] rounded-2xl border p-6 backdrop-blur-md transition duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(150,100,220,.12)] sm:p-7 ${
                isDark
                  ? "border-white/10 bg-white/[0.03] hover:border-purple-400/30 hover:bg-white/[0.05]"
                  : "border-black/10 bg-white/70 hover:border-purple-400/30 hover:bg-white"
              }`}
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                ♈
              </div>

              <h3
                className={`text-lg font-semibold sm:text-xl ${
                  isDark ? "text-white" : "text-[#17130d]"
                }`}
              >
                {t.zodiacTitle}
              </h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  isDark ? "text-white/45" : "text-black/50"
                }`}
              >
                {t.zodiacText}
              </p>

              <button
                onClick={goToZodiac}
                className="mt-5 text-sm font-semibold text-[#d6ad55] transition hover:translate-x-1 hover:text-[#f1d27e]"
              >
                {t.explore}
              </button>

            </div>

            {/* GUIDANCE */}

            <div
              className={`group animate-[fadeUp_.8s_ease-out_.55s_both] rounded-2xl border p-6 backdrop-blur-md transition duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(214,173,85,.12)] sm:p-7 md:col-span-2 lg:col-span-1 ${
                isDark
                  ? "border-white/10 bg-white/[0.03] hover:border-[#d6ad55]/30 hover:bg-white/[0.05]"
                  : "border-black/10 bg-white/70 hover:border-[#d6ad55]/40 hover:bg-white"
              }`}
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#d6ad55]/10 text-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                ✨
              </div>

              <h3
                className={`text-lg font-semibold sm:text-xl ${
                  isDark ? "text-white" : "text-[#17130d]"
                }`}
              >
                {t.guidanceTitle}
              </h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  isDark ? "text-white/45" : "text-black/50"
                }`}
              >
                {t.guidanceText}
              </p>

              <button
                onClick={goToHoroscope}
                className="mt-5 text-sm font-semibold text-[#d6ad55] transition hover:translate-x-1 hover:text-[#f1d27e]"
              >
                {t.explore}
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          ABOUT
      ========================================== */}

      <About
        language={language}
        theme={theme}
      />

      {/* ==========================================
          REVIEWS
      ========================================== */}

      <Reviews
        language={language}
        theme={theme}
      />

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer
        language={language}
        theme={theme}
      />
    </div>
  );
};

export default Home;