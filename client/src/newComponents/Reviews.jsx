import React from "react";

const Reviews = ({ language = "si", theme = "dark" }) => {
  const isDark = theme === "dark";

  const content = {
    en: {
      badge: "✦ CUSTOMER REVIEWS",
      title: "What People Say About TharuRahas",
      description:
        "Discover the experiences of people who explored their cosmic journey with TharuRahas.",

      reviews: [
        {
          name: "Nethmi",
          location: "Colombo, Sri Lanka",
          review:
            "The horoscope reading was beautifully explained and gave me a lot to think about. I really enjoyed the experience.",
        },
        {
          name: "Kasun",
          location: "Galle, Sri Lanka",
          review:
            "The process was simple and the reading was very interesting. I especially liked the detailed explanation.",
        },
        {
          name: "Ayesha",
          location: "Kandy, Sri Lanka",
          review:
            "A beautiful experience. The information about my future and career was presented in a very clear way.",
        },
      ],

      writeReview: "Write a Review",
      verified: "Verified Customer",
      ratingText: "Based on customer reviews",
    },

    si: {
      badge: "✦ පාරිභෝගික විචාර",
      title: "TharuRahas ගැන මිනිසුන් කියන දේ",
      description:
        "TharuRahas සමඟ තම තරු ගමන සොයාගත් පාරිභෝගිකයන්ගේ අත්දැකීම් දැනගන්න.",

      reviews: [
        {
          name: "නෙත්මි",
          location: "කොළඹ, ශ්‍රී ලංකාව",
          review:
            "කේන්දර කියවීම ඉතාමත් ලස්සනට සහ පැහැදිලිව විස්තර කරලා තිබුණා. මට ගොඩක් දේවල් ගැන නැවත සිතන්නත් අවස්ථාවක් ලැබුණා.",
        },
        {
          name: "කසුන්",
          location: "ගාල්ල, ශ්‍රී ලංකාව",
          review:
            "සේවාව ලබාගැනීම ඉතා පහසුයි. කේන්දරයේ තොරතුරු සහ විස්තර කිරීම මට ගොඩක් රසවත් වුණා.",
        },
        {
          name: "අයේෂා",
          location: "මහනුවර, ශ්‍රී ලංකාව",
          review:
            "ඉතාමත් හොඳ අත්දැකීමක්. මගේ අනාගතය සහ රැකියාව පිළිබඳ තොරතුරු ඉතා පැහැදිලිව ඉදිරිපත් කර තිබුණා.",
        },
      ],

      writeReview: "විචාරයක් ලබා දෙන්න",
      verified: "තහවුරු කළ පාරිභෝගිකයෙකි",
      ratingText: "පාරිභෝගික විචාර මත පදනම්ව",
    },
  };

  const t = content[language];

  return (
    <section
      id="reviews"
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
        {/* =================================
            HEADING
        ================================= */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[4px] text-[#d6ad55]">
            {t.badge}
          </p>

          <h2
            className={`mt-4 text-3xl font-bold sm:text-4xl ${
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
            RATING SUMMARY
        ================================= */}

        <div
          className={`mx-auto mt-12 flex max-w-md flex-col items-center justify-center rounded-2xl border px-8 py-6 backdrop-blur-xl transition-colors duration-500 ${
            isDark
              ? "border-white/10 bg-white/[0.03]"
              : "border-black/10 bg-white/80"
          }`}
        >
          <div className="text-4xl font-bold text-[#d6ad55]">
            4.9
          </div>

          <div className="mt-2 flex gap-1 text-xl text-[#d6ad55]">
            ★ ★ ★ ★ ★
          </div>

          <p
            className={`mt-2 text-xs ${
              isDark ? "text-white/35" : "text-black/40"
            }`}
          >
            {t.ratingText}
          </p>
        </div>

        {/* =================================
            REVIEWS
        ================================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.reviews.map((review, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#d6ad55]/30 ${
                isDark
                  ? "border-white/10 bg-white/[0.035] hover:bg-white/[0.055]"
                  : "border-black/10 bg-white/80 hover:bg-white"
              }`}
            >
              {/* Quote */}

              <div className="absolute right-6 top-5 text-4xl text-[#d6ad55]/10">
                "
              </div>

              {/* Stars */}

              <div className="flex gap-1 text-sm text-[#d6ad55]">
                ★ ★ ★ ★ ★
              </div>

              {/* Review */}

              <p
                className={`mt-5 text-sm leading-7 ${
                  isDark ? "text-white/55" : "text-black/55"
                }`}
              >
                "{review.review}"
              </p>

              {/* Customer */}

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#d6ad55]/10 font-semibold text-[#d6ad55]">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3
                    className={`text-sm font-semibold ${
                      isDark ? "text-white" : "text-[#17130d]"
                    }`}
                  >
                    {review.name}
                  </h3>

                  <p
                    className={`text-xs ${
                      isDark ? "text-white/30" : "text-black/40"
                    }`}
                  >
                    {review.location}
                  </p>

                  <p className="mt-1 text-[10px] text-[#d6ad55]/70">
                    ✓ {t.verified}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =================================
            WRITE REVIEW BUTTON
        ================================= */}

        <div className="mt-12 text-center">
          <button
            className="rounded-xl border border-[#d6ad55]/30 bg-[#d6ad55]/10 px-7 py-3.5 text-sm font-semibold text-[#d6ad55] transition duration-300 hover:-translate-y-1 hover:bg-[#d6ad55]/20"
          >
            {t.writeReview}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;