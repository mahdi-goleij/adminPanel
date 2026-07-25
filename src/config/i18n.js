import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        main_header: {
          search_placeholder: "Search...",
        },
        profilesideBar: {
          edit_btn: "Edit Profile"
        },
        sidebar: {
          new_project_btn: "New Project"
        },
        theme: {
          light_theme: "light",
          dark_theme: "dark",
          label: "Powered by"
        },
        dropdown: {
          profile: "Profile",
          logout: "LogOut",
        },
        dashboard: {
          sale: "The amount of sales",
          currency_unit: "Rial",

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
          product_filter: {
            time_range:"Select Time Range",
            search_product:"Product Search",
            status: {
              all: "َAll",
              enable: "Enable",
              disable: "Disable",
            }
          },
        },
        tools:{
          page:{
            page_1:"Page One",
            page_2:"Page Two",
            page_3:"Page Three",
          },
        },
        map:{
          page:{
            page_1:"Page One",
            page_2:"Page Two",
            page_3:"Page Three",
          },
        },
        settings: {
          page_title:"setting",
        },
      },
    },
    fa: {
      translation: {
        main_header: {
          search_placeholder: "جست و جو کنید...",
        },
        sidebar: {
          new_project_btn: "پروژه جدید"
        },
        profilesideBar: {
          edit_btn: "ویرایش پروفایل"
        },
        theme: {
          light_theme: "روشن",
          dark_theme: "تیره",
          label: "قدرت گرفته توسط"
        },
        dropdown: {
          profile: "پروفایل",
          logout: "خروج",
        },
        dashboard: {
          sale: "میزان فروش",
          currency_unit: "ریال",
        },
        layout: {
          dashboard_menu: "داشبورد",
          dashboard_product: "محصولات",
          dashboard_tools: "ابزار ها",
          dashboard_map: "نقشه",
          dashboard_settings: "تنظیمات",
        },
        product: {
          product_btn_add: "افزودن محصول جدید",
          product_name: "نام محصول",
          product_manage: {
            product_management:"مدیریت محصولات",
            // product_page_title: "مدیریت محصولات",
          },
          product_add: {
            product_add:"ثبت محصولات"
          },
          product_filter: {
            time_range:"انتخاب بازه زمانی",
            search_product:"جست‌و‌جوی محصول",
            status: {
              all: "همه",
              enable: "فعال",
              disable: "غیرفعال",
            }
          },
        },
        tools:{
          page:{
            page_1:"صفحه اول",
            page_2:"صفحه دوم",
            page_3:"صفحه سوم",
          },
        },
        map:{
          page:{
            page_1:"صفحه اول",
            page_2:"صفحه دوم",
            page_3:"صفحه سوم",
          },
        },
        settings: {
          page_title:"تنظیمات",
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
