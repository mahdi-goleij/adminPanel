import { useLayoutStore } from "../store/LayoutStore";
import { useTranslation } from "react-i18next";

export const useLang = () => {
  const {i18n} = useTranslation()
  const { setLang } = useLayoutStore();

  const handaleLange = (item) => {
    setLang(item.symbol);
    i18n.changeLanguage(item.symbol);
    localStorage.setItem("lang", item.symbol);
    document.documentElement.dir = item.direction;
  };

  const initLang = () => {
    let dir = i18n.language === "en" ? "ltr" : "rtl";
    document.documentElement.dir = dir;
    setLang(i18n.language)
  };

  return { handaleLange, initLang };
};
