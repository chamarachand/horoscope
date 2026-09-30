import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../newComponents/NavBar";
import Footer from "../newComponents/Footer";
import ZodiacCard from "../newComponents/ZodiacCard";

const ZodiacPage = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("si");
  const [theme, setTheme] = useState("dark");

  const [birthDate, setBirthDate] = useState("");
  const [selectedSign, setSelectedSign] = useState(null);

  const [sign1, setSign1] = useState("Aries");
  const [sign2, setSign2] = useState("Leo");

  const isDark = theme === "dark";

  // ==========================================
  // LANGUAGE CONTENT
  // ==========================================

  const content = {
    en: {
      badge: "✦ EXPLORE THE ZODIAC",
      title: "Discover Your",
      titleGold: "Zodiac Sign",
      description:
        "Explore the personalities, elements, strengths, challenges, and cosmic connections of the twelve zodiac signs.",

      findTitle: "Find Your Zodiac Sign",
      findText:
        "Enter your date of birth and discover which zodiac sign you belong to.",
      birthDate: "Your Date of Birth",
      discover: "Discover My Sign",

      signsTitle: "The 12 Zodiac Signs",
      signsText:
        "Explore the unique characteristics and mysteries behind every zodiac sign.",

      elementsTitle: "The Four Elements",
      elementsText:
        "Every zodiac sign belongs to one of four cosmic elements.",

      planetsTitle: "Ruling Planets",
      planetsText:
        "Each zodiac sign is traditionally associated with a ruling planet.",

      compatibilityTitle: "Zodiac Compatibility",
      compatibilityText:
        "Explore an astrology-based compatibility overview between two zodiac signs.",

      yourSign: "Your Sign",
      partnerSign: "Other Sign",

      horoscopeTitle: "Ready to Discover More?",
      horoscopeText:
        "Your zodiac sign is only the beginning. Generate a personalized horoscope using your birth details.",

      generate: "Generate My Horoscope",

      fire: "Fire",
      earth: "Earth",
      air: "Air",
      water: "Water",

      compatibility: "Compatibility",

      yourZodiac: "YOUR ZODIAC SIGN",

      disclaimer:
        "Astrology and AI-generated readings are provided for general and entertainment purposes. They may contain inaccuracies and should not be considered professional advice or guaranteed predictions.",
    },

    si: {
      badge: "✦ රාශි ලෝකය ගවේෂණය කරන්න",
      title: "ඔබේ",
      titleGold: "රාශිය සොයාගන්න",
      description:
        "රාශි 12 හි පෞරුෂ ලක්ෂණ, මූලද්‍රව්‍ය, ශක්තීන්, අභියෝග සහ ජ්‍යෝතිෂ්‍ය සබඳතා පිළිබඳව ගවේෂණය කරන්න.",

      findTitle: "ඔබේ රාශිය සොයාගන්න",
      findText:
        "ඔබේ උපන් දිනය ඇතුළත් කර ඔබට අයත් රාශිය සොයාගන්න.",
      birthDate: "ඔබේ උපන් දිනය",
      discover: "මගේ රාශිය සොයන්න",

      signsTitle: "රාශි 12",
      signsText:
        "සෑම රාශියකම ඇති විශේෂ පෞරුෂ ලක්ෂණ සහ සැඟවුණු රහස් සොයා බලන්න.",

      elementsTitle: "මූලද්‍රව්‍ය 4",
      elementsText:
        "සෑම රාශියක්ම මූලික ජ්‍යෝතිෂ්‍ය මූලද්‍රව්‍ය හතරෙන් එකකට අයත් වේ.",

      planetsTitle: "රාශි අධිපති ග්‍රහයන්",
      planetsText:
        "සෑම රාශියක්ම සාම්ප්‍රදායිකව එක් අධිපති ග්‍රහයෙකු සමඟ සම්බන්ධ වේ.",

      compatibilityTitle: "රාශි ගැළපීම",
      compatibilityText:
        "රාශි දෙකක් අතර ජ්‍යෝතිෂ්‍ය මත පදනම් වූ සාමාන්‍ය ගැළපීමක් සොයා බලන්න.",

      yourSign: "ඔබේ රාශිය",
      partnerSign: "අනෙක් රාශිය",

      horoscopeTitle: "තවත් සොයා බලන්න සූදානම්ද?",
      horoscopeText:
        "ඔබේ රාශිය ආරම්භය පමණයි. ඔබේ උපන් තොරතුරු භාවිතයෙන් පුද්ගලික කේන්දරයක් ලබාගන්න.",

      generate: "මගේ කේන්දරය ලබාගන්න",

      fire: "ගිනි",
      earth: "පෘථිවි",
      air: "වායු",
      water: "ජල",

      compatibility: "ගැළපීම",

      yourZodiac: "ඔබේ රාශිය",

      disclaimer:
        "ජ්‍යෝතිෂ්‍ය සහ AI මඟින් නිර්මාණය කරන ලද කියවීම් සාමාන්‍ය සහ විනෝදාස්වාද අරමුණු සඳහා පමණි. ඒවායේ දෝෂ තිබිය හැකි අතර වෘත්තීය උපදෙස් හෝ සහතික කළ අනාගත අනාවැකි ලෙස සැලකිය යුතු නොවේ.",
    },
  };

  const t = content[language];

  // ==========================================
  // ZODIAC DATA
  // ==========================================

  const zodiacSigns = [
    {
      name: "Aries",
      si: "මේෂ",
      symbol: "♈",
      dates: "Mar 21 – Apr 19",
      datesSi: "මාර්තු 21 – අප්‍රේල් 19",
      element: "Fire",
      planet: "Mars",
      color: "Red",
      number: "9",
      personality: "Bold, energetic and adventurous.",
      personalitySi: "ධෛර්යවත්, ක්‍රියාශීලී සහ වික්‍රමාන්විත පෞරුෂයක්.",
      strengths: "Courage • Confidence • Leadership",
      strengthsSi: "ධෛර්යය • විශ්වාසය • නායකත්වය",
      challenges: "Impatience • Impulsiveness",
      challengesSi: "ඉවසීම අඩු වීම • ඉක්මන් තීරණ",
      love: "Passionate and direct",
      loveSi: "උද්‍යෝගිමත් සහ සෘජු",
      career: "Leadership and competitive fields",
      careerSi: "නායකත්වය සහ තරඟකාරී ක්ෂේත්‍ර",
    },
    {
      name: "Taurus",
      si: "වෘෂභ",
      symbol: "♉",
      dates: "Apr 20 – May 20",
      datesSi: "අප්‍රේල් 20 – මැයි 20",
      element: "Earth",
      planet: "Venus",
      color: "Green",
      number: "6",
      personality: "Patient, reliable and grounded.",
      personalitySi: "ඉවසිලිවන්ත, විශ්වාසදායක සහ ස්ථාවර පෞරුෂයක්.",
      strengths: "Loyalty • Patience • Stability",
      strengthsSi: "විශ්වාසවන්තභාවය • ඉවසීම • ස්ථාවරත්වය",
      challenges: "Stubbornness • Resistance to change",
      challengesSi: "මුරණ්ඩුකම • වෙනස්කම්වලට ප්‍රතිරෝධය",
      love: "Loyal and affectionate",
      loveSi: "විශ්වාසවන්ත සහ ආදරණීය",
      career: "Finance, design and practical fields",
      careerSi: "මූල්‍ය, නිර්මාණ සහ ප්‍රායෝගික ක්ෂේත්‍ර",
    },
    {
      name: "Gemini",
      si: "මිථුන",
      symbol: "♊",
      dates: "May 21 – Jun 20",
      datesSi: "මැයි 21 – ජුනි 20",
      element: "Air",
      planet: "Mercury",
      color: "Yellow",
      number: "5",
      personality: "Curious, social and adaptable.",
      personalitySi: "කුතුහලයෙන් යුතු, සමාජශීලී සහ අනුවර්තනය වන පෞරුෂයක්.",
      strengths: "Communication • Curiosity • Adaptability",
      strengthsSi: "සන්නිවේදනය • කුතුහලය • අනුවර්තනය",
      challenges: "Restlessness • Indecision",
      challengesSi: "නොසන්සුන් බව • තීරණ ගැනීමේ අපහසුතාව",
      love: "Playful and communicative",
      loveSi: "සෙල්ලක්කාර සහ හොඳින් සන්නිවේදනය කරන",
      career: "Communication, media and technology",
      careerSi: "සන්නිවේදනය, මාධ්‍ය සහ තාක්ෂණය",
    },
    {
      name: "Cancer",
      si: "කටක",
      symbol: "♋",
      dates: "Jun 21 – Jul 22",
      datesSi: "ජුනි 21 – ජූලි 22",
      element: "Water",
      planet: "Moon",
      color: "Silver",
      number: "2",
      personality: "Emotional, caring and protective.",
      personalitySi: "හැඟීම්බර, සැලකිලිමත් සහ ආරක්ෂාකාරී පෞරුෂයක්.",
      strengths: "Empathy • Loyalty • Intuition",
      strengthsSi: "සංවේදනය • විශ්වාසවන්තභාවය • අන්තර්ඥානය",
      challenges: "Sensitivity • Mood changes",
      challengesSi: "සංවේදී බව • මනෝභාව වෙනස්වීම්",
      love: "Deeply caring and emotional",
      loveSi: "ගැඹුරින් ආදරණීය සහ හැඟීම්බර",
      career: "Caregiving, education and creative fields",
      careerSi: "රැකවරණය, අධ්‍යාපනය සහ නිර්මාණාත්මක ක්ෂේත්‍ර",
    },
    {
      name: "Leo",
      si: "සිංහ",
      symbol: "♌",
      dates: "Jul 23 – Aug 22",
      datesSi: "ජූලි 23 – අගෝස්තු 22",
      element: "Fire",
      planet: "Sun",
      color: "Gold",
      number: "1",
      personality: "Confident, creative and charismatic.",
      personalitySi: "විශ්වාසයෙන් යුතු, නිර්මාණශීලී සහ ආකර්ෂණීය පෞරුෂයක්.",
      strengths: "Leadership • Creativity • Confidence",
      strengthsSi: "නායකත්වය • නිර්මාණශීලීත්වය • විශ්වාසය",
      challenges: "Pride • Attention seeking",
      challengesSi: "අහංකාරකම • අවධානය සෙවීම",
      love: "Warm and passionate",
      loveSi: "උණුසුම් සහ උද්‍යෝගිමත්",
      career: "Leadership, entertainment and business",
      careerSi: "නායකත්වය, විනෝදාස්වාදය සහ ව්‍යාපාර",
    },
    {
      name: "Virgo",
      si: "කන්‍යා",
      symbol: "♍",
      dates: "Aug 23 – Sep 22",
      datesSi: "අගෝස්තු 23 – සැප්තැම්බර් 22",
      element: "Earth",
      planet: "Mercury",
      color: "Green",
      number: "5",
      personality: "Analytical, practical and thoughtful.",
      personalitySi: "විශ්ලේෂණාත්මක, ප්‍රායෝගික සහ සිතාබලන පෞරුෂයක්.",
      strengths: "Organization • Intelligence • Reliability",
      strengthsSi: "සංවිධානය • බුද්ධිය • විශ්වාසදායක බව",
      challenges: "Overthinking • Perfectionism",
      challengesSi: "අධික ලෙස සිතීම • පරිපූර්ණත්වය සෙවීම",
      love: "Loyal and thoughtful",
      loveSi: "විශ්වාසවන්ත සහ සැලකිලිමත්",
      career: "Technology, analysis and healthcare",
      careerSi: "තාක්ෂණය, විශ්ලේෂණය සහ සෞඛ්‍ය ක්ෂේත්‍ර",
    },
    {
      name: "Libra",
      si: "තුලා",
      symbol: "♎",
      dates: "Sep 23 – Oct 22",
      datesSi: "සැප්තැම්බර් 23 – ඔක්තෝබර් 22",
      element: "Air",
      planet: "Venus",
      color: "Pink",
      number: "6",
      personality: "Balanced, diplomatic and charming.",
      personalitySi: "සමබර, රාජ්‍යතාන්ත්‍රික සහ ආකර්ෂණීය පෞරුෂයක්.",
      strengths: "Diplomacy • Charm • Fairness",
      strengthsSi: "රාජ්‍යතාන්ත්‍රිකත්වය • ආකර්ෂණය • සාධාරණත්වය",
      challenges: "Indecision • Avoiding conflict",
      challengesSi: "තීරණ ගැනීමේ අපහසුතාව • ගැටුම් මඟහැරීම",
      love: "Romantic and harmonious",
      loveSi: "ආදරණීය සහ සාමකාමී",
      career: "Law, design and communication",
      careerSi: "නීතිය, නිර්මාණ සහ සන්නිවේදනය",
    },
    {
      name: "Scorpio",
      si: "වෘශ්චික",
      symbol: "♏",
      dates: "Oct 23 – Nov 21",
      datesSi: "ඔක්තෝබර් 23 – නොවැම්බර් 21",
      element: "Water",
      planet: "Mars",
      color: "Dark Red",
      number: "8",
      personality: "Intense, mysterious and determined.",
      personalitySi: "ගැඹුරු, අභිරහස් සහ අධිෂ්ඨානශීලී පෞරුෂයක්.",
      strengths: "Determination • Intuition • Loyalty",
      strengthsSi: "අධිෂ්ඨානය • අන්තර්ඥානය • විශ්වාසවන්තභාවය",
      challenges: "Jealousy • Intensity",
      challengesSi: "ඊර්ෂ්‍යාව • අධික තීව්‍රතාව",
      love: "Deep and passionate",
      loveSi: "ගැඹුරු සහ උද්‍යෝගිමත්",
      career: "Research, psychology and investigation",
      careerSi: "පර්යේෂණ, මනෝවිද්‍යාව සහ විමර්ශන",
    },
    {
      name: "Sagittarius",
      si: "ධනු",
      symbol: "♐",
      dates: "Nov 22 – Dec 21",
      datesSi: "නොවැම්බර් 22 – දෙසැම්බර් 21",
      element: "Fire",
      planet: "Jupiter",
      color: "Purple",
      number: "3",
      personality: "Optimistic, adventurous and independent.",
      personalitySi: "සුභවාදී, වික්‍රමාන්විත සහ ස්වාධීන පෞරුෂයක්.",
      strengths: "Optimism • Adventure • Honesty",
      strengthsSi: "සුභවාදී බව • වික්‍රමය • අවංකකම",
      challenges: "Restlessness • Bluntness",
      challengesSi: "නොසන්සුන් බව • අධික සෘජු බව",
      love: "Adventurous and open",
      loveSi: "වික්‍රමාන්විත සහ විවෘත",
      career: "Travel, education and entrepreneurship",
      careerSi: "සංචාර, අධ්‍යාපනය සහ ව්‍යවසායකත්වය",
    },
    {
      name: "Capricorn",
      si: "මකර",
      symbol: "♑",
      dates: "Dec 22 – Jan 19",
      datesSi: "දෙසැම්බර් 22 – ජනවාරි 19",
      element: "Earth",
      planet: "Saturn",
      color: "Brown",
      number: "8",
      personality: "Disciplined, ambitious and responsible.",
      personalitySi: "විනයගරුක, අභිලාෂකාමී සහ වගකීම් සහිත පෞරුෂයක්.",
      strengths: "Discipline • Ambition • Responsibility",
      strengthsSi: "විනය • අභිලාෂය • වගකීම",
      challenges: "Workaholism • Rigidity",
      challengesSi: "වැඩට අධික අවධානය • දැඩි බව",
      love: "Committed and dependable",
      loveSi: "කැපවීමෙන් සහ විශ්වාසයෙන් යුතු",
      career: "Business, management and finance",
      careerSi: "ව්‍යාපාර, කළමනාකරණය සහ මූල්‍ය",
    },
    {
      name: "Aquarius",
      si: "කුම්භ",
      symbol: "♒",
      dates: "Jan 20 – Feb 18",
      datesSi: "ජනවාරි 20 – පෙබරවාරි 18",
      element: "Air",
      planet: "Saturn",
      color: "Blue",
      number: "4",
      personality: "Independent, innovative and original.",
      personalitySi: "ස්වාධීන, නවෝත්පාදනශීලී සහ මුල් අදහස් ඇති පෞරුෂයක්.",
      strengths: "Innovation • Independence • Vision",
      strengthsSi: "නවෝත්පාදනය • ස්වාධීනත්වය • දැක්ම",
      challenges: "Detachment • Unpredictability",
      challengesSi: "ඈත්වීම • අනපේක්ෂිත බව",
      love: "Independent and intellectual",
      loveSi: "ස්වාධීන සහ බුද්ධිමය",
      career: "Technology, science and innovation",
      careerSi: "තාක්ෂණය, විද්‍යාව සහ නවෝත්පාදනය",
    },
    {
      name: "Pisces",
      si: "මීන",
      symbol: "♓",
      dates: "Feb 19 – Mar 20",
      datesSi: "පෙබරවාරි 19 – මාර්තු 20",
      element: "Water",
      planet: "Jupiter",
      color: "Sea Green",
      number: "7",
      personality: "Compassionate, imaginative and intuitive.",
      personalitySi: "කරුණාවන්ත, සිතිවිලිමය සහ අන්තර්ඥානයෙන් යුතු පෞරුෂයක්.",
      strengths: "Empathy • Creativity • Intuition",
      strengthsSi: "සංවේදනය • නිර්මාණශීලීත්වය • අන්තර්ඥානය",
      challenges: "Sensitivity • Escapism",
      challengesSi: "සංවේදී බව • යථාර්ථයෙන් පලායාම",
      love: "Romantic and compassionate",
      loveSi: "ආදරණීය සහ කරුණාවන්ත",
      career: "Arts, healing and creative fields",
      careerSi: "කලා, සුවපත් කිරීම සහ නිර්මාණාත්මක ක්ෂේත්‍ර",
    },
  ];

  // ==========================================
  // ELEMENT DATA
  // ==========================================

  const elements = [
    {
      name: "Fire",
      symbol: "🔥",
      signs: "Aries • Leo • Sagittarius",
      description: "Passionate, energetic and action-oriented.",
      descriptionSi: "උද්‍යෝගිමත්, ක්‍රියාශීලී සහ ක්‍රියාවට නැඹුරු.",
      color: "from-orange-500/20 to-red-500/5",
    },
    {
      name: "Earth",
      symbol: "🌍",
      signs: "Taurus • Virgo • Capricorn",
      description: "Practical, grounded and dependable.",
      descriptionSi: "ප්‍රායෝගික, ස්ථාවර සහ විශ්වාසදායක.",
      color: "from-green-500/20 to-emerald-500/5",
    },
    {
      name: "Air",
      symbol: "💨",
      signs: "Gemini • Libra • Aquarius",
      description: "Intellectual, social and communicative.",
      descriptionSi: "බුද්ධිමය, සමාජශීලී සහ සන්නිවේදනශීලී.",
      color: "from-blue-500/20 to-cyan-500/5",
    },
    {
      name: "Water",
      symbol: "💧",
      signs: "Cancer • Scorpio • Pisces",
      description: "Emotional, intuitive and deeply sensitive.",
      descriptionSi: "හැඟීම්බර, අන්තර්ඥානයෙන් යුතු සහ ගැඹුරින් සංවේදී.",
      color: "from-purple-500/20 to-blue-500/5",
    },
  ];

  // ==========================================
  // PLANETS
  // ==========================================

  const planets = [
    {
      name: "☀️ Sun",
      signs: "Leo",
      description: "Identity, confidence and self-expression.",
      descriptionSi: "අනන්‍යතාව, විශ්වාසය සහ ස්වයං ප්‍රකාශනය.",
    },
    {
      name: "🌙 Moon",
      signs: "Cancer",
      description: "Emotion, intuition and inner world.",
      descriptionSi: "හැඟීම්, අන්තර්ඥානය සහ අභ්‍යන්තර ලෝකය.",
    },
    {
      name: "☿ Mercury",
      signs: "Gemini • Virgo",
      description: "Communication, thinking and intelligence.",
      descriptionSi: "සන්නිවේදනය, සිතීම සහ බුද්ධිය.",
    },
    {
      name: "♀ Venus",
      signs: "Taurus • Libra",
      description: "Love, beauty and harmony.",
      descriptionSi: "ආදරය, සුන්දරත්වය සහ සමගිය.",
    },
    {
      name: "♂ Mars",
      signs: "Aries • Scorpio",
      description: "Energy, courage and action.",
      descriptionSi: "ශක්තිය, ධෛර්යය සහ ක්‍රියාව.",
    },
    {
      name: "♃ Jupiter",
      signs: "Sagittarius • Pisces",
      description: "Growth, optimism and exploration.",
      descriptionSi: "වර්ධනය, සුභවාදී බව සහ ගවේෂණය.",
    },
    {
      name: "♄ Saturn",
      signs: "Capricorn • Aquarius",
      description: "Discipline, responsibility and structure.",
      descriptionSi: "විනය, වගකීම සහ ව්‍යුහය.",
    },
  ];

  // ==========================================
  // FIND ZODIAC FROM DATE
  // ==========================================

  const getZodiacFromDate = (dateString) => {
    if (!dateString) return null;

    const date = new Date(`${dateString}T12:00:00`);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
      return "Aries";

    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
      return "Taurus";

    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
      return "Gemini";

    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
      return "Cancer";

    if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
      return "Leo";

    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
      return "Virgo";

    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
      return "Libra";

    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
      return "Scorpio";

    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
      return "Sagittarius";

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
      return "Capricorn";

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
      return "Aquarius";

    return "Pisces";
  };

  const discoveredSign = useMemo(() => {
    const signName = getZodiacFromDate(birthDate);

    if (!signName) return null;

    return zodiacSigns.find((sign) => sign.name === signName);
  }, [birthDate]);

  // ==========================================
  // SELECT SIGN
  // ==========================================

  const selectSign = (sign) => {
    setSelectedSign(sign);

    setTimeout(() => {
      document.getElementById("zodiac-result")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const findSign = () => {
    if (!discoveredSign) return;

    selectSign(discoveredSign);
  };

  // ==========================================
  // COMPATIBILITY
  // ==========================================

  const selectedCompatibility = useMemo(() => {
    const first = zodiacSigns.find((item) => item.name === sign1);
    const second = zodiacSigns.find((item) => item.name === sign2);

    if (!first || !second) return null;

    const elementMatch = first.element === second.element;

    const fireAir =
      ["Fire", "Air"].includes(first.element) &&
      ["Fire", "Air"].includes(second.element);

    const earthWater =
      ["Earth", "Water"].includes(first.element) &&
      ["Earth", "Water"].includes(second.element);

    let score = 65;

    if (elementMatch) score = 82;
    if (fireAir || earthWater) score = 78;
    if (first.name === second.name) score = 90;

    return {
      first,
      second,
      score,
    };
  }, [sign1, sign2]);

  // ==========================================
  // UI
  // ==========================================

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
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

      <main className="relative overflow-hidden pt-20">

        {/* ==========================================
            COSMIC BACKGROUND
        ========================================== */}

        {isDark && (
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle, white 1px, transparent 1px),
                radial-gradient(circle, rgba(214,173,85,.6) 1px, transparent 1px)
              `,
              backgroundSize: "90px 90px, 150px 150px",
            }}
          />
        )}

        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-purple-700/20 blur-[140px]" />

        <div className="pointer-events-none absolute -left-40 top-[500px] h-[400px] w-[400px] rounded-full bg-[#d6ad55]/10 blur-[130px]" />

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="relative px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">

            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d6ad55]/20 bg-white/[0.03] px-4 py-2 text-[10px] tracking-[3px] text-[#e0bd70] backdrop-blur-md sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d6ad55] shadow-[0_0_12px_#d6ad55]" />
              {t.badge}
            </div>

            <h1
              className={`mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl ${
                isDark ? "text-white" : "text-[#17130d]"
              }`}
            >
              {t.title}

              <span className="mt-2 block bg-gradient-to-r from-[#d6a94e] via-[#ffe6a0] to-[#a875e8] bg-clip-text text-transparent">
                {t.titleGold}
              </span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${
                isDark ? "text-white/50" : "text-black/50"
              }`}
            >
              {t.description}
            </p>

            {/* ZODIAC WHEEL */}

            <div className="relative mx-auto mt-12 flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">

              <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-[#d6ad55]/20" />

              <div className="absolute inset-[12%] animate-[spin_20s_linear_infinite_reverse] rounded-full border border-purple-400/20" />

              <div className="absolute inset-[25%] animate-pulse rounded-full bg-[#d6ad55]/10 blur-2xl" />

              <div className="relative z-10 text-7xl sm:text-8xl">
                ♈
              </div>

              <span className="absolute left-1/2 top-0 -translate-x-1/2 text-xl text-[#d6ad55]">
                ♌
              </span>

              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl text-[#d6ad55]">
                ♎
              </span>

              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xl text-[#d6ad55]">
                ♑
              </span>

              <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl text-[#d6ad55]">
                ♋
              </span>
            </div>
          </div>
        </section>

        {/* ==========================================
            FIND YOUR SIGN
        ========================================== */}

        <section className="relative px-5 py-10 sm:px-6 lg:px-8">
          <div
            className={`mx-auto max-w-4xl rounded-3xl border p-6 text-center shadow-2xl backdrop-blur-xl sm:p-10 ${
              isDark
                ? "border-[#d6ad55]/20 bg-white/[0.04]"
                : "border-black/10 bg-white/80"
            }`}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6ad55]/10 text-2xl">
              🔮
            </div>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              {t.findTitle}
            </h2>

            <p
              className={`mx-auto mt-3 max-w-xl text-sm leading-7 ${
                isDark ? "text-white/45" : "text-black/50"
              }`}
            >
              {t.findText}
            </p>

            <div className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">
              <div className="flex-1 text-left">
                <label className="mb-2 block text-sm font-medium">
                  {t.birthDate}
                </label>

                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? "border-white/10 bg-black/30 text-white focus:border-[#d6ad55]/50"
                      : "border-black/10 bg-white text-[#17130d] focus:border-[#d6ad55]/60"
                  }`}
                />
              </div>

              <button
                onClick={findSign}
                disabled={!birthDate}
                className="self-end rounded-xl bg-gradient-to-r from-[#d4a64e] to-[#f1d27e] px-6 py-3.5 font-semibold text-[#140e06] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(214,169,78,.25)] disabled:cursor-not-allowed disabled:opacity-40 sm:whitespace-nowrap"
              >
                {t.discover} →
              </button>
            </div>
          </div>
        </section>

        {/* ==========================================
            SELECTED ZODIAC RESULT
        ========================================== */}

        {selectedSign && (
          <section
            id="zodiac-result"
            className="relative px-5 py-10 sm:px-6 lg:px-8"
          >
            <div
              className={`mx-auto max-w-5xl rounded-3xl border p-6 shadow-2xl sm:p-10 ${
                isDark
                  ? "border-[#d6ad55]/20 bg-gradient-to-br from-[#15100a]/80 to-purple-950/20"
                  : "border-black/10 bg-white/90"
              }`}
            >
              <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">

                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-[#d6ad55]/30 bg-[#d6ad55]/10 text-7xl shadow-[0_0_50px_rgba(214,173,85,.15)]">
                  {selectedSign.symbol}
                </div>

                <div className="text-center md:text-left">

                  <p className="text-xs uppercase tracking-[3px] text-[#d6ad55]">
                    ✦ {t.yourZodiac}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    {language === "si"
                      ? selectedSign.si
                      : selectedSign.name}
                  </h2>

                  <p className="mt-2 text-sm text-[#d6ad55]">
                    {selectedSign.symbol}{" "}
                    {language === "si"
                      ? selectedSign.datesSi
                      : selectedSign.dates}
                  </p>

                  <p
                    className={`mt-5 max-w-2xl text-sm leading-7 ${
                      isDark ? "text-white/50" : "text-black/50"
                    }`}
                  >
                    {language === "si"
                      ? selectedSign.personalitySi
                      : selectedSign.personality}
                  </p>

                  <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                    <span className="rounded-full bg-[#d6ad55]/10 px-3 py-1.5 text-xs text-[#d6ad55]">
                      ✦ {selectedSign.element}
                    </span>

                    <span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300">
                      🪐 {selectedSign.planet}
                    </span>

                    <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
                      # {selectedSign.number}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    <div
                      className={`rounded-xl border p-4 ${
                        isDark
                          ? "border-white/5 bg-white/[0.03]"
                          : "border-black/5 bg-black/[0.02]"
                      }`}
                    >
                      <p className="text-xs text-[#d6ad55]">
                        {language === "si" ? "ශක්තීන්" : "Strengths"}
                      </p>

                      <p className="mt-2 text-sm">
                        {language === "si"
                          ? selectedSign.strengthsSi
                          : selectedSign.strengths}
                      </p>
                    </div>

                    <div
                      className={`rounded-xl border p-4 ${
                        isDark
                          ? "border-white/5 bg-white/[0.03]"
                          : "border-black/5 bg-black/[0.02]"
                      }`}
                    >
                      <p className="text-xs text-[#d6ad55]">
                        {language === "si" ? "අභියෝග" : "Challenges"}
                      </p>

                      <p className="mt-2 text-sm">
                        {language === "si"
                          ? selectedSign.challengesSi
                          : selectedSign.challenges}
                      </p>
                    </div>

                    <div
                      className={`rounded-xl border p-4 ${
                        isDark
                          ? "border-white/5 bg-white/[0.03]"
                          : "border-black/5 bg-black/[0.02]"
                      }`}
                    >
                      <p className="text-xs text-[#d6ad55]">
                        {language === "si" ? "ආදරය" : "Love"}
                      </p>

                      <p className="mt-2 text-sm">
                        {language === "si"
                          ? selectedSign.loveSi
                          : selectedSign.love}
                      </p>
                    </div>

                    <div
                      className={`rounded-xl border p-4 ${
                        isDark
                          ? "border-white/5 bg-white/[0.03]"
                          : "border-black/5 bg-black/[0.02]"
                      }`}
                    >
                      <p className="text-xs text-[#d6ad55]">
                        {language === "si" ? "රැකියාව" : "Career"}
                      </p>

                      <p className="mt-2 text-sm">
                        {language === "si"
                          ? selectedSign.careerSi
                          : selectedSign.career}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            12 ZODIAC SIGNS
        ========================================== */}

        <section className="relative px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#d6ad55]">
                THARURAHAS
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {t.signsTitle}
              </h2>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isDark ? "text-white/45" : "text-black/50"
                }`}
              >
                {t.signsText}
              </p>
            </div>

            {/* REUSABLE ZODIAC CARDS */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {zodiacSigns.map((sign, index) => (
                <ZodiacCard
                  key={sign.name}
                  sign={sign}
                  language={language}
                  theme={theme}
                  index={index}
                  onSelect={selectSign}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ==========================================
            FOUR ELEMENTS
        ========================================== */}

        <section
          className={`relative border-y px-5 py-16 sm:px-6 sm:py-20 lg:px-8 ${
            isDark
              ? "border-white/5 bg-white/[0.015]"
              : "border-black/5 bg-black/[0.015]"
          }`}
        >
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t.elementsTitle}
              </h2>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isDark ? "text-white/45" : "text-black/50"
                }`}
              >
                {t.elementsText}
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {elements.map((element) => (
                <div
                  key={element.name}
                  className={`group rounded-2xl border bg-gradient-to-br p-6 transition duration-500 hover:-translate-y-2 ${element.color} ${
                    isDark
                      ? "border-white/10"
                      : "border-black/10"
                  }`}
                >
                  <div className="text-4xl transition duration-500 group-hover:scale-110">
                    {element.symbol}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {language === "si"
                      ? t[element.name.toLowerCase()]
                      : element.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#d6ad55]">
                    {element.signs}
                  </p>

                  <p
                    className={`mt-4 text-sm leading-6 ${
                      isDark
                        ? "text-white/45"
                        : "text-black/50"
                    }`}
                  >
                    {language === "si"
                      ? element.descriptionSi
                      : element.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            RULING PLANETS
        ========================================== */}

        <section className="relative px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t.planetsTitle}
              </h2>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isDark
                    ? "text-white/45"
                    : "text-black/50"
                }`}
              >
                {t.planetsText}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {planets.map((planet) => (
                <div
                  key={planet.name}
                  className={`group rounded-2xl border p-5 transition duration-500 hover:-translate-y-2 hover:border-[#d6ad55]/30 ${
                    isDark
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-black/10 bg-white/70"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-[#d6ad55]">
                    {planet.name}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-wider text-purple-300">
                    {planet.signs}
                  </p>

                  <p
                    className={`mt-4 text-sm leading-6 ${
                      isDark
                        ? "text-white/45"
                        : "text-black/50"
                    }`}
                  >
                    {language === "si"
                      ? planet.descriptionSi
                      : planet.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            COMPATIBILITY
        ========================================== */}

        <section
          className={`relative px-5 py-16 sm:px-6 sm:py-20 lg:px-8 ${
            isDark
              ? "bg-[#07040e]"
              : "bg-[#f5f1e8]"
          }`}
        >
          <div className="mx-auto max-w-5xl">

            <div className="mx-auto max-w-2xl text-center">
              <div className="text-4xl">❤️</div>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {t.compatibilityTitle}
              </h2>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isDark
                    ? "text-white/45"
                    : "text-black/50"
                }`}
              >
                {t.compatibilityText}
              </p>
            </div>

            <div
              className={`mt-10 rounded-3xl border p-6 sm:p-10 ${
                isDark
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-black/10 bg-white/80"
              }`}
            >
              <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-end">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.yourSign}
                  </label>

                  <select
                    value={sign1}
                    onChange={(e) => setSign1(e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 outline-none ${
                      isDark
                        ? "border-white/10 bg-[#0b0713] text-white"
                        : "border-black/10 bg-white text-[#17130d]"
                    }`}
                  >
                    {zodiacSigns.map((sign) => (
                      <option key={sign.name} value={sign.name}>
                        {sign.symbol}{" "}
                        {language === "si"
                          ? sign.si
                          : sign.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-center text-3xl text-[#d6ad55]">
                  ×
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    {t.partnerSign}
                  </label>

                  <select
                    value={sign2}
                    onChange={(e) => setSign2(e.target.value)}
                    className={`w-full rounded-xl border px-4 py-3 outline-none ${
                      isDark
                        ? "border-white/10 bg-[#0b0713] text-white"
                        : "border-black/10 bg-white text-[#17130d]"
                    }`}
                  >
                    {zodiacSigns.map((sign) => (
                      <option key={sign.name} value={sign.name}>
                        {sign.symbol}{" "}
                        {language === "si"
                          ? sign.si
                          : sign.name}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {selectedCompatibility && (
                <div className="mt-10 text-center">

                  <div className="text-5xl">
                    {selectedCompatibility.first.symbol} ❤️{" "}
                    {selectedCompatibility.second.symbol}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {language === "si"
                      ? `${selectedCompatibility.first.si} × ${selectedCompatibility.second.si}`
                      : `${selectedCompatibility.first.name} × ${selectedCompatibility.second.name}`}
                  </h3>

                  <div className="mx-auto mt-7 max-w-md">

                    <div className="mb-2 flex justify-between text-sm">
                      <span>{t.compatibility}</span>

                      <span className="font-bold text-[#d6ad55]">
                        {selectedCompatibility.score}%
                      </span>
                    </div>

                    <div
                      className={`h-3 overflow-hidden rounded-full ${
                        isDark
                          ? "bg-white/10"
                          : "bg-black/10"
                      }`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#d4a64e] to-[#f1d27e] transition-all duration-700"
                        style={{
                          width: `${selectedCompatibility.score}%`,
                        }}
                      />
                    </div>

                  </div>

                  <p
                    className={`mx-auto mt-5 max-w-xl text-xs leading-6 ${
                      isDark
                        ? "text-white/35"
                        : "text-black/40"
                    }`}
                  >
                    {language === "si"
                      ? "මෙය සාම්ප්‍රදායික ජ්‍යෝතිෂ්‍ය මත පදනම් වූ සාමාන්‍ය ගැළපීමක් පමණි."
                      : "This is a general astrology-based compatibility overview for entertainment purposes."}
                  </p>

                </div>
              )}
            </div>
          </div>
        </section>

        {/* ==========================================
            HOROSCOPE CTA
        ========================================== */}

        <section className="relative px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div
            className={`relative mx-auto max-w-5xl overflow-hidden rounded-3xl border p-8 text-center sm:p-12 lg:p-16 ${
              isDark
                ? "border-[#d6ad55]/20 bg-gradient-to-br from-[#15100a] via-[#0d0915] to-purple-950/30"
                : "border-[#d6ad55]/30 bg-gradient-to-br from-[#fffaf0] to-[#f1e9ff]"
            }`}
          >
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#d6ad55]/10 blur-[100px]" />

            <div className="relative z-10">

              <div className="text-4xl">
                ✨
              </div>

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                {t.horoscopeTitle}
              </h2>

              <p
                className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
                  isDark
                    ? "text-white/50"
                    : "text-black/50"
                }`}
              >
                {t.horoscopeText}
              </p>

              <button
                onClick={() => navigate("/horoscope")}
                className="group relative mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-[#d4a64e] to-[#f1d27e] px-7 py-4 font-semibold text-[#140e06] shadow-[0_10px_40px_rgba(214,169,78,.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(214,169,78,.35)]"
              >
                <span className="absolute inset-y-0 -left-16 w-10 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[120%]" />

                <span className="relative">
                  {t.generate} →
                </span>
              </button>

            </div>
          </div>
        </section>

        {/* ==========================================
            DISCLAIMER
        ========================================== */}

        <div
          className={`mx-auto mb-16 max-w-3xl px-5 text-center text-xs leading-6 sm:px-6 ${
            isDark
              ? "text-white/25"
              : "text-black/35"
          }`}
        >
          ✦ {t.disclaimer}
        </div>

      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer
        language={language}
        theme={theme}
      />
    </div>
  );
};

export default ZodiacPage;