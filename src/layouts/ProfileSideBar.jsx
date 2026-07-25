import { useTranslation } from 'react-i18next'
import ImgProfile from '../assets/media/profile.png'

export const ProfileSideBar = () => {
    const {t} = useTranslation();
    return (
        <>
        <div className="sideBar-profile">
            <div className="sideBar-profile-inner">
                <div className="sideBar-profile-top">
                    <img src={ImgProfile} alt='profile' />
                    <div className="sideBar-profile-top-name">
                        <span>مهدی گلیج</span><span>@MahdiGoleij</span>
                    </div>
                </div>
                <button>{t('profilesideBar.edit_btn')}</button>
            </div>
        </div>
        
        </>
    )
}