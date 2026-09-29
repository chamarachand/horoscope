import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../newComponents/NavBar";
import Footer from "../newComponents/Footer";

const API_URL = "https://horoscope-rose.vercel.app/horoscope/predict";

const districts = [
  { value: "colombo", en: "Colombo", si: "කොළඹ" },
  { value: "gampaha", en: "Gampaha", si: "ගම්පහ" },
  { value: "kalutara", en: "Kalutara", si: "කළුතර" },
  { value: "kandy", en: "Kandy", si: "මහනුවර" },
  { value: "matale", en: "Matale", si: "මාතලේ" },
  { value: "nuwaraEliya", en: "Nuwara Eliya", si: "නුවරඑළිය" },
  { value: "galle", en: "Galle", si: "ගාල්ල" },
  { value: "matara", en: "Matara", si: "මාතර" },
  { value: "hambantota", en: "Hambantota", si: "හම්බන්තොට" },
  { value: "jaffna", en: "Jaffna", si: "යාපනය" },
  { value: "kilinochchi", en: "Kilinochchi", si: "කිලිනොච්චි" },
  { value: "mannar", en: "Mannar", si: "මන්නාරම" },
  { value: "vavuniya", en: "Vavuniya", si: "වවුනියාව" },
  { value: "mullaitivu", en: "Mullaitivu", si: "මුලතිව්" },
  { value: "batticaloa", en: "Batticaloa", si: "මඩකලපුව" },
  { value: "ampara", en: "Ampara", si: "අම්පාර" },
  { value: "trincomalee", en: "Trincomalee", si: "ත්‍රිකුණාමලය" },
  { value: "kurunegala", en: "Kurunegala", si: "කුරුණෑගල" },
  { value: "puttalam", en: "Puttalam", si: "පුත්තලම" },
  { value: "anuradhapura", en: "Anuradhapura", si: "අනුරාධපුර" },
  { value: "polonnaruwa", en: "Polonnaruwa", si: "පොළොන්නරුව" },
  { value: "badulla", en: "Badulla", si: "බදුල්ල" },
  { value: "monaragala", en: "Monaragala", si: "මොනරාගල" },
  { value: "ratnapura", en: "Ratnapura", si: "රත්නපුර" },
  { value: "kegalle", en: "Kegalle", si: "කෑගල්ල" },
];

const zodiacSigns = [
  { value: "aries", en: "Aries", si: "මේෂ" },
  { value: "taurus", en: "Taurus", si: "වෘෂභ" },
  { value: "gemini", en: "Gemini", si: "මිථුන" },
  { value: "cancer", en: "Cancer", si: "කටක" },
  { value: "leo", en: "Leo", si: "සිංහ" },
  { value: "virgo", en: "Virgo", si: "කන්‍යා" },
  { value: "libra", en: "Libra", si: "තුලා" },
  { value: "scorpio", en: "Scorpio", si: "වෘශ්චික" },
  { value: "sagittarius", en: "Sagittarius", si: "ධනු" },
  { value: "capricorn", en: "Capricorn", si: "මකර" },
  { value: "aquarius", en: "Aquarius", si: "කුම්භ" },
  { value: "pisces", en: "Pisces", si: "මීන" },
];

