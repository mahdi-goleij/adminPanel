import { useTranslation } from 'react-i18next';
import {SvgDashboard} from '../../../icons/SvgDashboard'




export const DashboardSummary = () => {


    const { t } = useTranslation();


    return(
        <>
            <div className="dash-right-summary">
                {[0,0,0,0].map((item,index) => (
                <div key={index} className="dash-right-summary-item">
                    <div className="dash-right-summary-item-icon">
                        <SvgDashboard />
                    </div>
                    <div className="dash-right-summary-item-description">
                        <p>{t('sale')}</p>
                        <h4>120,000 تومان</h4>
                        <span>25%</span>
                    </div>
                </div>
            ))}
            </div>

        </>
    )
}