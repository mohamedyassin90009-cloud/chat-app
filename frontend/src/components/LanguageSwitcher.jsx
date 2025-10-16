// // src/components/LanguageSwitcher.jsx
// import { useLangStore } from "../store/langStore";
// import { useEffect } from "react";
// import i18n from "../i18n";

// export default function LanguageSwitcher() {
//   const { lang, setLang } = useLangStore();

//   useEffect(() => {
//     i18n.changeLanguage(lang);
//     if (lang === "ar") {
//       document.documentElement.dir = "rtl";
//     } else {
//       document.documentElement.dir = "ltr";
//     }
//   }, [lang]);

//   return (
//     <div className="flex gap-2">
//       <button
//         onClick={() => setLang("en")}
//         className={`px-3 py-1 rounded ${
//           lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
//         }`}
//       >
//         EN
//       </button>
//       <button
//         onClick={() => setLang("ar")}
//         className={`px-3 py-1 rounded ${
//           lang === "ar" ? "bg-blue-500 text-white" : "bg-gray-200"
//         }`}
//       >
//         AR
//       </button>
//     </div>
//   );
// }
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="select select-sm bg-base-200 border border-base-300 rounded-md"
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
};

export default LanguageSwitcher;
