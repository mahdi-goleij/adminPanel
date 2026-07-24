import ImgProfile from '../assets/media/profile.png'

export const ProfileSideBar = () => {
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
                <button>ویرایش پروفایل</button>
            </div>
        </div>
        
        </>
    )
}