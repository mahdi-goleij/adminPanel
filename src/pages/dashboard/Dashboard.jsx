import { useContext, useEffect } from "react"
import { useLayoutStore } from "../../store/LayoutStore";
import './Dashboard.css'
import { DashboardSummary } from "./_components/DashboardSummary";
import { DashboardChart } from "./_components/DashboardChart";
import { DashboardOrder } from "./_components/DashboardOrder";
import { DashboardBlog } from "./_components/DashboardBlog";
import { useTranslation } from "react-i18next";
import { baseApi } from "../../api/baseApi";
import { useQuery } from "@tanstack/react-query"
import { useDashboard } from "../../hooks/dashboard-hooks";

export const Dashboard = () => {
  const { setTitlePage } = useLayoutStore();
  const {t} = useTranslation()

  useEffect(() => {
    setTitlePage(t('layout.dashboard_menu'));
  }, [t]);

  const {data:dataDashboard} = useDashboard();


    return(
        <>
        <div className="dashboard">
          <div className="dash-right">
            <DashboardSummary summaryData={dataDashboard?.data?.summary} />
            <div className="dash-right-bottom">
              <DashboardChart chartData={dataDashboard?.data?.chart} />
              <DashboardOrder orderData={dataDashboard?.data?.users} />
            </div>
          </div>

          <DashboardBlog blogData={dataDashboard?.data?.blog} />
        </div>
        </>
    )
}