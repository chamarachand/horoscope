import React, { useState } from "react";

const Horoscope = ({ language = "si", theme = "dark" }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    topic: "",
  });

  const isDark = theme === "dark";

  const content = {
    en: {
      badge: "✦ PERSONAL HOROSCOPE",
      title: "Discover What Your Stars Reveal",
      description:
        "Enter your birth details and choose what you would like to know about your life.",

      name: "Full Name",
      namePlaceholder: "Enter your full name",

      gender: "Gender",
      genderPlaceholder: "Select gender",
      male: "Male",
      female: "Female",
      other: "Other",

      birthDate: "Date of Birth",
      birthTime: "Time of Birth",
      birthPlace: "Place of Birth",
      placePlaceholder: "Enter your birth place",

      topic: "What do you want to know?",
      topicPlaceholder: "Select a topic",

      education: "Education",
      career: "Career",
      love: "Love & Marriage",
      health: "Health",
      future: "Future",
      finance: "Finance",
      family: "Family",
      foreign: "Foreign Travel",
      general: "General Horoscope",
      otherTopic: "Other",

      button: "Get My Horoscope",
      note: "Your birth details are used to prepare your horoscope.",
    },

    si: {
      badge: "✦ පුද්ගලික කේන්දරය",
      title: "ඔබේ තරු හෙළිකරන දේ සොයාගන්න",
      description:
        "ඔබේ උපන් තොරතුරු ඇතුළත් කර ඔබට දැනගැනීමට අවශ්‍ය කරුණ තෝරන්න.",

      name: "සම්පූර්ණ නම",
      namePlaceholder: "ඔබේ සම්පූර්ණ නම ඇතුළත් කරන්න",

      gender: "ස්ත්‍රී / පුරුෂ භාවය",
      genderPlaceholder: "තෝරන්න",
      male: "පුරුෂ",
      female: "ස්ත්‍රී",
      other: "වෙනත්",

      birthDate: "උපන් දිනය",
      birthTime: "උපන් වේලාව",
      birthPlace: "උපන් ස්ථානය",
      placePlaceholder: "උපන් ස්ථානය ඇතුළත් කරන්න",

      topic: "ඔබට දැනගැනීමට අවශ්‍ය කුමක්ද?",
      topicPlaceholder: "කරුණක් තෝරන්න",

      education: "අධ්‍යාපනය",
      career: "රැකියාව / වෘත්තිය",
      love: "ආදරය සහ විවාහය",
      health: "සෞඛ්‍යය",
      future: "අනාගතය",
      finance: "මුදල් / ආර්ථිකය",
      family: "පවුල",
      foreign: "විදේශ ගමන්",
      general: "පොදු පලාපලය",
      otherTopic: "වෙනත්",

      button: "මගේ කේන්දරය බලන්න",
      note: "ඔබේ කේන්දරය සකස් කිරීම සඳහා ඔබ ලබාදෙන උපන් තොරතුරු භාවිතා කරනු ලැබේ.",
    },
  };

  const t = content[language];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Horoscope Data:", formData);

    // Later:
    // Send this data to your backend API
  };

  return (
    <section
      id="horoscope-form"
      className={`relative overflow-hidden border-t px-5 py-24 transition-colors duration-500 ${
        isDark
          ? "border-white/5 bg-[#05030b]"
          : "border-black/5 bg-[#faf8f2]"
      }`}
    >
      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className={`absolute -left-40 top-20 h-[400px] w-[400px] rounded-full blur-[120px] ${
          isDark ? "bg-purple-700/10" : "bg-purple-400/10"
        }`}
      />

      <div
        className={`absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full blur-[120px] ${
          isDark ? "bg-yellow-600/10" : "bg-yellow-500/10"
        }`}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* =================================
            HEADING
        ================================= */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#d6ad55]">
            {t.badge}
          </p>

          <h2
            className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl ${
              isDark ? "text-white" : "text-[#17130d]"
            }`}
          >
            {t.title}
          </h2>

          <p
            className={`mt-5 text-sm leading-7 sm:text-base ${
              isDark ? "text-white/45" : "text-black/50"
            }`}
          >
            {t.description}
          </p>
        </div>

        {/* =================================
            FORM CARD
        ================================= */}

        <div
          className={`mx-auto mt-12 max-w-4xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition-colors duration-500 sm:p-8 lg:p-10 ${
            isDark
              ? "border-white/10 bg-white/[0.035]"
              : "border-black/10 bg-white/80"
          }`}
        >
          <form onSubmit={handleSubmit}>
            {/* =================================
                NAME
            ================================= */}

            <div className="mb-6">
              <label
                className={`mb-2 block text-sm font-medium ${
                  isDark ? "text-white/80" : "text-black/75"
                }`}
              >
                {t.name}
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
                className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-black/20 text-white placeholder:text-white/25 focus:border-[#d6ad55]/50 focus:ring-1 focus:ring-[#d6ad55]/20"
                    : "border-black/10 bg-white text-[#17130d] placeholder:text-black/30 focus:border-[#d6ad55]/60 focus:ring-1 focus:ring-[#d6ad55]/20"
                }`}
              />
            </div>

            {/* =================================
                GENDER + DATE
            ================================= */}

            <div className="grid gap-6 md:grid-cols-2">
              {/* Gender */}

              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${
                    isDark ? "text-white/80" : "text-black/75"
                  }`}
                >
                  {t.gender}
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-[#0b0812] text-white focus:border-[#d6ad55]/50"
                      : "border-black/10 bg-white text-[#17130d] focus:border-[#d6ad55]/60"
                  }`}
                >
                  <option value="" disabled>
                    {t.genderPlaceholder}
                  </option>

                  <option value="male">{t.male}</option>
                  <option value="female">{t.female}</option>
                  <option value="other">{t.other}</option>
                </select>
              </div>

              {/* Date */}

              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${
                    isDark ? "text-white/80" : "text-black/75"
                  }`}
                >
                  {t.birthDate}
                </label>

                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-black/20 text-white focus:border-[#d6ad55]/50 focus:ring-1 focus:ring-[#d6ad55]/20"
                      : "border-black/10 bg-white text-[#17130d] focus:border-[#d6ad55]/60 focus:ring-1 focus:ring-[#d6ad55]/20"
                  }`}
                />
              </div>
            </div>

            {/* =================================
                TIME + PLACE
            ================================= */}

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Time */}

              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${
                    isDark ? "text-white/80" : "text-black/75"
                  }`}
                >
                  {t.birthTime}
                </label>

                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-black/20 text-white focus:border-[#d6ad55]/50 focus:ring-1 focus:ring-[#d6ad55]/20"
                      : "border-black/10 bg-white text-[#17130d] focus:border-[#d6ad55]/60 focus:ring-1 focus:ring-[#d6ad55]/20"
                  }`}
                />
              </div>

              {/* Place */}

              <div>
                <label
                  className={`mb-2 block text-sm font-medium ${
                    isDark ? "text-white/80" : "text-black/75"
                  }`}
                >
                  {t.birthPlace}
                </label>

                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  placeholder={t.placePlaceholder}
                  required
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                    isDark
                      ? "border-white/10 bg-black/20 text-white placeholder:text-white/25 focus:border-[#d6ad55]/50 focus:ring-1 focus:ring-[#d6ad55]/20"
                      : "border-black/10 bg-white text-[#17130d] placeholder:text-black/30 focus:border-[#d6ad55]/60 focus:ring-1 focus:ring-[#d6ad55]/20"
                  }`}
                />
              </div>
            </div>

            {/* =================================
                TOPIC
            ================================= */}

            <div className="mt-6">
              <label
                className={`mb-2 block text-sm font-medium ${
                  isDark ? "text-white/80" : "text-black/75"
                }`}
              >
                {t.topic}
              </label>

              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                  isDark
                    ? "border-white/10 bg-[#0b0812] text-white focus:border-[#d6ad55]/50"
                    : "border-black/10 bg-white text-[#17130d] focus:border-[#d6ad55]/60"
                }`}
              >
                <option value="" disabled>
                  {t.topicPlaceholder}
                </option>

                <option value="education">{t.education}</option>
                <option value="career">{t.career}</option>
                <option value="love">{t.love}</option>
                <option value="health">{t.health}</option>
                <option value="future">{t.future}</option>
                <option value="finance">{t.finance}</option>
                <option value="family">{t.family}</option>
                <option value="foreign">{t.foreign}</option>
                <option value="general">{t.general}</option>
                <option value="other">{t.otherTopic}</option>
              </select>
            </div>

            {/* =================================
                SUBMIT
            ================================= */}

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#d4a64e] to-[#f1d27e] px-6 py-4 font-semibold text-[#140e06] shadow-[0_10px_40px_rgba(214,169,78,.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(214,169,78,.35)]"
            >
              {t.button}

              <span className="ml-3">→</span>
            </button>

            {/* Note */}

            <p
              className={`mt-4 text-center text-xs ${
                isDark ? "text-white/25" : "text-black/35"
              }`}
            >
              ✦ {t.note}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Horoscope;