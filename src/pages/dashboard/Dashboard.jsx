import { useContext, useEffect } from "react"
import { useLayoutStore } from "../../store/LayoutStore";
import './Dashboard.css'
import { DashboardSummary } from "./_components/DashboardSummary";
import { DashboardChart } from "./_components/DashboardChart";
import { DashboardOrder } from "./_components/DashboardOrder";
import { DashboardBlog } from "./_components/DashboardBlog";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const { setTitlePage } = useLayoutStore();
  const {t} = useTranslation()

  useEffect(() => {
    setTitlePage(t('layout.dashboard_menu'));
  }, [t]);

    return(
        <>
        <div className="dashboard">
          <div className="dash-right">
            <DashboardSummary />
            <div className="dash-right-bottom">
              <DashboardChart />
              <DashboardOrder />
            </div>
          </div>

          <DashboardBlog />
        </div>
        </>
    )
}