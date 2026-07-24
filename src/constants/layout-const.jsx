import { SvgDashboard } from "../icons/SvgDashboard";
import { SvgPlugin } from "../icons/SvgPlugin";
import { SvgWorld } from "../icons/SvgWorld";
import { SvgCog } from "../icons/SvgCog";
import { SvgMonitor } from "../icons/SvgMonitor";

export const menu = [
    {
      title: "داشبورد",
      icon: <SvgDashboard className="sideBar-cont-item-svg" />,
      path: '/p/dashboard'
    },
    {
      title: "محصولات",
      icon: <SvgMonitor className="sideBar-cont-item-svg" />,
      submenu: [
        {
          title: "مدیریت محصولات",
          path: "/p/product/management"
        },
        {
          title: "افزودن محصولات",
          path: "/p/product/add"
        },
      ],
    },
    {
      title: "ابزارها",
      icon: <SvgPlugin className="sideBar-cont-item-svg" />,
      submenu: [
        {
          title: "صفحه اول",
        },
        {
          title: "صفحه دوم",
        },
        {
          title: "صفحه سوم",
        },
      ],
    },
    {
      title: "نقشه",
      icon: <SvgWorld className="sideBar-cont-item-svg" />,
      submenu: [
        {
          title: "صفحه اول",
        },
        {
          title: "صفحه دوم",
        },
        {
          title: "صفحه سوم",
        },
      ],
    },
    {
      title: "تنظیمات",
      icon: <SvgCog className="sideBar-cont-item-svg" />,
      path:'/p/settings'
      
    },
  ];