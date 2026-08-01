import { SvgMenu } from "../icons/SvgMenu";
import { SvgSearch } from "../icons/SvgSearch";
import ImgProfile from "../assets/media/profile.png";
import { useContext, useState } from "react";
import { DropDownSettings } from "./ِDropDownSettings";
import { useLayoutStore } from "../store/LayoutStore";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../store/AuthStore";

export const MainHeader = ({ setHandleSideBar }) => {
  const [visibleDrop, setVisibleDrop] = useState(false);
  const {titlePage} = useLayoutStore()
  const {user} = useAuthStore(); // ۲. گرفتن اطلاعات کاربر از Zustand
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
            {/* ۳. نمایش نام کامل و ایمیل پویا با یک شرط امنیتی کوچک */}
            <span>{user?.fullName || "کاربر مهمان"}</span>
            <span>{user?.email || "email@example.com"}</span>
          </div>
          <img src={ImgProfile} alt="profile" />
        </div>
      </div>

      <DropDownSettings visibleDrop={visibleDrop} setVisibleDrop={setVisibleDrop} />
    </>
  );
};