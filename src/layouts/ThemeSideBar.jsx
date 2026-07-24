import { useTheme } from "../hooks/theme-hooks";
import { useLayoutStore } from "../store/LayoutStore";



export const ThemeSideBar = () => {

  const {theme} = useLayoutStore();

  const {handleTheme} = useTheme();


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
            روشن
          </button>
          <button
            onClick={() => {
              handleTheme("dark");
            }}
            className={`${
              theme === "dark" && "sideBar-theme-inner-btn-active"
            }`}
          >
            تاریک
          </button>
        </div>
        <span className="sideBar-theme-label">قدرت گرفته توسط MahdiGoleij</span>
      </div>
    </>
  );
};
