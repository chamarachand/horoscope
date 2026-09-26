import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({
  language,
  setLanguage,
  theme,
  setTheme,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === "dark";

  const content = {
    en: {
      home: "Home",
      horoscope: "Horoscope",
      zodiac: "Zodiac Signs",
      about: "About Us",
      reviews: "Reviews",
      contact: "Contact",
    },

    si: {
      home: "මුල් පිටුව",
      horoscope: "කේන්දරය",
      zodiac: "රාශි",
      about: "අප ගැන",
      reviews: "විචාර",
      contact: "සම්බන්ධ වන්න",
    },
  };

  const t = content[language];

  // ==========================================
  // CLOSE MOBILE MENU
  // ==========================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // ==========================================
  // GO TO HOME
  // ==========================================

  const goHome = () => {
    closeMobileMenu();

    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // ==========================================
  // GO TO ZODIAC
  // ==========================================

  const goToZodiac = () => {
    closeMobileMenu();

    navigate("/zodiac");

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
    closeMobileMenu();

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
  // GO TO HOROSCOPE
  // ==========================================

  const goToHoroscope = () => {
    closeMobileMenu();

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
    closeMobileMenu();

    navigate("/contact");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  // ==========================================
  // ACTIVE CLASSES
  // ==========================================

  const desktopLink = (active) => {
    if (active) {
      return "whitespace-nowrap text-sm text-[#d6ad55] transition";
    }

    return `whitespace-nowrap text-sm transition ${
      isDark
        ? "text-white/60 hover:text-[#d6ad55]"
        : "text-black/55 hover:text-[#a8791f]"
    }`;
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
        isDark
          ? "border-white/5 bg-[#05030b]/85"
          : "border-black/5 bg-white/90"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">

        {/* ==========================================
            LOGO
        ========================================== */}

        <button
          onClick={goHome}
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition sm:h-10 sm:w-10 sm:text-xl ${
              isDark
                ? "border-[#d6ad55]/30 bg-[#d6ad55]/10 text-[#d6ad55]"
                : "border-[#d6ad55]/40 bg-[#d6ad55]/10 text-[#a8791f]"
            }`}
          >
            ✦
          </div>

          <div className="min-w-0 text-left">
            <h1
              className={`truncate text-lg font-bold tracking-wide transition-colors sm:text-xl ${
                isDark
                  ? "text-white"
                  : "text-[#17130d]"
              }`}
            >
              Tharu
              <span className="text-[#d6ad55]">
                Rahas
              </span>
            </h1>

            <p
              className={`text-[8px] uppercase tracking-[2px] sm:text-[9px] sm:tracking-[3px] ${
                isDark
                  ? "text-white/40"
                  : "text-black/40"
              }`}
            >
              තරු රහස්
            </p>
          </div>
        </button>

        {/* ==========================================
            DESKTOP NAVIGATION
        ========================================== */}

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">

          {/* HOME */}

          <button
            onClick={goHome}
            className={desktopLink(
              location.pathname === "/"
            )}
          >
            {t.home}
          </button>

          {/* HOROSCOPE */}

          <button
            onClick={goToHoroscope}
            className={desktopLink(
              location.pathname === "/horoscope" ||
              location.pathname === "/horoscope/result"
            )}
          >
            {t.horoscope}
          </button>

          {/* ZODIAC */}

          <button
            onClick={goToZodiac}
            className={desktopLink(
              location.pathname === "/zodiac"
            )}
          >
            {t.zodiac}
          </button>

          {/* ABOUT */}

          <button
            onClick={() => goToSection("about")}
            className={desktopLink(false)}
          >
            {t.about}
          </button>

          {/* REVIEWS */}

          <button
            onClick={() => goToSection("reviews")}
            className={desktopLink(false)}
          >
            {t.reviews}
          </button>

          {/* CONTACT */}

          <button
            onClick={goToContact}
            className={desktopLink(
              location.pathname === "/contact"
            )}
          >
            {t.contact}
          </button>
        </nav>

        {/* ==========================================
            RIGHT SIDE
        ========================================== */}

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

          {/* THEME BUTTON */}

          <button
            onClick={() =>
              setTheme(isDark ? "light" : "dark")
            }
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition duration-300 sm:h-10 sm:w-10 ${
              isDark
                ? "border-white/10 bg-white/5 hover:border-[#d6ad55]/40"
                : "border-black/10 bg-black/5 hover:border-[#d6ad55]/50"
            }`}
            aria-label="Toggle theme"
            title={
              isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* DESKTOP LANGUAGE */}

          <div
            className={`hidden items-center gap-1 rounded-full border p-1 sm:flex ${
              isDark
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-black/5"
            }`}
          >
            <button
              onClick={() => setLanguage("si")}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                language === "si"
                  ? "bg-[#d6ad55] font-semibold text-[#100b05]"
                  : isDark
                  ? "text-white/50 hover:text-white"
                  : "text-black/50 hover:text-black"
              }`}
            >
              සිංහල
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                language === "en"
                  ? "bg-[#d6ad55] font-semibold text-[#100b05]"
                  : isDark
                  ? "text-white/50 hover:text-white"
                  : "text-black/50 hover:text-black"
              }`}
            >
              EN
            </button>
          </div>

          {/* MOBILE LANGUAGE */}

          <button
            onClick={() =>
              setLanguage(
                language === "si" ? "en" : "si"
              )
            }
            className={`flex h-9 min-w-9 items-center justify-center rounded-full border px-2 text-xs font-semibold transition sm:hidden ${
              isDark
                ? "border-white/10 bg-white/5 text-white/70"
                : "border-black/10 bg-black/5 text-black/60"
            }`}
          >
            {language === "si" ? "EN" : "සිං"}
          </button>

          {/* ==========================================
              MOBILE MENU BUTTON
          ========================================== */}

          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition lg:hidden ${
              isDark
                ? "border-white/10 bg-white/5 text-white hover:border-[#d6ad55]/40"
                : "border-black/10 bg-black/5 text-black hover:border-[#d6ad55]/50"
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="flex flex-col gap-1.5">

              <span
                className={`block h-0.5 w-5 transition duration-300 ${
                  mobileMenuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                } ${
                  isDark
                    ? "bg-white"
                    : "bg-black"
                }`}
              />

              <span
                className={`block h-0.5 w-5 transition duration-300 ${
                  mobileMenuOpen
                    ? "opacity-0"
                    : "opacity-100"
                } ${
                  isDark
                    ? "bg-white"
                    : "bg-black"
                }`}
              />

              <span
                className={`block h-0.5 w-5 transition duration-300 ${
                  mobileMenuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                } ${
                  isDark
                    ? "bg-white"
                    : "bg-black"
                }`}
              />

            </div>
          </button>
        </div>
      </div>

      {/* ==========================================
          MOBILE MENU
      ========================================== */}

      <div
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        } ${
          isDark
            ? "border-white/5 bg-[#05030b]/95"
            : "border-black/5 bg-white/95"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 pb-5 pt-3 sm:px-5">

          {/* HOME */}

          <button
            onClick={goHome}
            className={`flex items-center justify-between border-b py-4 text-left text-sm ${
              isDark
                ? "border-white/5"
                : "border-black/5"
            } ${
              location.pathname === "/"
                ? "text-[#d6ad55]"
                : isDark
                ? "text-white/70"
                : "text-black/60"
            }`}
          >
            <span>{t.home}</span>
            <span>→</span>
          </button>

          {/* HOROSCOPE */}

          <button
            onClick={goToHoroscope}
            className={`flex items-center justify-between border-b py-4 text-left text-sm ${
              isDark
                ? "border-white/5"
                : "border-black/5"
            } ${
              location.pathname === "/horoscope" ||
              location.pathname === "/horoscope/result"
                ? "text-[#d6ad55]"
                : isDark
                ? "text-white/70"
                : "text-black/60"
            }`}
          >
            <span>{t.horoscope}</span>
            <span>→</span>
          </button>

          {/* ZODIAC */}

          <button
            onClick={goToZodiac}
            className={`flex items-center justify-between border-b py-4 text-left text-sm ${
              isDark
                ? "border-white/5"
                : "border-black/5"
            } ${
              location.pathname === "/zodiac"
                ? "text-[#d6ad55]"
                : isDark
                ? "text-white/70"
                : "text-black/60"
            }`}
          >
            <span>{t.zodiac}</span>
            <span>→</span>
          </button>

          {/* ABOUT */}

          <button
            onClick={() => goToSection("about")}
            className={`flex items-center justify-between border-b py-4 text-left text-sm ${
              isDark
                ? "border-white/5 text-white/70"
                : "border-black/5 text-black/60"
            }`}
          >
            <span>{t.about}</span>
            <span>→</span>
          </button>

          {/* REVIEWS */}

          <button
            onClick={() => goToSection("reviews")}
            className={`flex items-center justify-between border-b py-4 text-left text-sm ${
              isDark
                ? "border-white/5 text-white/70"
                : "border-black/5 text-black/60"
            }`}
          >
            <span>{t.reviews}</span>
            <span>→</span>
          </button>

          {/* CONTACT */}

          <button
            onClick={goToContact}
            className={`flex items-center justify-between py-4 text-left text-sm ${
              location.pathname === "/contact"
                ? "text-[#d6ad55]"
                : isDark
                ? "text-white/70"
                : "text-black/60"
            }`}
          >
            <span>{t.contact}</span>
            <span>→</span>
          </button>

          {/* MOBILE LANGUAGE SWITCH */}

          <div className="mt-4 flex gap-2">

            <button
              onClick={() => setLanguage("si")}
              className={`flex-1 rounded-xl border py-3 text-sm transition ${
                language === "si"
                  ? "border-[#d6ad55]/40 bg-[#d6ad55]/10 text-[#d6ad55]"
                  : isDark
                  ? "border-white/10 bg-white/5 text-white/50"
                  : "border-black/10 bg-black/5 text-black/50"
              }`}
            >
              සිංහල
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 rounded-xl border py-3 text-sm transition ${
                language === "en"
                  ? "border-[#d6ad55]/40 bg-[#d6ad55]/10 text-[#d6ad55]"
                  : isDark
                  ? "border-white/10 bg-white/5 text-white/50"
                  : "border-black/10 bg-black/5 text-black/50"
              }`}
            >
              English
            </button>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;