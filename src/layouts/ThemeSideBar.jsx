import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/theme-hooks";
import { useLayoutStore } from "../store/LayoutStore";



export const ThemeSideBar = () => {

  const {theme} = useLayoutStore();

  const {handleTheme} = useTheme();
  const {t} = useTranslation();


  return (
    <>
      <div className="sideBar-theme">
        <div className="sideBar-theme-inner">
          <button
            onClick={() => {
              handleTheme("light");
            }}
            className={`${
              theme === "light" && "sideBar-theme-inner-btn-active"
            }`}
          >
            {t('theme.light_theme')}
          </button>
          <button
            onClick={() => {
              handleTheme("dark");
            }}
            className={`${
              theme === "dark" && "sideBar-theme-inner-btn-active"
            }`}
          >
            {t('theme.dark_theme')}
          </button>
        </div>
        <span className="sideBar-theme-label">{t('theme.label')} MahdiGoleij</span>
      </div>
    </>
  );
};
