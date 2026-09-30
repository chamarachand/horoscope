import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = ({ language = "si", theme = "dark" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isDark = theme === "dark";

  const content = {
    en: {
      description:
        "Discover meaningful insights about your life, relationships, career, and future through the wisdom of astrology.",

      explore: "Explore",
      home: "Home",
      horoscope: "Horoscope",
      zodiac: "Zodiac Signs",

      company: "Company",
      about: "About Us",
      reviews: "Reviews",
      contact: "Contact",

      services: "Services",
      personal: "Personal Horoscope",
      guidance: "Astrological Guidance",
      compatibility: "Compatibility",

      rights: "All rights reserved.",
      tagline: "Unlock the Secrets of the Stars",
    },

    si: {
      description:
        "ජ්‍යෝතිෂ්‍යයේ දැනුම තුළින් ඔබේ ජීවිතය, ආදරය, සබඳතා, රැකියාව සහ අනාගතය පිළිබඳ වටිනා අවබෝධයක් ලබාගන්න.",

      explore: "ගවේෂණය",
      home: "මුල් පිටුව",
      horoscope: "කේන්දරය",
      zodiac: "රාශි",

      company: "අප ගැන",
      about: "අප ගැන",
      reviews: "විචාර",
      contact: "සම්බන්ධ වන්න",

      services: "සේවා",
      personal: "පුද්ගලික කේන්දර",
      guidance: "ජ්‍යෝතිෂ්‍ය මඟපෙන්වීම",
      compatibility: "ගැළපීම",

      rights: "සියලුම හිමිකම් ඇවිරිණි.",
      tagline: "තරු වල රහස් සොයාගන්න",
    },
  };

  const t = content[language];

  const linkClass = isDark
    ? "text-white/40 transition hover:text-[#d6ad55]"
    : "text-black/45 transition hover:text-[#a8791f]";

  // ==========================================
  // GO HOME
  // ==========================================

  const goHome = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // ==========================================
  // GO TO SECTION
  // ==========================================

  const goToSection = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  // ==========================================
  // GO TO ZODIAC
  // ==========================================

  const goToZodiac = () => {
    navigate("/zodiac");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // ==========================================
  // GO TO HOROSCOPE
  // ==========================================

  const goToHoroscope = () => {
    navigate("/horoscope");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // ==========================================
  // GO TO CONTACT
  // ==========================================

  const goToContact = () => {
    navigate("/contact");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // ==========================================
  // SOCIAL LINK STYLE
  // ==========================================

  const socialClass = `flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm transition duration-300 ${
    isDark
      ? "border-white/10 bg-white/[0.03] text-white/50 hover:border-[#d6ad55]/40 hover:text-[#d6ad55]"
      : "border-black/10 bg-black/[0.03] text-black/45 hover:border-[#d6ad55]/50 hover:text-[#a8791f]"
  }`;

  return (
    <footer
      className={`border-t transition-colors duration-500 ${
        isDark
          ? "border-white/10 bg-[#030208]"
          : "border-black/10 bg-[#f3efe5]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        {/* ==========================================
            MAIN FOOTER
        ========================================== */}

        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* ==========================================
              BRAND
          ========================================== */}

          <div className="md:col-span-2 lg:col-span-1">

            {/* Logo */}

            <button
              onClick={goHome}
              className="group inline-flex items-center gap-3 text-left"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg transition sm:h-11 sm:w-11 sm:text-xl ${
                  isDark
                    ? "border-[#d6ad55]/30 bg-[#d6ad55]/10 text-[#d6ad55]"
                    : "border-[#d6ad55]/40 bg-[#d6ad55]/10 text-[#a8791f]"
                }`}
              >
                ✦
              </div>

              <div>
                <h2
                  className={`text-lg font-bold sm:text-xl ${
                    isDark
                      ? "text-white"
                      : "text-[#17130d]"
                  }`}
                >
                  Tharu
                  <span className="text-[#d6ad55]">
                    Rahas
                  </span>
                </h2>

                <p
                  className={`text-[8px] uppercase tracking-[2px] sm:text-[9px] sm:tracking-[3px] ${
                    isDark
                      ? "text-white/30"
                      : "text-black/35"
                  }`}
                >
                  තරු රහස්
                </p>
              </div>
            </button>

            {/* Description */}

            <p
              className={`mt-5 max-w-sm text-sm leading-7 ${
                isDark
                  ? "text-white/40"
                  : "text-black/50"
              }`}
            >
              {t.description}
            </p>

            {/* ==========================================
                SOCIAL BUTTONS
            ========================================== */}

            <div className="mt-6 flex flex-wrap gap-3">

              {/* Facebook */}

              <a
                href="#"
                className={socialClass}
                aria-label="Facebook"
              >
                <span className="font-semibold">
                  f
                </span>
              </a>

              {/* Instagram */}

              <a
                href="#"
                className={socialClass}
                aria-label="Instagram"
              >
                ◎
              </a>

              {/* YouTube */}

              <a
                href="#"
                className={socialClass}
                aria-label="YouTube"
              >
                ▶
              </a>

            </div>
          </div>

          {/* ==========================================
              EXPLORE
          ========================================== */}

          <div>
            <h3
              className={`text-sm font-semibold ${
                isDark
                  ? "text-white"
                  : "text-[#17130d]"
              }`}
            >
              {t.explore}
            </h3>

            <ul className="mt-5 space-y-3">

              {/* Home */}

              <li>
                <button
                  onClick={goHome}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.home}
                </button>
              </li>

              {/* Horoscope */}

              <li>
                <button
                  onClick={goToHoroscope}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.horoscope}
                </button>
              </li>

              {/* Zodiac */}

              <li>
                <button
                  onClick={goToZodiac}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.zodiac}
                </button>
              </li>

            </ul>
          </div>

          {/* ==========================================
              COMPANY
          ========================================== */}

          <div>
            <h3
              className={`text-sm font-semibold ${
                isDark
                  ? "text-white"
                  : "text-[#17130d]"
              }`}
            >
              {t.company}
            </h3>

            <ul className="mt-5 space-y-3">

              {/* About */}

              <li>
                <button
                  onClick={() => goToSection("about")}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.about}
                </button>
              </li>

              {/* Reviews */}

              <li>
                <button
                  onClick={() => goToSection("reviews")}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.reviews}
                </button>
              </li>

              {/* Contact */}

              <li>
                <button
                  onClick={goToContact}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.contact}
                </button>
              </li>

            </ul>
          </div>

          {/* ==========================================
              SERVICES
          ========================================== */}

          <div>
            <h3
              className={`text-sm font-semibold ${
                isDark
                  ? "text-white"
                  : "text-[#17130d]"
              }`}
            >
              {t.services}
            </h3>

            <ul className="mt-5 space-y-3">

              {/* Personal Horoscope */}

              <li>
                <button
                  onClick={goToHoroscope}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.personal}
                </button>
              </li>

              {/* Guidance */}

              <li>
                <button
                  onClick={goToHoroscope}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.guidance}
                </button>
              </li>

              {/* Compatibility */}

              <li>
                <button
                  onClick={goToHoroscope}
                  className={`text-left text-sm ${linkClass}`}
                >
                  {t.compatibility}
                </button>
              </li>

            </ul>
          </div>
        </div>

        {/* ==========================================
            BOTTOM
        ========================================== */}

        <div
          className={`mt-12 flex flex-col gap-4 border-t pt-6 sm:mt-14 sm:pt-7 md:flex-row md:items-center md:justify-between ${
            isDark
              ? "border-white/5"
              : "border-black/10"
          }`}
        >

          {/* Copyright */}

          <p
            className={`text-center text-[11px] leading-5 sm:text-xs md:text-left ${
              isDark
                ? "text-white/30"
                : "text-black/35"
            }`}
          >
            © {new Date().getFullYear()} TharuRahas.{" "}
            {t.rights}
          </p>

          {/* Tagline */}

          <p className="text-center text-[11px] leading-5 text-[#d6ad55]/70 sm:text-xs md:text-right">
            ✦ {t.tagline}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;