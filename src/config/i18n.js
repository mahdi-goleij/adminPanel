import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        main_header: {
          search_placeholder: "Search...",
        },
        dropdown: {
          light_theme: "light",
          dark_theme: "dark",
          profile: "Profile",
          dark_theme: "LogOut",
        },
        dashboard: {
          sale: "The amount of sales",
        },
        layout: {
          dashboard_menu: "Dashboard",
          dashboard_product: "Products",
          dashboard_tools: "tools",
          dashboard_map: "map",
          dashboard_settings: "settings",
        },
        product: {
          product_page_title: "Product Management",
          product_btn_add: "Add New Product",
          product_name: "Product Name",
          product_manage: {
            product_management:"Product Management"
          },
          product_add: {
            product_add:"Add Products"
          },
        },
      },
    },
    fa: {
      translation: {
        main_header: {
          search_placeholder: "جست و جو کنید...",
        },
        dropdown: {
          light_theme: "روشن",
          dark_theme: "تیره",
          profile: "پروفایل",
          dark_theme: "خروج",
        },
        dashboard: {
          sale: "میزان فروش",
        },
        layout: {
          dashboard_menu: "داشبورد",
          dashboard_product: "محصولات",
          dashboard_tools: "ابزار ها",
          dashboard_map: "نقشه",
          dashboard_settings: "تنظیمات",
        },
        product: {
          product_management:"مدیریت محصولات",
          product_btn_add: "افزودن محصول جدید",
          product_name: "نام محصول",
          product_manage: {
            product_page_title: "مدیریت محصولات",
          },
          product_add: {
            product_add:"ثبت محصولات"
          },
        },
      },
    },
  },
  lng: localStorage.getItem("lang") || "fa",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