const translations = {
  en: {
    eyebrow: "PERSONAL ASTROLOGY",
    title: "Discover Your Horoscope",
    subtitle:
      "Share your birth details to receive your personalised horoscope reading.",
    name: "Full Name",
    namePlaceholder: "Enter your name",
    birthDate: "Date of Birth",
    birthTime: "Time of Birth",
    birthPlace: "Birth Place",
    birthPlacePlaceholder: "Enter your birth place",
    district: "Birth District",
    cityArea: "City / Area",
    cityAreaPlaceholder: "Enter your city or area",
    gender: "Gender",
    selectGender: "Select gender",
    male: "Male",
    female: "Female",
    other: "Other",
    sign: "Zodiac Sign",
    selectSign: "Select zodiac sign",
    topic: "What would you like to know?",
    selectTopic: "Select a topic",
    general: "General Horoscope",
    love: "Love & Relationships",
    career: "Career & Education",
    finance: "Finance & Wealth",
    health: "Health & Wellbeing",
    submit: "Generate My Horoscope",
    loadingTitle: "The Stars Are Aligning",
    loadingDescription:
      "Please wait while we prepare your personalised horoscope reading.",
    loadingNote: "This may take a few moments...",
    errorTitle: "Unable to generate horoscope",
    tryAgain: "Please try again.",
    required: "Please complete all required fields.",
    disclaimer:
      "Astrology readings are for general information and entertainment. They are not guaranteed predictions or a substitute for professional advice.",
  },

  si: {
    eyebrow: "පුද්ගලික ජ්‍යොතිෂය",
    title: "ඔබේ හඳහන සොයාගන්න",
    subtitle: "ඔබේ උපන් තොරතුරු ලබාදී පුද්ගලික හඳහනක් ලබාගන්න.",
    name: "සම්පූර්ණ නම",
    namePlaceholder: "ඔබේ නම ඇතුළත් කරන්න",
    birthDate: "උපන් දිනය",
    birthTime: "උපන් වේලාව",
    birthPlace: "උපන් ස්ථානය",
    birthPlacePlaceholder: "උපන් ස්ථානය ඇතුළත් කරන්න",
    district: "උපන් දිස්ත්‍රික්කය",
    cityArea: "නගරය / ප්‍රදේශය",
    cityAreaPlaceholder: "නගරය හෝ ප්‍රදේශය ඇතුළත් කරන්න",
    gender: "ස්ත්‍රී පුරුෂ භාවය",
    selectGender: "තෝරන්න",
    male: "පුරුෂ",
    female: "ස්ත්‍රී",
    other: "වෙනත්",
    sign: "රාශිය",
    selectSign: "රාශිය තෝරන්න",
    topic: "ඔබ දැනගැනීමට කැමති කුමක්ද?",
    selectTopic: "මාතෘකාව තෝරන්න",
    general: "සාමාන්‍ය හඳහන",
    love: "ආදරය සහ සබඳතා",
    career: "රැකියාව සහ අධ්‍යාපනය",
    finance: "මුදල් සහ ධනය",
    health: "සෞඛ්‍යය සහ යහපැවැත්ම",
    submit: "මගේ හඳහන ලබාගන්න",
    loadingTitle: "තරු එක පෙළට සකස් වෙමින්...",
    loadingDescription:
      "ඔබේ පුද්ගලික හඳහන සකස් කරමින් පවතී. කරුණාකර මොහොතක් රැඳී සිටින්න.",
    loadingNote: "මෙයට සුළු වේලාවක් ගත විය හැකියි...",
    errorTitle: "හඳහන ලබාගත නොහැක",
    tryAgain: "කරුණාකර නැවත උත්සාහ කරන්න.",
    required: "කරුණාකර අවශ්‍ය සියලු තොරතුරු පුරවන්න.",
    disclaimer:
      "ජ්‍යොතිෂ කියවීම් සාමාන්‍ය තොරතුරු සහ විනෝදාස්වාදය සඳහා පමණි. ඒවා සහතික කළ අනාවැකි හෝ වෘත්තීය උපදෙස් සඳහා ආදේශකයක් නොවේ.",
  },
};

