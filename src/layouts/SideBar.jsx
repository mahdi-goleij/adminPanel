import { useState } from "react";
import { SvgLogo } from "../icons/SvgLogo";
import { SvgPlus } from "../icons/SvgPlus";
import "./SideBar.css";
import { menu } from "../constants/layout-const";
import { ProfileSideBar } from "./ProfileSideBar";
import { ThemeSideBar } from "./ThemeSideBar";
import { SvgMenu } from "../icons/SvgMenu";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SideBar = ({ handleSideBar, setHandleSideBar }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  const navigate = useNavigate()
  const {t} = useTranslation()
  
  const handleRoute = (index , item) => {
    if (item.path) {
      // location.href = item.path
      navigate(item.path)
      setActiveSubMenu(index);
      return;
    }
    if (activeSubMenu == index) {
      setActiveSubMenu(-1);
    } else {
      setActiveSubMenu(index);
    }
  };

  return (
    <>
      <div className={`sideBar ${handleSideBar && "sideBar-handle"}`}>
        <div className="sideBar-head">
          <h2>webMG</h2>
          <SvgLogo />
          <button onClick={() => setHandleSideBar((prev) => !prev)}>
            <SvgMenu />
          </button>
        </div>
        {!handleSideBar && (
          <>
            <ProfileSideBar />
          </>
        )}

        <div className="sideBar-center">
          <button className="sideBar-center-newProject">
            <SvgPlus />
            <span>پروژه جدید</span>
          </button>
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={`sideBar-center-item ${
                  activeSubMenu == index && "sideBar-center-item-active"
                }`}
              >
                <button onClick={() => handleRoute(index , item)}>
                  {item.icon}
                  <span>{t(item.title)}</span>
                </button>
                {item.submenu && (
                  <>
                    <SubMenu submenuData={item.submenu} handleRoute={handleRoute} parentIndex={index} />
                    <SideMenu submenuData={item.submenu} handleRoute={handleRoute} parentIndex={index} />
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        {!handleSideBar && (
          <>
            <ThemeSideBar />
          </>
        )}
        {/* <ProfileSideBar /> */}
      </div>
    </>
  );
};

const SubMenu = ({ submenuData, handleRoute , parentIndex }) => {
  const {t} = useTranslation()
  return (
    <>
      <div className="sideBar-center-item-menu">
        {submenuData.map((item, index) => (
          <div key={index} onClick={()=> handleRoute(parentIndex, item)} className="sideBar-center-item-menu-item">
            {t(item.title)}
          </div>
        ))}
      </div>
    </>
  );
};

const SideMenu = ({ submenuData , handleRoute, parentIndex }) => {
  return (
    <>
      <div className="sideBar-center-item-sideMenu">
        {submenuData.map((item, index) => (
          <div key={index} onClick={()=> handleRoute(parentIndex, item)} className="sideBar-center-item-sideMenu-item">
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
};
