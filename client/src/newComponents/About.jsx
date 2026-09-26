import React from "react";

const About = ({ language = "si", theme = "dark" }) => {
  const isDark = theme === "dark";

  const content = {
    en: {
      badge: "✦ ABOUT THARURAHAS",
      title: "Discover Astrology Through AI",
      description:
        "TharuRahas is an AI-powered horoscope and astrology platform designed to provide personalized astrological insights based on the information you provide.",

      feature1Title: "AI-Powered Insights",
      feature1Text:
        "Our platform uses artificial intelligence to analyze the information you provide and generate personalized horoscope interpretations.",

      feature2Title: "Personalized Readings",
      feature2Text:
        "Enter your birth details and choose an area such as career, love, education, finance, family, or your general future to receive an AI-generated interpretation.",

      feature3Title: "Available Anytime",
      feature3Text:
        "TharuRahas is designed to give you access to astrology-inspired insights whenever you want, from any device.",

      disclaimerTitle: "Important AI Disclaimer",
      disclaimerText:
        "TharuRahas uses artificial intelligence to generate horoscope interpretations. AI systems can make mistakes, misunderstand information, or produce inaccurate results. The information provided by this platform should therefore be considered for entertainment and general informational purposes only.",

      disclaimerText2:
        "Astrological readings are not guaranteed predictions of the future. Please do not use information from TharuRahas as a substitute for professional medical, legal, financial, psychological, or other expert advice.",

      closing:
        "Our goal is to combine traditional astrology concepts with modern AI technology to create an interesting and accessible digital astrology experience.",
    },

    si: {
      badge: "✦ THARURAHAS ගැන",
      title: "AI තාක්ෂණය සමඟ ජ්‍යෝතිෂ්‍යය",
      description:
        "TharuRahas යනු ඔබ ලබාදෙන තොරතුරු මත පදනම්ව පුද්ගලික ජ්‍යෝතිෂ්‍ය අවබෝධයන් ලබාදීමට කෘත්‍රිම බුද්ධිය (AI) භාවිතා කරන horoscope සහ astrology platform එකකි.",

      feature1Title: "AI මඟින් ලබාදෙන අවබෝධයන්",
      feature1Text:
        "ඔබ ලබාදෙන තොරතුරු විශ්ලේෂණය කර පුද්ගලික කේන්දර විස්තර සහ ජ්‍යෝතිෂ්‍ය අර්ථකථන නිර්මාණය කිරීමට අපගේ platform එක AI තාක්ෂණය භාවිතා කරයි.",

      feature2Title: "පුද්ගලික කේන්දර විස්තර",
      feature2Text:
        "ඔබේ උපන් තොරතුරු ලබාදී රැකියාව, ආදරය, අධ්‍යාපනය, මුදල්, පවුල හෝ අනාගතය වැනි ඔබට අවශ්‍ය කරුණක් තෝරාගෙන AI මඟින් නිර්මාණය කරන ලද ජ්‍යෝතිෂ්‍ය අර්ථකථනයක් ලබාගත හැක.",

      feature3Title: "ඕනෑම වේලාවක ලබාගත හැක",
      feature3Text:
        "ඔබට අවශ්‍ය ඕනෑම අවස්ථාවක සහ ඕනෑම device එකකින් ජ්‍යෝතිෂ්‍යය ආශ්‍රිත තොරතුරු ලබාගැනීමට TharuRahas නිර්මාණය කර ඇත.",

      disclaimerTitle: "වැදගත් AI නිවේදනය",
      disclaimerText:
        "TharuRahas මඟින් horoscope විස්තර සහ ජ්‍යෝතිෂ්‍ය අර්ථකථන නිර්මාණය කිරීම සඳහා කෘත්‍රිම බුද්ධිය (AI) භාවිතා කරයි. AI පද්ධතිවලින් වැරදි සිදුවිය හැකි අතර, තොරතුරු වැරදි ලෙස අවබෝධ කරගැනීමට හෝ සාවද්‍ය ප්‍රතිඵල ලබාදීමටද හැකිය. එබැවින් මෙම platform එක මඟින් ලබාදෙන තොරතුරු විනෝදාස්වාදය සහ සාමාන්‍ය තොරතුරු සඳහා පමණක් සලකා බලන්න.",

      disclaimerText2:
        "ජ්‍යෝතිෂ්‍ය කියවීම් අනාගතය පිළිබඳ සහතික කළ අනාවැකි නොවේ. TharuRahas මඟින් ලබාදෙන තොරතුරු වෛද්‍ය, නීතිමය, මූල්‍ය, මනෝවිද්‍යාත්මක හෝ වෙනත් වෘත්තීය උපදෙස් වෙනුවට භාවිතා නොකරන්න.",

      closing:
        "සාම්ප්‍රදායික ජ්‍යෝතිෂ්‍ය සංකල්ප සහ නවීන AI තාක්ෂණය එකතු කර රසවත්, පහසු සහ නවීන digital astrology අත්දැකීමක් ලබාදීම අපගේ අරමුණයි.",
    },
  };

  const t = content[language];

  return (
    <section
      id="about"
      className={`relative overflow-hidden border-t px-5 py-24 transition-colors duration-500 ${
        isDark
          ? "border-white/5 bg-[#07040e]"
          : "border-black/5 bg-[#f5f1e8]"
      }`}
    >
      {/* Background glow */}

      <div
        className={`absolute -left-40 top-20 h-[400px] w-[400px] rounded-full blur-[130px] ${
          isDark ? "bg-purple-700/10" : "bg-purple-400/10"
        }`}
      />

      <div
        className={`absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full blur-[130px] ${
          isDark ? "bg-yellow-600/10" : "bg-yellow-500/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
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
            className={`mt-6 text-sm leading-8 sm:text-base ${
              isDark ? "text-white/50" : "text-black/55"
            }`}
          >
            {t.description}
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* AI */}

          <div
            className={`rounded-2xl border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#d6ad55]/30 ${
              isDark
                ? "border-white/10 bg-white/[0.035]"
                : "border-black/10 bg-white/80"
            }`}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#d6ad55]/10 text-2xl">
              ✨
            </div>

            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.feature1Title}
            </h3>

            <p
              className={`mt-4 text-sm leading-7 ${
                isDark ? "text-white/45" : "text-black/50"
              }`}
            >
              {t.feature1Text}
            </p>
          </div>

          {/* Personalized */}

          <div
            className={`rounded-2xl border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#d6ad55]/30 ${
              isDark
                ? "border-white/10 bg-white/[0.035]"
                : "border-black/10 bg-white/80"
            }`}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
              🔮
            </div>

            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.feature2Title}
            </h3>

            <p
              className={`mt-4 text-sm leading-7 ${
                isDark ? "text-white/45" : "text-black/50"
              }`}
            >
              {t.feature2Text}
            </p>
          </div>

          {/* Available */}

          <div
            className={`rounded-2xl border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#d6ad55]/30 ${
              isDark
                ? "border-white/10 bg-white/[0.035]"
                : "border-black/10 bg-white/80"
            }`}
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#d6ad55]/10 text-2xl">
              🌙
            </div>

            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.feature3Title}
            </h3>

            <p
              className={`mt-4 text-sm leading-7 ${
                isDark ? "text-white/45" : "text-black/50"
              }`}
            >
              {t.feature3Text}
            </p>
          </div>
        </div>

        {/* AI Disclaimer */}

        <div
          className={`mt-14 rounded-3xl border p-7 sm:p-9 ${
            isDark
              ? "border-[#d6ad55]/20 bg-[#d6ad55]/[0.05]"
              : "border-[#d6ad55]/30 bg-[#d6ad55]/[0.08]"
          }`}
        >
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d6ad55]/10 text-2xl">
              ⚠️
            </div>

            <div>
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-[#e7c66f]" : "text-[#8c641d]"
                }`}
              >
                {t.disclaimerTitle}
              </h3>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isDark ? "text-white/55" : "text-black/55"
                }`}
              >
                {t.disclaimerText}
              </p>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isDark ? "text-white/55" : "text-black/55"
                }`}
              >
                {t.disclaimerText2}
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <div className="text-2xl text-[#d6ad55]">✦</div>

          <p
            className={`mt-5 text-sm leading-8 sm:text-base ${
              isDark ? "text-white/45" : "text-black/50"
            }`}
          >
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;