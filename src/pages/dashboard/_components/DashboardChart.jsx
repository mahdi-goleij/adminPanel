import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

export const DashboardChart = ({chartData}) => {

  const {i18n} = useTranslation();
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );  


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = i18n.language === "fa" ? chartData?.fa_labels : chartData?.en_labels;

  const data = {
    labels,
    datasets: [
      {
        label: i18n.language === "fa" ? "دیتابیس 1" : "Dataset 1",
        data: chartData?.value,
        borderColor: "#bff474",
      },
    ],
  };

  return (
    <>
      <div className="dash-right-bottom-chart">
        <Line options={options} data={data} />
      </div>
    </>
  );
};
