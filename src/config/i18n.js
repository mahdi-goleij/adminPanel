import i18next from "i18next";
import { initReactI18next } from "react-i18next";


i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        sale: "The amount of sales",
      },
    },
    fa: {
      translation: {
        sale: "میزان فروش",
      },
    },
  },
  lng: localStorage.getItem('lang') || "fa",
  fallbackLng: "fa",

  interpolation: {
    escapeValue: false,
  },
});
