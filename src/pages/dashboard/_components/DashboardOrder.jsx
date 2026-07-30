import { useTranslation } from "react-i18next";

export const DashboardOrder = ({orderData}) => {
  const { i18n } = useTranslation()
  return (
    <>
      <div className="dash-right-bottom-order">
        {orderData?.map((item,index) => 
        <div key={index} className="dash-right-bottom-order-item">
            <div className="dash-right-bottom-order-item-right">
                <img src={item.image} alt={item.name} />
                <div>
                    <p>{i18n.language === "en" ? item.en_name : item.fa_name }</p>
                    <span>{item.date}</span>
                </div>
            </div>
            <div className="dash-right-bottom-order-item-left">{item.value}</div>
        </div>
        )}
      </div>
    </>
  );
};