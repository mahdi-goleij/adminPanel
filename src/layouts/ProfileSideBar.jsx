import { useTranslation } from "react-i18next";
import ImgProfile from "../assets/media/profile.png";
import { useAuthStore } from "../store/AuthStore";

export const ProfileSideBar = () => {
  const { user } = useAuthStore(); // ۲. گرفتن اطلاعات کاربر از Zustand

  const { t } = useTranslation();
  return (
    <>
      <div className="sideBar-profile">
        <div className="sideBar-profile-inner">
          <div className="sideBar-profile-top">
            <img src={ImgProfile} alt="profile" />
            <div className="sideBar-profile-top-name">
              <span>{user?.fullName || t('profilesideBar.guestUser')}</span>
              <span>{user?.email || "email@example.com"}</span>
            </div>
          </div>
          <button>{t("profilesideBar.edit_btn")}</button>
        </div>
      </div>
    </>
  );
};
