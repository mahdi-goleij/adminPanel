import { useTranslation } from 'react-i18next';
import {SvgDashboard} from '../../../icons/SvgDashboard'




export const DashboardSummary = ({summaryData}) => {


    const { t , i18n } = useTranslation();


    return(
        <>
            <div className="dash-right-summary">
                {summaryData?.map((item,index) => (
                <div key={index} className="dash-right-summary-item">
                    <div className="dash-right-summary-item-icon">
                        <SvgDashboard />
                    </div>
                    <div className="dash-right-summary-item-description">
                        <p>{i18n.language === "en" ? item.en_title : item.fa_title }</p>
                        <h4>{item.value}</h4>
                        <span>25%</span>
                    </div>
                </div>
            ))}
            </div>

        </>
    )
}