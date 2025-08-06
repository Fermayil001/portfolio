import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // JSON faylları üçün
  .use(initReactI18next)
  .init({
    fallbackLng: "az",
    supportedLngs: ["az", "en"],
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // public içində saxlanılacaq
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
