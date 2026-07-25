import { SvgDashboard } from "../icons/SvgDashboard";
import { SvgPlugin } from "../icons/SvgPlugin";
import { SvgWorld } from "../icons/SvgWorld";
import { SvgCog } from "../icons/SvgCog";
import { SvgMonitor } from "../icons/SvgMonitor";

export const menu = [
    {
      title: "layout.dashboard_menu",
      icon: <SvgDashboard className="sideBar-cont-item-svg" />,
      path: '/p/dashboard'
    },
    {
      title: "layout.dashboard_product",
      icon: <SvgMonitor className="sideBar-cont-item-svg" />,
      submenu: [
        {
          title: "product.product_manage.product_management",
          path: "/p/product/management"
        },
        {
          title: "product.product_add.product_add",
          path: "/p/product/add"
        },
      ],
    },
    {
      title: "layout.dashboard_tools",
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
      title: "layout.dashboard_map",
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
      title: "layout.dashboard_settings",
      icon: <SvgCog className="sideBar-cont-item-svg" />,
      path:'/p/settings'
      
    },
  ];