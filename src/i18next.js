import ru from "./lang/ru.json";
import az from "./lang/az.json";
import en from "./lang/en.json";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { getFromLocale } from "./utils";
import i18next from "i18next";

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },
      az: { translation: az },
      en: { translation: en },
    },
    lng: getFromLocale("i18Next") ?? "az",
    fallbackLng: getFromLocale("i18Next") ?? "az",
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
  });

export default i18next;