const HoroscopePage = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("si");
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    sign: "",
    gender: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    district: "",
    cityArea: "",
    topic: "",
  });

  const isDark = theme === "dark";
  const t = translations[language] || translations.si;

  const inputClass = `w-full rounded-xl border px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 ${
    isDark
      ? "border-white/10 bg-[#100c19] text-white placeholder:text-gray-500"
      : "border-[#e4d8bd] bg-[#faf8f2] text-[#17130d] placeholder:text-gray-400"
  }`;

  const labelClass = `mb-2 block text-sm font-medium ${
    isDark ? "text-gray-300" : "text-[#51452f]"
  }`;

  const cardClass = isDark
    ? "border border-white/10 bg-white/[0.04] text-white"
    : "border border-[#d9cba9] bg-white text-[#17130d]";

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Convert a 24-hour time such as 14:30 to 02:30 PM for the API.
  const formatTimeForApi = (time) => {
    if (!time) return "";

    const [hours, minutes] = time.split(":");
    const hour = Number(hours);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;

    return `${String(formattedHour).padStart(2, "0")}:${minutes} ${period}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (
      !formData.name.trim() ||
      !formData.sign ||
      !formData.gender ||
      !formData.birthDate ||
      !formData.birthTime ||
      !formData.district
    ) {
      setError(t.required);
      return;
    }

    const selectedDistrict = districts.find(
      (district) => district.value === formData.district
    );

    const districtName = selectedDistrict
      ? selectedDistrict[language] || selectedDistrict.en
      : formData.district;

    const birthDistrict = [
      districtName,
      formData.cityArea.trim() || formData.birthPlace.trim(),
    ]
      .filter(Boolean)
      .join(", ");

    const payload = {
      name: formData.name.trim(),
      sign: formData.sign,
      gender: formData.gender,
      birthDate: formData.birthDate,
      birthTime: formatTimeForApi(formData.birthTime),
      birthDistrict,
    };

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      let result;

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        result = { message: responseText };
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
            result.error ||
            `Request failed with status ${response.status}`
        );
      }

      navigate("/horoscope/result", {
        state: {
          horoscopeData: {
            ...formData,
            birthDistrict,
            birthTime: payload.birthTime,
          },
          prediction: result,
          language,
          theme,
        },
      });
    } catch (err) {
      console.error("Horoscope API error:", err);
      setError(err.message || t.tryAgain);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark
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

      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
              ✦ {t.eyebrow} ✦
            </p>

            <h1
              className={`mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.title}
            </h1>

            <p
              className={`mx-auto max-w-2xl text-sm leading-7 sm:text-base ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t.subtitle}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl p-5 shadow-2xl sm:p-8 lg:p-10 ${cardClass}`}
          >
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {/* Full name */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  {t.name} *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  placeholder={t.namePlaceholder}
                  className={inputClass}
                  autoComplete="name"
                  required
                />
              </div>

              {/* Date of birth: user can type or select from calendar */}
              <div>
                <label htmlFor="birthDate" className={labelClass}>
                  {t.birthDate} *
                </label>
                <input
                  id="birthDate"
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={updateField}
                  className={`${inputClass} [color-scheme:dark]`}
                  required
                />
              </div>

              {/* Time of birth: user can type or select from clock */}
              <div>
                <label htmlFor="birthTime" className={labelClass}>
                  {t.birthTime} *
                </label>
                <input
                  id="birthTime"
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={updateField}
                  className={`${inputClass} [color-scheme:dark]`}
                  step="60"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className={labelClass}>
                  {t.gender} *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={updateField}
                  className={inputClass}
                  required
                >
                  <option value="">{t.selectGender}</option>
                  <option value="Male">{t.male}</option>
                  <option value="Female">{t.female}</option>
                  <option value="Other">{t.other}</option>
                </select>
              </div>

              {/* Zodiac sign */}
              <div>
                <label htmlFor="sign" className={labelClass}>
                  {t.sign} *
                </label>
                <select
                  id="sign"
                  name="sign"
                  value={formData.sign}
                  onChange={updateField}
                  className={inputClass}
                  required
                >
                  <option value="">{t.selectSign}</option>
                  {zodiacSigns.map((sign) => (
                    <option key={sign.value} value={sign.value}>
                      {language === "si" ? sign.si : sign.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div>
                <label htmlFor="district" className={labelClass}>
                  {t.district} *
                </label>
                <select
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={updateField}
                  className={inputClass}
                  required
                >
                  <option value="">{t.district}</option>
                  {districts.map((district) => (
                    <option key={district.value} value={district.value}>
                      {language === "si" ? district.si : district.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* City / Area */}
              <div>
                <label htmlFor="cityArea" className={labelClass}>
                  {t.cityArea}
                </label>
                <input
                  id="cityArea"
                  type="text"
                  name="cityArea"
                  value={formData.cityArea}
                  onChange={updateField}
                  placeholder={t.cityAreaPlaceholder}
                  className={inputClass}
                />
              </div>

              {/* Birth place */}
              <div>
                <label htmlFor="birthPlace" className={labelClass}>
                  {t.birthPlace}
                </label>
                <input
                  id="birthPlace"
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={updateField}
                  placeholder={t.birthPlacePlaceholder}
                  className={inputClass}
                />
              </div>

              {/* Topic */}
              <div className="sm:col-span-2">
                <label htmlFor="topic" className={labelClass}>
                  {t.topic}
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={updateField}
                  className={inputClass}
                >
                  <option value="">{t.selectTopic}</option>
                  <option value="general">{t.general}</option>
                  <option value="love">{t.love}</option>
                  <option value="career">{t.career}</option>
                  <option value="finance">{t.finance}</option>
                  <option value="health">{t.health}</option>
                </select>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-500"
              >
                <strong>{t.errorTitle}:</strong> {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-4 font-semibold text-[#17100a] shadow-lg shadow-amber-500/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              ✦ {t.submit} ✦
            </button>

            <p
              className={`mt-5 text-center text-xs leading-6 ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              {t.disclaimer}
            </p>
          </form>
        </section>
      </main>

      <Footer language={language} theme={theme} />

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05030b]/95 px-5 backdrop-blur-md">
          <div className="w-full max-w-md text-center">
            <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-amber-500/20 border-t-amber-400" />
              <div className="absolute inset-3 animate-[spin_4s_linear_infinite_reverse] rounded-full border border-purple-400/40 border-b-purple-300" />
              <span className="text-5xl text-amber-400">✦</span>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              THARURAHAS
            </p>

            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t.loadingTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/60">
              {t.loadingDescription}
            </p>

            <div className="mx-auto mt-7 flex justify-center gap-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400 [animation-delay:150ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-amber-400 [animation-delay:300ms]" />
            </div>

            <p className="mt-5 text-xs text-white/40">{t.loadingNote}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoroscopePage;