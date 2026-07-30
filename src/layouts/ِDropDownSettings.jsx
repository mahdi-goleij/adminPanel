import {SvgUser} from "../icons/SvgUser"
import {SvgLogOut} from "../icons/SvgLogOut"
import { useLayoutStore } from "../store/LayoutStore";
import { useTheme } from "../hooks/theme-hooks";
import { useLang } from "../hooks/lang-hooks";
import { useTranslation } from "react-i18next";
import { useLogout } from "../hooks/auth-hooks";

export const DropDownSettings = ({visibleDrop, setVisibleDrop}) => {
  const {theme , lang} = useLayoutStore();

  const {handleTheme} = useTheme();

  const {handaleLange} = useLang()
  const {t} = useTranslation();
  const {mutate} = useLogout()



  const langList = [
    {
      title: "فارسی",
      symbol: "fa",
      direction: 'rtl',
    },
    {
      title: "english",
      symbol: "en",
      direction: 'ltr',
    },
    // {
    //   title: "فرانسوی",
    //   symbol: "fr",
    //   direction: 'ltr',
    // },
    // {
    //   title: "عربي",
    //   symbol: "ar",
    //   direction: 'rtl',
    // },
  ];

  return (
    <>
      <div
        onClick={() => setVisibleDrop(false)}
        className={`drop-settings-bg ${
          visibleDrop && "drop-settings-bg-active"
        }`}
      ></div>
      <div className={`drop-setting ${visibleDrop && "drop-setting-active"}`}>
        <div className="drop-setting-top">
          {langList.map((item, index) => (
            <>
              <button
                key={index}
                onClick={() => {
                  handaleLange(item);
                }}
                className={`drop-setting-top-item ${
                  lang == item.symbol && "drop-setting-top-item-active"
                }`}
              >
                {item.title}
              </button>
            </>
          ))}
        </div>

        <div className="drop-setting-theme">
          <button onClick={()=> {handleTheme('light')}} className={`drop-setting-theme-btn ${theme === 'light' && 'drop-setting-theme-btn-active'}`}>{t('theme.light_theme')}</button>
          <button onClick={()=> {handleTheme('dark')}} className={`drop-setting-theme-btn ${theme === 'dark' && 'drop-setting-theme-btn-active'}`}>{t('theme.dark_theme')}</button>
        </div>

        <div className="drop-setting-botton">
          <div className="drop-setting-botton-item">
            <SvgUser />
            <span>{t('dropdown.profile')}</span>
          </div>
          <div onClick={() => mutate()} className="drop-setting-botton-item">
            <SvgLogOut />
            <span>{t('dropdown.logout')}</span>
          </div>
        </div>
      </div>
    </>
  );
};
