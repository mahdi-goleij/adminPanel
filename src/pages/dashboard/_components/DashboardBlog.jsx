import { useTranslation } from "react-i18next";
import ImgBlog from "../../../assets/media/blog.png";

export const DashboardBlog = ({ blogData }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <div className="dash-left">
        <div className="dash-left-item">
          <img src={ImgBlog} alt="blog" />
          <div className="dash-left-item-des">
            {blogData?.map((item, index) => (
              <>
                <h4>
                  {i18n.language === "en" ? item.en_title : item.fa_title}
                </h4>
                <p>
                  {i18n.language === "en"
                    ? item.en_description
                    : item.fa_description}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
