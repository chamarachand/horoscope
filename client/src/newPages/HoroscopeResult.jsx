import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HoroscopeResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const horoscopeData = location.state?.horoscopeData;
  const prediction =
    location.state?.prediction ||
    location.state?.horoscopePrediction ||
    null;

  const language = location.state?.language || "si";
  const isSinhala = language === "si";

  const text = {
    brand: "THARURAHAS",

    title: isSinhala
      ? "ඔබේ කේන්දර තොරතුරු"
      : "Your Horoscope Reading",

    subtitle: isSinhala
      ? "ඔබ ලබාදුන් උපන් තොරතුරු"
      : "Your submitted birth details",

    birthDetails: isSinhala
      ? "උපන් තොරතුරු"
      : "Birth Details",

    name: isSinhala ? "නම" : "Name",

    gender: isSinhala
      ? "ස්ත්‍රී / පුරුෂ භාවය"
      : "Gender",

    birthDate: isSinhala
      ? "උපන් දිනය"
      : "Date of Birth",

    birthTime: isSinhala
      ? "උපන් වේලාව"
      : "Time of Birth",

    birthPlace: isSinhala
      ? "උපන් ස්ථානය"
      : "Place of Birth",

    district: isSinhala
      ? "දිස්ත්‍රික්කය"
      : "District",

    sign: isSinhala
      ? "රාශිය"
      : "Zodiac Sign",

    topic: isSinhala
      ? "අවශ්‍ය කරුණ"
      : "Topic",

    prediction: isSinhala
      ? "ඔබේ හඳහන"
      : "Your Horoscope Prediction",

    noPrediction: isSinhala
      ? "තවමත් අනාවැකි තොරතුරු ලැබී නොමැත."
      : "No prediction has been received yet.",

    noData: isSinhala
      ? "කේන්දර තොරතුරු සොයාගත නොහැක."
      : "No horoscope information found.",

    goBack: isSinhala
      ? "ආපසු යන්න"
      : "Go Back",

    home: isSinhala
      ? "මුල් පිටුවට"
      : "Back to Home",

    newReading: isSinhala
      ? "නව හඳහනක් ලබාගන්න"
      : "Get Another Horoscope",

    disclaimer: isSinhala
      ? "මෙම ජ්‍යොතිෂ කියවීම සාමාන්‍ය තොරතුරු සහ විනෝදාස්වාදය සඳහා පමණි. මෙය අනාගතය පිළිබඳ සහතික කළ අනාවැකියක් නොවේ. AI මඟින් ජනනය කරන ලද තොරතුරුවල වැරදි හෝ සාවද්‍ය කරුණු තිබිය හැක."
      : "This astrology reading is for general information and entertainment only. It is not a guaranteed prediction of the future. AI-generated information may contain errors or inaccuracies.",
  };

  const displayValue = (value) => {
    if (value === null || value === undefined || value === "") {
      return "—";
    }

    return String(value);
  };

  const getGender = (gender) => {
    if (!gender) return "—";

    if (!isSinhala) return displayValue(gender);

    const genderValue = String(gender).toLowerCase();

    if (
      genderValue === "male" ||
      genderValue === "මැle"
    ) {
      return "පුරුෂ";
    }

    if (
      genderValue === "female"
    ) {
      return "ස්ත්‍රී";
    }

    return displayValue(gender);
  };

  const getTopic = (topic) => {
    if (!topic) return "—";

    if (!isSinhala) return displayValue(topic);

    const topics = {
      love: "ආදරය සහ විවාහය",
      marriage: "විවාහය",
      career: "රැකියාව සහ වෘත්තීය ජීවිතය",
      education: "අධ්‍යාපනය",
      health: "සෞඛ්‍යය",
      finance: "මුදල් සහ ආර්ථිකය",
      family: "පවුල් ජීවිතය",
      general: "සාමාන්‍ය ජීවිතය",
    };

    return topics[String(topic).toLowerCase()] || displayValue(topic);
  };

  const getSign = (sign) => {
    if (!sign) return "—";

    if (!isSinhala) return displayValue(sign);

    const signs = {
      aries: "මේෂ",
      taurus: "වෘෂභ",
      gemini: "මිථුන",
      cancer: "කටක",
      leo: "සිංහ",
      virgo: "කන්‍යා",
      libra: "තුලා",
      scorpio: "වෘශ්චික",
      sagittarius: "ධනු",
      capricorn: "මකර",
      aquarius: "කුම්භ",
      pisces: "මීන",
    };

    return signs[String(sign).toLowerCase()] || displayValue(sign);
  };

  const renderPrediction = (value) => {
    if (value === null || value === undefined || value === "") {
      return (
        <p className="text-white/50">
          {text.noPrediction}
        </p>
      );
    }

    if (typeof value === "string" || typeof value === "number") {
      return (
        <p className="whitespace-pre-wrap leading-8 text-white/85">
          {String(value)}
        </p>
      );
    }

    if (Array.isArray(value)) {
      return (
        <div className="space-y-4">
          {value.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-black/20 p-4"
            >
              {renderPrediction(item)}
            </div>
          ))}
        </div>
      );
    }

    if (typeof value === "object") {
      return (
        <div className="space-y-5">
          {Object.entries(value).map(([key, item]) => {
            if (item === null || item === undefined) {
              return null;
            }

            const labels = isSinhala
              ? {
                  overview: "සමස්ත විශ්ලේෂණය",
                  general: "සාමාන්‍ය විශ්ලේෂණය",
                  love: "ආදරය සහ සබඳතා",
                  marriage: "විවාහය",
                  career: "රැකියාව සහ වෘත්තීය ජීවිතය",
                  education: "අධ්‍යාපනය",
                  health: "සෞඛ්‍යය",
                  finance: "මුදල් සහ ආර්ථිකය",
                  family: "පවුල් ජීවිතය",
                  personality: "පෞරුෂය",
                  strengths: "ශක්තීන්",
                  challenges: "අභියෝග",
                  advice: "උපදෙස්",
                  prediction: "අනාවැකිය",
                  conclusion: "නිගමනය",
                  summary: "සාරාංශය",
                  luckyNumber: "වාසනාවන්ත අංකය",
                  luckyColor: "වාසනාවන්ත වර්ණය",
                  luckyDay: "වාසනාවන්ත දිනය",
                  recommendations: "නිර්දේශ",
                }
              : {};

            const label =
              labels[key] ||
              key
                .replace(/([A-Z])/g, " $1")
                .replace(/[_-]/g, " ")
                .replace(/^./, (character) =>
                  character.toUpperCase()
                );

            return (
              <div
                key={key}
                className="rounded-xl border border-white/10 bg-black/20 p-5"
              >
                <h3 className="mb-3 font-semibold text-[#d6ad55]">
                  {label}
                </h3>

                {renderPrediction(item)}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <p className="text-white/85">
        {String(value)}
      </p>
    );
  };

  if (!horoscopeData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#05030b] px-5 text-white">
        <div className="text-center">
          <p className="mb-4 text-3xl text-[#d6ad55]">
            ✦
          </p>

          <h1 className="text-2xl font-bold">
            {text.noData}
          </h1>

          <button
            type="button"
            onClick={() => navigate("/horoscope")}
            className="mt-6 rounded-xl bg-[#d6ad55] px-6 py-3 font-semibold text-black transition hover:bg-[#edc875]"
          >
            {text.goBack}
          </button>
        </div>
      </div>
    );
  }

  const birthPlace =
    horoscopeData.birthPlace ||
    horoscopeData.cityArea ||
    horoscopeData.birthDistrict ||
    horoscopeData.district;

  const district =
    horoscopeData.district ||
    horoscopeData.birthDistrict;

  return (
    <div
      className="min-h-screen bg-[#05030b] px-5 py-16 text-white sm:py-24"
      lang={isSinhala ? "si" : "en"}
    >
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <header className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#d6ad55]">
            ✦ {text.brand} ✦
          </p>

          <h1 className="mt-5 text-3xl font-bold sm:text-4xl">
            {text.title}
          </h1>

          <p className="mt-4 text-white/50">
            {text.subtitle}
          </p>
        </header>

        {/* Birth Details */}
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-8">
          <h2 className="mb-6 text-xl font-semibold text-[#d6ad55]">
            {text.birthDetails}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Info
              label={text.name}
              value={horoscopeData.name}
            />

            <Info
              label={text.gender}
              value={getGender(horoscopeData.gender)}
            />

            <Info
              label={text.birthDate}
              value={horoscopeData.birthDate}
            />

            <Info
              label={text.birthTime}
              value={horoscopeData.birthTime}
            />

            <Info
              label={text.birthPlace}
              value={birthPlace}
            />

            <Info
              label={text.district}
              value={district}
            />

            <Info
              label={text.sign}
              value={getSign(horoscopeData.sign || horoscopeData.zodiac)}
            />

            <Info
              label={text.topic}
              value={getTopic(horoscopeData.topic)}
            />
          </div>
        </section>

        {/* Prediction */}
        <section className="mt-8 rounded-3xl border border-[#d6ad55]/20 bg-gradient-to-b from-[#d6ad55]/[0.08] to-white/[0.02] p-5 sm:p-8">
          <div className="mb-7 text-center">
            <p className="mb-3 text-2xl text-[#d6ad55]">
              ✦
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              {text.prediction}
            </h2>
          </div>

          {prediction ? (
            renderPrediction(prediction)
          ) : (
            <p className="text-center leading-7 text-white/50">
              {text.noPrediction}
            </p>
          )}
        </section>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-white/40">
          {text.disclaimer}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("/horoscope")}
            className="rounded-xl bg-[#d6ad55] px-7 py-3 font-semibold text-black transition hover:bg-[#edc875]"
          >
            {text.newReading}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-xl border border-[#d6ad55]/30 bg-[#d6ad55]/10 px-7 py-3 font-semibold text-[#d6ad55] transition hover:bg-[#d6ad55]/20"
          >
            {text.home}
          </button>
        </div>

      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-black/20 p-5">
    <p className="text-xs uppercase tracking-wider text-[#d6ad55]">
      {label}
    </p>

    <p className="mt-2 break-words text-base text-white">
      {value === null || value === undefined || value === ""
        ? "—"
        : String(value)}
    </p>
  </div>
);

export default HoroscopeResult;