import { SvgMenu } from "../icons/SvgMenu";
import { SvgSearch } from "../icons/SvgSearch";
import ImgProfile from "../assets/media/profile.png";
import { useContext, useState } from "react";
import { DropDownSettings } from "./ِDropDownSettings";
import { useLayoutStore } from "../store/LayoutStore";

export const MainHeader = ({ setHandleSideBar }) => {
  const [visibleDrop, setVisibleDrop] = useState(false);
  const {titlePage} = useLayoutStore()



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
          <input type="text" placeholder="جست و جو کنید" />
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
