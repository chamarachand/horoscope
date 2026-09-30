import React, { useState } from "react";

import NavBar from "../newComponents/NavBar";
import Footer from "../newComponents/Footer";

const Contact = () => {
  const [language, setLanguage] = useState("si");
  const [theme, setTheme] = useState("dark");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      badge: "✦ GET IN TOUCH",
      title: "Contact",
      titleGold: "TharuRahas",
      description:
        "Have a question, suggestion, or need help with your horoscope? We would love to hear from you.",

      formTitle: "Send Us a Message",

      name: "Your Name",
      namePlaceholder: "Enter your name",

      email: "Email Address",
      emailPlaceholder: "Enter your email",

      subject: "Subject",
      subjectPlaceholder: "What is this about?",

      message: "Message",
      messagePlaceholder: "Write your message here...",

      send: "Send Message",

      success: "Thank you! Your message has been received.",

      contactTitle: "Get in Touch",

      emailTitle: "Email Us",
      emailText: "Send us an email and we'll get back to you.",

      whatsappTitle: "WhatsApp",
      whatsappText: "Contact us directly through WhatsApp.",

      locationTitle: "Location",
      locationText: "Sri Lanka",

      response: "We usually respond as soon as possible.",

      disclaimer:
        "TharuRahas provides astrology and horoscope information for general and entertainment purposes. AI-generated readings may contain inaccuracies and should not be considered professional advice.",
    },

    si: {
      badge: "✦ අප හා සම්බන්ධ වන්න",
      title: "අප හා",
      titleGold: "සම්බන්ධ වන්න",

      description:
        "ප්‍රශ්නයක්, යෝජනාවක් හෝ ඔබේ කේන්දරය පිළිබඳ සහාය අවශ්‍යද? අප හා සම්බන්ධ වන්න.",

      formTitle: "පණිවිඩයක් යවන්න",

      name: "ඔබේ නම",
      namePlaceholder: "ඔබේ නම ඇතුළත් කරන්න",

      email: "විද්‍යුත් තැපෑල",
      emailPlaceholder: "ඔබේ Email ලිපිනය ඇතුළත් කරන්න",

      subject: "මාතෘකාව",
      subjectPlaceholder: "ඔබට අවශ්‍ය දේ සඳහන් කරන්න",

      message: "පණිවිඩය",
      messagePlaceholder: "ඔබේ පණිවිඩය මෙහි ලියන්න...",

      send: "පණිවිඩය යවන්න",

      success: "ස්තූතියි! ඔබේ පණිවිඩය ලැබී ඇත.",

      contactTitle: "අප හා සම්බන්ධ වන්න",

      emailTitle: "Email",
      emailText:
        "Email එකක් එවන්න. අපි හැකි ඉක්මනින් පිළිතුරු දෙන්නෙමු.",

      whatsappTitle: "WhatsApp",
      whatsappText:
        "WhatsApp හරහා අප හා සෘජුව සම්බන්ධ වන්න.",

      locationTitle: "ස්ථානය",
      locationText: "ශ්‍රී ලංකාව",

      response: "අපි හැකි ඉක්මනින් ඔබට පිළිතුරු ලබා දෙන්නෙමු.",

      disclaimer:
        "TharuRahas මඟින් ජ්‍යෝතිෂ්‍ය සහ කේන්දර තොරතුරු සාමාන්‍ය සහ විනෝදාස්වාද අරමුණු සඳහා ලබා දේ. AI මඟින් නිර්මාණය කරන ලද කියවීම්වල දෝෂ තිබිය හැකි අතර ඒවා වෘත්තීය උපදෙස් ලෙස භාවිතා නොකළ යුතුය.",
    },
  };

  const t = content[language];
  const isDark = theme === "dark";

  // ==========================================
  // FORM CHANGE
  // ==========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        isDark
          ? "bg-[#05030b] text-white"
          : "bg-[#faf8f2] text-[#17130d]"
      }`}
    >
      {/* ==========================================
          NAVBAR
      ========================================== */}

      <NavBar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* ==========================================
          MAIN
      ========================================== */}

      <main className="relative min-h-screen pt-20">
        {/* ==========================================
            BACKGROUND
        ========================================== */}

        {isDark && (
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        )}

        <div
          className={`pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] ${
            isDark ? "bg-purple-700/20" : "bg-purple-400/10"
          }`}
        />

        <div
          className={`pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px] ${
            isDark ? "bg-yellow-600/10" : "bg-yellow-500/10"
          }`}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
          {/* ==========================================
              HERO
          ========================================== */}

          <section className="mx-auto max-w-3xl text-center">
            <div
              className={`mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] tracking-[0.2em] sm:mb-6 sm:px-4 sm:text-xs ${
                isDark
                  ? "border-[#d6ad55]/20 bg-white/[0.04] text-[#e0bd70]"
                  : "border-[#d6ad55]/30 bg-white/70 text-[#8c641d]"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ad55] shadow-[0_0_12px_#d6ad55]" />

              {t.badge}
            </div>

            <h1
              className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.title}

              <span className="block bg-gradient-to-r from-[#d6a94e] via-[#ffe6a0] to-[#a875e8] bg-clip-text text-transparent">
                {t.titleGold}
              </span>
            </h1>

            <p
              className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 ${
                isDark ? "text-white/50" : "text-black/50"
              }`}
            >
              {t.description}
            </p>
          </section>

          {/* ==========================================
              CONTACT CONTENT
          ========================================== */}

          <section className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            {/* ========================================
                CONTACT INFORMATION
            ======================================== */}

            <div>
              <h2
                className={`text-2xl font-bold sm:text-3xl ${
                  isDark ? "text-white" : "text-[#17130d]"
                }`}
              >
                {t.contactTitle}
              </h2>

              <p
                className={`mt-3 text-sm leading-7 ${
                  isDark ? "text-white/45" : "text-black/50"
                }`}
              >
                {t.response}
              </p>

              <div className="mt-7 space-y-4 sm:mt-8">
                {/* EMAIL */}

                <div
                  className={`rounded-2xl border p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:p-5 ${
                    isDark
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-black/10 bg-white/70"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d6ad55]/10 text-lg sm:h-12 sm:w-12 sm:text-xl">
                      📧
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold">{t.emailTitle}</h3>

                      <p
                        className={`mt-1 text-sm leading-6 ${
                          isDark ? "text-white/45" : "text-black/50"
                        }`}
                      >
                        {t.emailText}
                      </p>

                      <a
                        href="mailto:contact@tharurahas.com"
                        className="mt-2 inline-block break-all text-sm font-medium text-[#d6ad55] hover:underline"
                      >
                        contact@tharurahas.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WHATSAPP */}

                <div
                  className={`rounded-2xl border p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:p-5 ${
                    isDark
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-black/10 bg-white/70"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-lg sm:h-12 sm:w-12 sm:text-xl">
                      💬
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold">{t.whatsappTitle}</h3>

                      <p
                        className={`mt-1 text-sm leading-6 ${
                          isDark ? "text-white/45" : "text-black/50"
                        }`}
                      >
                        {t.whatsappText}
                      </p>

                      {/* Replace this number with your real WhatsApp number */}
                      <a
                        href="https://wa.me/947XXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-[#d6ad55] hover:underline"
                      >
                        WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>

                {/* LOCATION */}

                <div
                  className={`rounded-2xl border p-4 sm:p-5 ${
                    isDark
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-black/10 bg-white/70"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg sm:h-12 sm:w-12 sm:text-xl">
                      📍
                    </div>

                    <div>
                      <h3 className="font-semibold">{t.locationTitle}</h3>

                      <p
                        className={`mt-1 text-sm ${
                          isDark ? "text-white/45" : "text-black/50"
                        }`}
                      >
                        {t.locationText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================
                CONTACT FORM
            ======================================== */}

            <div
              className={`rounded-3xl border p-5 shadow-2xl backdrop-blur-xl sm:p-8 ${
                isDark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-black/10 bg-white/80"
              }`}
            >
              <h2
                className={`text-2xl font-bold sm:text-3xl ${
                  isDark ? "text-white" : "text-[#17130d]"
                }`}
              >
                {t.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5 sm:mt-7">
                {/* NAME */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.name}
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    required
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                      isDark
                        ? "border-white/10 bg-black/20 text-white placeholder:text-white/25 focus:border-[#d6ad55]/50"
                        : "border-black/10 bg-white text-[#17130d] placeholder:text-black/30 focus:border-[#d6ad55]/60"
                    }`}
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.email}
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    required
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                      isDark
                        ? "border-white/10 bg-black/20 text-white placeholder:text-white/25 focus:border-[#d6ad55]/50"
                        : "border-black/10 bg-white text-[#17130d] placeholder:text-black/30 focus:border-[#d6ad55]/60"
                    }`}
                  />
                </div>

                {/* SUBJECT */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.subject}
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    required
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                      isDark
                        ? "border-white/10 bg-black/20 text-white placeholder:text-white/25 focus:border-[#d6ad55]/50"
                        : "border-black/10 bg-white text-[#17130d] placeholder:text-black/30 focus:border-[#d6ad55]/60"
                    }`}
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.message}
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    required
                    rows="6"
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition ${
                      isDark
                        ? "border-white/10 bg-black/20 text-white placeholder:text-white/25 focus:border-[#d6ad55]/50"
                        : "border-black/10 bg-white text-[#17130d] placeholder:text-black/30 focus:border-[#d6ad55]/60"
                    }`}
                  />
                </div>

                {/* SUCCESS */}

                {submitted && (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                    ✓ {t.success}
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#d4a64e] to-[#f1d27e] px-6 py-3.5 font-semibold text-[#140e06] shadow-[0_10px_40px_rgba(214,169,78,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(214,169,78,.3)] sm:py-4"
                >
                  {t.send} →
                </button>
              </form>
            </div>
          </section>

          {/* ==========================================
              DISCLAIMER
          ========================================== */}

          <div
            className={`mx-auto mt-12 max-w-3xl rounded-2xl border p-4 text-center text-xs leading-6 sm:mt-16 sm:p-5 ${
              isDark
                ? "border-white/5 bg-white/[0.02] text-white/30"
                : "border-black/5 bg-white/50 text-black/40"
            }`}
          >
            ✦ {t.disclaimer}
          </div>
        </div>
      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer language={language} theme={theme} />
    </div>
  );
};

export default Contact;