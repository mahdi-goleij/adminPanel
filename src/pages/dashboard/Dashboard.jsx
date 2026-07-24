import { useContext, useEffect } from "react"
import { useLayoutStore } from "../../store/LayoutStore";
import './Dashboard.css'
import { DashboardSummary } from "./_components/DashboardSummary";
import { DashboardChart } from "./_components/DashboardChart";
import { DashboardOrder } from "./_components/DashboardOrder";
import { DashboardBlog } from "./_components/DashboardBlog";

export const Dashboard = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("داشبورد");
  }, []);

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