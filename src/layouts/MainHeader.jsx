import { SvgMenu } from "../icons/SvgMenu";
import { SvgSearch } from "../icons/SvgSearch";
import ImgProfile from "../assets/media/profile.png";
import { useContext, useState } from "react";
import { DropDownSettings } from "./ِDropDownSettings";
import { useLayoutStore } from "../store/LayoutStore";
import { useTranslation } from "react-i18next";

export const MainHeader = ({ setHandleSideBar }) => {
  const [visibleDrop, setVisibleDrop] = useState(false);
  const {titlePage} = useLayoutStore()
  const {t} = useTranslation();



  return (
    <>
      <div className="main-header">
        <div className="main-header-right">
          <button onClick={() => setHandleSideBar((prev) => !prev)}>
            <SvgMenu />
          </button>
          <p>{titlePage}</p>
        </div>

        <form className="main-header-center">
          <input type="text" placeholder={t('main_header.search_placeholder')} />
          <button>
            <SvgSearch />
          </button>
        </form>

        <div
          onClick={() => setVisibleDrop((prev) => !prev)}
          className="main-header-left"
        >
          <div>
            <span>مهدی گلیج</span>
            <span>@MahdiGoleij</span>
          </div>
          <img src={ImgProfile} alt="profile" />
        </div>
      </div>

      <DropDownSettings visibleDrop={visibleDrop} setVisibleDrop={setVisibleDrop} />

    </>
  );
};
