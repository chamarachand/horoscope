import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ language, setLanguage, theme, setTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const content = {
    en: {
      home: "Home",
      panchanga: "Panchanga",
      horoscope: "Horoscope",
      zodiac: "Zodiac Signs",
      about: "About Us",
      reviews: "Reviews",
      contact: "Contact",
    },
    si: {
      home: "මුල් පිටුව",
      panchanga: "පංචාංගය",
      horoscope: "කේන්දරය",
      zodiac: "රාශි",
      about: "අප ගැන",
      reviews: "විචාර",
      contact: "සම්බන්ධ වන්න",
    },
  };

  const t = content[language] || content.si;

  // Restore the saved language whenever the page changes.
  useEffect(() => {
    const savedLanguage = localStorage.getItem("tharuRahasLanguage");

    if (
      (savedLanguage === "en" || savedLanguage === "si") &&
      savedLanguage !== language
    ) {
      setLanguage(savedLanguage);
    }
  }, [location.pathname, language, setLanguage]);

  // Save the selected language and update the current page.
  const changeLanguage = (newLanguage) => {
    localStorage.setItem("tharuRahasLanguage", newLanguage);
    setLanguage(newLanguage);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigateTo = (path) => {
    closeMobileMenu();
    navigate(path);

    setTimeout(scrollToTop, 100);
  };

  const goToSection = (id) => {
    closeMobileMenu();

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  const desktopLink = (active) =>
    `whitespace-nowrap text-sm transition ${
      active
        ? "text-[#d6ad55]"
        : isDark
        ? "text-white/60 hover:text-[#d6ad55]"
        : "text-black/55 hover:text-[#a8791f]"
    }`;

  const mobileLink = (active) =>
    `flex items-center justify-between border-b py-4 text-left text-sm transition ${
      isDark ? "border-white/5" : "border-black/5"
    } ${
      active
        ? "text-[#d6ad55]"
        : isDark
        ? "text-white/70"
        : "text-black/60"
    }`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
        isDark
          ? "border-white/5 bg-[#05030b]/85"
          : "border-black/5 bg-white/90"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">
        {/* LOGO */}
        <button
          onClick={() => navigateTo("/")}
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
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              Tharu<span className="text-[#d6ad55]">Rahas</span>
            </h1>

            <p
              className={`text-[8px] uppercase tracking-[2px] sm:text-[9px] sm:tracking-[3px] ${
                isDark ? "text-white/40" : "text-black/40"
              }`}
            >
              තරු රහස්
            </p>
          </div>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          <button
            onClick={() => navigateTo("/")}
            className={desktopLink(location.pathname === "/")}
          >
            {t.home}
          </button>

          <button
            onClick={() => navigateTo("/panchanga")}
            className={desktopLink(location.pathname === "/panchanga")}
          >
            {t.panchanga}
          </button>

          <button
            onClick={() => navigateTo("/horoscope")}
            className={desktopLink(
              location.pathname === "/horoscope" ||
                location.pathname === "/horoscope/result"
            )}
          >
            {t.horoscope}
          </button>

          <button
            onClick={() => navigateTo("/zodiac")}
            className={desktopLink(location.pathname === "/zodiac")}
          >
            {t.zodiac}
          </button>

          <button
            onClick={() => goToSection("about")}
            className={desktopLink(false)}
          >
            {t.about}
          </button>

          <button
            onClick={() => goToSection("reviews")}
            className={desktopLink(false)}
          >
            {t.reviews}
          </button>

          <button
            onClick={() => navigateTo("/contact")}
            className={desktopLink(location.pathname === "/contact")}
          >
            {t.contact}
          </button>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* THEME BUTTON */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition duration-300 sm:h-10 sm:w-10 ${
              isDark
                ? "border-white/10 bg-white/5 hover:border-[#d6ad55]/40"
                : "border-black/10 bg-black/5 hover:border-[#d6ad55]/50"
            }`}
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
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
              onClick={() => changeLanguage("si")}
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
              onClick={() => changeLanguage("en")}
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
              changeLanguage(language === "si" ? "en" : "si")
            }
            className={`flex h-9 min-w-9 items-center justify-center rounded-full border px-2 text-xs font-semibold transition sm:hidden ${
              isDark
                ? "border-white/10 bg-white/5 text-white/70"
                : "border-black/10 bg-black/5 text-black/60"
            }`}
          >
            {language === "si" ? "EN" : "සිං"}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                } ${isDark ? "bg-white" : "bg-black"}`}
              />

              <span
                className={`block h-0.5 w-5 transition duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                } ${isDark ? "bg-white" : "bg-black"}`}
              />

              <span
                className={`block h-0.5 w-5 transition duration-300 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                } ${isDark ? "bg-white" : "bg-black"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        } ${
          isDark
            ? "border-white/5 bg-[#05030b]/95"
            : "border-black/5 bg-white/95"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 pb-5 pt-3 sm:px-5">
          <button
            onClick={() => navigateTo("/")}
            className={mobileLink(location.pathname === "/")}
          >
            <span>{t.home}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => navigateTo("/panchanga")}
            className={mobileLink(location.pathname === "/panchanga")}
          >
            <span>{t.panchanga}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => navigateTo("/horoscope")}
            className={mobileLink(
              location.pathname === "/horoscope" ||
                location.pathname === "/horoscope/result"
            )}
          >
            <span>{t.horoscope}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => navigateTo("/zodiac")}
            className={mobileLink(location.pathname === "/zodiac")}
          >
            <span>{t.zodiac}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => goToSection("about")}
            className={mobileLink(false)}
          >
            <span>{t.about}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => goToSection("reviews")}
            className={mobileLink(false)}
          >
            <span>{t.reviews}</span>
            <span>→</span>
          </button>

          <button
            onClick={() => navigateTo("/contact")}
            className={mobileLink(location.pathname === "/contact")}
          >
            <span>{t.contact}</span>
            <span>→</span>
          </button>

          {/* MOBILE LANGUAGE SWITCH */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => changeLanguage("si")}
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
              onClick={() => changeLanguage("en")}
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