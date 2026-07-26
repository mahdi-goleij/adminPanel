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
          edit_btn: "Edit Profile",
        },
        sidebar: {
          new_project_btn: "New Project",
        },
        theme: {
          light_theme: "light",
          dark_theme: "dark",
          label: "Powered by",
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
            product_management: "Product Management",
          },
          product_add_page: {
            product_add_page_title: "Add Products",
            product_name_title: "Product title",
            product_name_title_placeholder: "Enter the product name...",
            product_price_title: "Product price",
            product_price_title_placeholder: "Enter the product price...",
            product_quantity_title: "Product Inventory",
            product_quantity_title_placeholder:
              "Enter the product Inventory...",
            product_feature_title: "Product Features",
            product_add_feature_title: "Add new feature",
            product_delete_feature: "Delete",
            product_img_title: "Product Image",
            product_add_btn: "Add",
            errors: {
              title_required: "Product name is required",
              title_min: "Product name must be at least 2 characters",
              price_required: "Price is required",
              price_positive: "Price must be greater than zero",
              price_type: "Price must be a number",
              quantity_required: "Quantity is required",
              quantity_positive: "Quantity must be greater than zero",
              quantity_type: "Quantity must be a number",
              feature_name_required: "Feature name is required",
              feature_value_required: "Feature value is required",
              feature_min: "At least two features are required"
            }
          },
          table: {
            product_name: "Product Name",
            product_price: "Product Price",
            status: "Status",
            enable: "Active",
            disable: "Inactive",
            create_date: "Created Date",
            edit_product: "Edit Product",
          },
          product_rules: {
            title: "Product Submission Guidelines",
            description:
              "Providing accurate and complete product information helps improve store management and enhances the customer experience. Please enter a clear product title, provide the correct price and inventory, and add at least two product features. We also recommend uploading a high-quality image that represents the product. Once you have verified all the information, you can safely submit the product.",
          },
          product_add: {
            product_add: "Add Products",
          },
          product_filter: {
            time_range: "Select Time Range",
            search_product: "Product Search",
            status: {
              all: "All",
              enable: "Enable",
              disable: "Disable",
            },
          },
        },
        tools: {
          page: {
            page_1: "Page One",
            page_2: "Page Two",
            page_3: "Page Three",
          },
        },
        map: {
          page: {
            page_1: "Page One",
            page_2: "Page Two",
            page_3: "Page Three",
          },
        },
        settings: {
          page_title: "setting",
        },
      },
    },
    fa: {
      translation: {
        main_header: {
          search_placeholder: "جست و جو کنید...",
        },
        sidebar: {
          new_project_btn: "پروژه جدید",
        },
        profilesideBar: {
          edit_btn: "ویرایش پروفایل",
        },
        theme: {
          light_theme: "روشن",
          dark_theme: "تیره",
          label: "قدرت گرفته توسط",
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
            product_management: "مدیریت محصولات",
          },
          product_add_page: {
            product_add_page_title: "افزودن محصولات",
            product_name_title: "افزودن محصول",
            product_name_title_placeholder: "نام محصول را وارد کنید...",
            product_price_title: "قیمت محصول",
            product_price_title_placeholder: "قیمت محصول را وارد کنید...",
            product_quantity_title: "موجودی محصول",
            product_quantity_title_placeholder: "موجودی محصول را وارد کنید...",
            product_feature_title: "ویژگی های محصول",
            product_add_feature_title: "افزودن ویژگی جدید",
            product_delete_feature: "حذف",
            product_img_title: "تصویر محصول",
            product_add_btn: "افزودن",
            errors: {
              title_required: "نام محصول الزامی است",
              title_min: "نام محصول باید حداقل ۲ کاراکتر باشد",
              price_required: "قیمت محصول الزامی است",
              price_positive: "قیمت باید بیشتر از صفر باشد",
              price_type: "قیمت باید عدد باشد",
              quantity_required: "موجودی محصول الزامی است",
              quantity_positive: "موجودی باید بیشتر از صفر باشد",
              quantity_type: "موجودی باید عدد باشد",
              feature_name_required: "نام ویژگی الزامی است",
              feature_value_required: "مقدار ویژگی الزامی است",
              feature_min: "حداقل دو ویژگی برای محصول وارد کنید"
            }
          },
          table: {
            product_name: "نام محصول",
            product_price: "قیمت محصول",
            status: "وضعیت",
            enable: "فعال",
            disable: "غیرفعال",
            create_date: "تاریخ ایجاد",
            edit_product: "ویرایش محصول",
          },
          product_rules: {
            title: "قوانین ثبت محصول",
            description:
              "ثبت اطلاعات صحیح و کامل محصول باعث مدیریت بهتر فروشگاه و تجربه بهتر کاربران می‌شود. لطفاً نام محصول را به‌صورت واضح وارد کنید، قیمت و موجودی را به‌درستی ثبت نمایید و حداقل دو ویژگی برای محصول اضافه کنید. همچنین توصیه می‌شود از یک تصویر باکیفیت و مرتبط با محصول استفاده کنید تا نمایش مناسب‌تری در فروشگاه داشته باشد. پس از اطمینان از صحت اطلاعات، محصول را ثبت کنید.",
          },
          product_add: {
            product_add: "ثبت محصولات",
          },
          product_filter: {
            time_range: "انتخاب بازه زمانی",
            search_product: "جست‌و‌جوی محصول",
            status: {
              all: "همه",
              enable: "فعال",
              disable: "غیرفعال",
            },
          },
        },
        tools: {
          page: {
            page_1: "صفحه اول",
            page_2: "صفحه دوم",
            page_3: "صفحه سوم",
          },
        },
        map: {
          page: {
            page_1: "صفحه اول",
            page_2: "صفحه دوم",
            page_3: "صفحه سوم",
          },
        },
        settings: {
          page_title: "تنظیمات",
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
