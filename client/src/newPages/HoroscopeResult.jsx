import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HoroscopeResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const horoscopeData = location.state?.horoscopeData;
  const language = location.state?.language || "si";

  if (!horoscopeData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#05030b] px-5 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            No horoscope information found
          </h1>

          <button
            onClick={() => navigate("/horoscope")}
            className="mt-6 rounded-xl bg-[#d6ad55] px-6 py-3 font-semibold text-black"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const isSinhala = language === "si";

  return (
    <div className="min-h-screen bg-[#05030b] px-5 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#d6ad55]">
            ✦ THARURAHAS
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            {isSinhala
              ? "ඔබේ කේන්දර තොරතුරු"
              : "Your Horoscope Information"}
          </h1>

          <p className="mt-4 text-white/50">
            {isSinhala
              ? "ඔබ ලබාදුන් උපන් තොරතුරු"
              : "Your submitted birth details"}
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Info
              label={isSinhala ? "නම" : "Name"}
              value={horoscopeData.name}
            />

            <Info
              label={isSinhala ? "ස්ත්‍රී / පුරුෂ භාවය" : "Gender"}
              value={horoscopeData.gender}
            />

            <Info
              label={isSinhala ? "උපන් දිනය" : "Date of Birth"}
              value={horoscopeData.birthDate}
            />

            <Info
              label={isSinhala ? "උපන් වේලාව" : "Time of Birth"}
              value={horoscopeData.birthTime}
            />

            <Info
              label={isSinhala ? "උපන් ස්ථානය" : "Place of Birth"}
              value={horoscopeData.birthPlace}
            />

            <Info
              label={isSinhala ? "අවශ්‍ය කරුණ" : "Topic"}
              value={horoscopeData.topic}
            />
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-center">
            <h2 className="text-2xl font-semibold">
              {isSinhala
                ? "ඔබේ කේන්දරය සූදානම් කිරීම"
                : "Preparing Your Horoscope"}
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/50">
              {isSinhala
                ? "ඔබේ උපන් තොරතුරු මත පදනම්ව ඔබේ පුද්ගලික කේන්දර විස්තර සකස් කරනු ලැබේ."
                : "Your personalized horoscope will be prepared based on the birth details you provided."}
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-7 rounded-xl border border-[#d6ad55]/30 bg-[#d6ad55]/10 px-6 py-3 font-semibold text-[#d6ad55] transition hover:bg-[#d6ad55]/20"
            >
              {isSinhala ? "මුල් පිටුවට" : "Back to Home"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
      <p className="text-xs uppercase tracking-wider text-[#d6ad55]">
        {label}
      </p>

      <p className="mt-2 text-base text-white">
        {value}
      </p>
    </div>
  );
};

export default HoroscopeResult;