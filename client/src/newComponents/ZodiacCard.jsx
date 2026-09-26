import React from "react";

const ZodiacCard = ({
  sign,
  language = "si",
  theme = "dark",
  onSelect,
  index = 0,
}) => {
  const isDark = theme === "dark";

  if (!sign) return null;

  const name = language === "si" ? sign.si : sign.name;
  const dates =
    language === "si" && sign.datesSi ? sign.datesSi : sign.dates;

  const personality =
    language === "si" && sign.personalitySi
      ? sign.personalitySi
      : sign.personality;

  const exploreText =
    language === "si" ? "වැඩි විස්තර →" : "Explore →";

  return (
    <button
      type="button"
      onClick={() => onSelect?.(sign)}
      className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:ring-2 focus:ring-[#d6ad55]/50 animate-[fadeUp_.7s_ease-out_both] ${
        isDark
          ? "border-white/10 bg-white/[0.03] hover:border-[#d6ad55]/40 hover:bg-white/[0.06]"
          : "border-black/10 bg-white/80 hover:border-[#d6ad55]/50 hover:bg-white"
      }`}
      style={{
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Animated glow */}

      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${
          isDark ? "bg-purple-500/10" : "bg-purple-400/10"
        }`}
      />

      <div
        className={`pointer-events-none absolute -bottom-16 -left-16 h-28 w-28 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${
          isDark ? "bg-[#d6ad55]/10" : "bg-[#d6ad55]/10"
        }`}
      />

      {/* Top */}

      <div className="relative z-10 flex items-start justify-between">
        {/* Zodiac symbol */}

        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute inset-0 rounded-xl bg-[#d6ad55]/10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#d6ad55]/15" />

          <span className="relative text-3xl text-[#d6ad55] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
            {sign.symbol}
          </span>
        </div>

        {/* Element */}

        <span
          className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
            isDark
              ? "border-white/10 bg-white/[0.03] text-white/40"
              : "border-black/10 bg-black/[0.02] text-black/45"
          }`}
        >
          {sign.element}
        </span>
      </div>

      {/* Name */}

      <div className="relative z-10 mt-5">
        <h3
          className={`text-lg font-bold transition-colors duration-300 group-hover:text-[#d6ad55] ${
            isDark ? "text-white" : "text-[#17130d]"
          }`}
        >
          {name}
        </h3>

        <p className="mt-1 text-xs font-medium text-[#d6ad55]">
          {sign.symbol} {dates}
        </p>
      </div>

      {/* Personality */}

      <p
        className={`relative z-10 mt-4 min-h-[48px] text-sm leading-6 ${
          isDark ? "text-white/45" : "text-black/50"
        }`}
      >
        {personality}
      </p>

      {/* Bottom information */}

      <div
        className={`relative z-10 mt-5 flex flex-wrap gap-2 border-t pt-4 ${
          isDark ? "border-white/5" : "border-black/5"
        }`}
      >
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] ${
            isDark
              ? "bg-purple-500/10 text-purple-300"
              : "bg-purple-500/10 text-purple-700"
          }`}
        >
          🪐 {sign.planet}
        </span>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] ${
            isDark
              ? "bg-[#d6ad55]/10 text-[#d6ad55]"
              : "bg-[#d6ad55]/10 text-[#8c641d]"
          }`}
        >
          ✦ {sign.number}
        </span>
      </div>

      {/* Explore */}

      <div className="relative z-10 mt-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#d6ad55] transition-all duration-300 group-hover:translate-x-1">
          {exploreText}
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6ad55]/20 text-[#d6ad55] transition-all duration-300 group-hover:border-[#d6ad55]/50 group-hover:bg-[#d6ad55]/10 group-hover:translate-x-1">
          →
        </span>
      </div>

      {/* Hover line */}

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#d6ad55] to-purple-400 transition-all duration-500 group-hover:w-full" />
    </button>
  );
};

export default ZodiacCard;