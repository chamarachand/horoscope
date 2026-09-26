import React, { useState } from "react";

const Horoscope = ({ language = "si", theme = "dark" }) => {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    district: "",
    cityArea: "",
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

      birthDate: "Date of Birth",

      birthTime: "Time of Birth",

      birthPlace: "Place of Birth",
      placePlaceholder: "Enter your birth place",

      district: "District",
      districtPlaceholder: "Select district",

      cityArea: "City / Area",
      cityAreaPlaceholder: "Enter city or area",

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

      districts: {
        colombo: "Colombo",
        gampaha: "Gampaha",
        kalutara: "Kalutara",
        kandy: "Kandy",
        matale: "Matale",
        nuwaraEliya: "Nuwara Eliya",
        galle: "Galle",
        matara: "Matara",
        hambantota: "Hambantota",
        jaffna: "Jaffna",
        kilinochchi: "Kilinochchi",
        mannar: "Mannar",
        vavuniya: "Vavuniya",
        mullaitivu: "Mullaitivu",
        batticaloa: "Batticaloa",
        ampara: "Ampara",
        trincomalee: "Trincomalee",
        kurunegala: "Kurunegala",
        puttalam: "Puttalam",
        anuradhapura: "Anuradhapura",
        polonnaruwa: "Polonnaruwa",
        badulla: "Badulla",
        monaragala: "Monaragala",
        ratnapura: "Ratnapura",
        kegalle: "Kegalle",
      },

      button: "Get My Horoscope",

      note: "Your birth details are used to prepare your horoscope.",
    },

    si: {
      badge: "✦ පුද්ගලික කේන්දරය",

      title: "ඔබේ තරු හෙළිකරන දේ සොයාගන්න",

      description:
        "ඔබේ උපන් තොරතුරු ඇතුළත් කර ඔබට දැනගැනීමට අවශ්‍ය කරුණ තෝරන්න.",

      name: "නම",
      namePlaceholder: "ඔබේ සම්පූර්ණ නම ඇතුළත් කරන්න",

      birthDate: "උපන් දිනය",

      birthTime: "උපන් වේලාව",

      birthPlace: "උපන් ස්ථානය",
      placePlaceholder: "උපන් ස්ථානය ඇතුළත් කරන්න",

      district: "දිස්ත්‍රික්කය",
      districtPlaceholder: "දිස්ත්‍රික්කය තෝරන්න",

      cityArea: "නගරය / ප්‍රදේශය",
      cityAreaPlaceholder: "නගරය හෝ ප්‍රදේශය ඇතුළත් කරන්න",

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

      districts: {
        colombo: "කොළඹ",
        gampaha: "ගම්පහ",
        kalutara: "කළුතර",
        kandy: "මහනුවර",
        matale: "මාතලේ",
        nuwaraEliya: "නුවරඑළිය",
        galle: "ගාල්ල",
        matara: "මාතර",
        hambantota: "හම්බන්තොට",
        jaffna: "යාපනය",
        kilinochchi: "කිලිනොච්චි",
        mannar: "මන්නාරම",
        vavuniya: "වවුනියාව",
        mullaitivu: "මුලතිව්",
        batticaloa: "මඩකලපුව",
        ampara: "අම්පාර",
        trincomalee: "ත්‍රිකුණාමලය",
        kurunegala: "කුරුණෑගල",
        puttalam: "පුත්තලම",
        anuradhapura: "අනුරාධපුර",
        polonnaruwa: "පොළොන්නරුව",
        badulla: "බදුල්ල",
        monaragala: "මොනරාගල",
        ratnapura: "රත්නපුර",
        kegalle: "කෑගල්ල",
      },

      button: "මගේ කේන්දරය බලන්න",

      note:
        "ඔබේ කේන්දරය සකස් කිරීම සඳහා ඔබ ලබාදෙන උපන් තොරතුරු භාවිතා කරනු ලැබේ.",
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

  const inputClass = `w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
    isDark
      ? "border-white/10 bg-black/20 text-white placeholder:text-white/25 focus:border-[#d6ad55]/50 focus:ring-1 focus:ring-[#d6ad55]/20"
      : "border-black/10 bg-white text-[#17130d] placeholder:text-black/30 focus:border-[#d6ad55]/60 focus:ring-1 focus:ring-[#d6ad55]/20"
  }`;

  const selectClass = `w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
    isDark
      ? "border-white/10 bg-[#0b0812] text-white focus:border-[#d6ad55]/50"
      : "border-black/10 bg-white text-[#17130d] focus:border-[#d6ad55]/60"
  }`;

  const labelClass = `mb-2 block text-sm font-medium ${
    isDark ? "text-white/80" : "text-black/75"
  }`;

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
          className={`mx-auto mt-12 max-w-5xl rounded-3xl border p-6 shadow-2xl backdrop-blur-xl transition-colors duration-500 sm:p-8 lg:p-10 ${
            isDark
              ? "border-white/10 bg-white/[0.035]"
              : "border-black/10 bg-white/80"
          }`}
        >
          <form onSubmit={handleSubmit}>

            {/* =================================
                NAME + DATE + TIME
            ================================= */}

            <div className="grid gap-6 md:grid-cols-3">

              {/* Name */}

              <div>
                <label className={labelClass}>
                  {t.name}
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  required
                  className={inputClass}
                />
              </div>

              {/* Date */}

              <div>
                <label className={labelClass}>
                  {t.birthDate}
                </label>

                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* Time */}

              <div>
                <label className={labelClass}>
                  {t.birthTime}
                </label>

                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

            </div>

            {/* =================================
                BIRTH LOCATION
            ================================= */}

            <div className="mt-6 grid gap-6 md:grid-cols-3">

              {/* Birth Place */}

              <div>
                <label className={labelClass}>
                  {t.birthPlace}
                </label>

                <input
                  type="text"
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  placeholder={t.placePlaceholder}
                  required
                  className={inputClass}
                />
              </div>

              {/* District */}

              <div>
                <label className={labelClass}>
                  {t.district}
                </label>

                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className={selectClass}
                >
                  <option value="" disabled>
                    {t.districtPlaceholder}
                  </option>

                  <option value="colombo">
                    {t.districts.colombo}
                  </option>

                  <option value="gampaha">
                    {t.districts.gampaha}
                  </option>

                  <option value="kalutara">
                    {t.districts.kalutara}
                  </option>

                  <option value="kandy">
                    {t.districts.kandy}
                  </option>

                  <option value="matale">
                    {t.districts.matale}
                  </option>

                  <option value="nuwaraEliya">
                    {t.districts.nuwaraEliya}
                  </option>

                  <option value="galle">
                    {t.districts.galle}
                  </option>

                  <option value="matara">
                    {t.districts.matara}
                  </option>

                  <option value="hambantota">
                    {t.districts.hambantota}
                  </option>

                  <option value="jaffna">
                    {t.districts.jaffna}
                  </option>

                  <option value="kilinochchi">
                    {t.districts.kilinochchi}
                  </option>

                  <option value="mannar">
                    {t.districts.mannar}
                  </option>

                  <option value="vavuniya">
                    {t.districts.vavuniya}
                  </option>

                  <option value="mullaitivu">
                    {t.districts.mullaitivu}
                  </option>

                  <option value="batticaloa">
                    {t.districts.batticaloa}
                  </option>

                  <option value="ampara">
                    {t.districts.ampara}
                  </option>

                  <option value="trincomalee">
                    {t.districts.trincomalee}
                  </option>

                  <option value="kurunegala">
                    {t.districts.kurunegala}
                  </option>

                  <option value="puttalam">
                    {t.districts.puttalam}
                  </option>

                  <option value="anuradhapura">
                    {t.districts.anuradhapura}
                  </option>

                  <option value="polonnaruwa">
                    {t.districts.polonnaruwa}
                  </option>

                  <option value="badulla">
                    {t.districts.badulla}
                  </option>

                  <option value="monaragala">
                    {t.districts.monaragala}
                  </option>

                  <option value="ratnapura">
                    {t.districts.ratnapura}
                  </option>

                  <option value="kegalle">
                    {t.districts.kegalle}
                  </option>
                </select>
              </div>

              {/* City / Area */}

              <div>
                <label className={labelClass}>
                  {t.cityArea}
                </label>

                <input
                  type="text"
                  name="cityArea"
                  value={formData.cityArea}
                  onChange={handleChange}
                  placeholder={t.cityAreaPlaceholder}
                  required
                  className={inputClass}
                />
              </div>

            </div>

            {/* =================================
                TOPIC
            ================================= */}

            <div className="mt-6">

              <label className={labelClass}>
                {t.topic}
              </label>

              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className={selectClass}
              >
                <option value="" disabled>
                  {t.topicPlaceholder}
                </option>

                <option value="education">
                  {t.education}
                </option>

                <option value="career">
                  {t.career}
                </option>

                <option value="love">
                  {t.love}
                </option>

                <option value="health">
                  {t.health}
                </option>

                <option value="future">
                  {t.future}
                </option>

                <option value="finance">
                  {t.finance}
                </option>

                <option value="family">
                  {t.family}
                </option>

                <option value="foreign">
                  {t.foreign}
                </option>

                <option value="general">
                  {t.general}
                </option>

                <option value="other">
                  {t.otherTopic}
                </option>
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

              <span className="ml-3">
                →
              </span>
            </button>

            {/* Note */}

            <p
              className={`mt-4 text-center text-xs ${
                isDark
                  ? "text-white/25"
                  : "text-black/35"
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