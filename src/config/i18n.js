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
          guestUser: "Guest User",
          edit_btn: "Edit Profile",
        },
        sidebar: {
          new_project_btn: "New Project",
        },
        auth: {
          login: "Login",
          signin: "Sign in",
          login_email_place: "Enter your email...",
          login_pass_place: "Enter your password...",
          login_btn: "Login",
          register_name_place: "Enter your FullName...",
          register_email_place: "Enter your email...",
          register_pass_place: "Enter your password...",
          register_btn: "Register",
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
            product_modal_close_btn: "Close",
          },
          delete_modal: {
            confirm_message:
              "Are you sure you want to delete the product {{name}}?",
            btn_delete: "Delete Product",
            btn_cancel: "Cancel",
          },
          product_add_page: {
            product_add_page_title: "Add Products",
            product_edit_page_title: "Edit Products",

            product_name_title: "Product persian title",
            product_name_title_placeholder: "Enter the product persian name...",
            product_name_en_title: "Product english title",
            product_name_en_title_placeholder:
              "Enter the product english name...",
            product_status_title: "Product Status",
            product_status_title_placeholder: "Select the product status...",
            product_category_title: "Product Category",
            product_category_title_placeholder:
              "Select the product category...",
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
              title_status_required: "Product status is required",
              title_category_required: "Product category is required",
              title_min: "Product name must be at least 2 characters",
              price_required: "Price is required",
              price_positive: "Price must be greater than zero",
              price_type: "Price must be a number",
              quantity_required: "Quantity is required",
              quantity_positive: "Quantity must be greater than zero",
              quantity_type: "Quantity must be a number",
              feature_name_required: "Feature name is required",
              feature_value_required: "Feature value is required",
              feature_min: "At least two features are required",
            },
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
            title: "Product Registration Guidelines",
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
              enable: "Active",
              disable: "Deactive",
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
        auth: {
          login: "ورود",
          signin: "ثبت نام",
          login_email_place: "ایمیل خود را وارد کنید...",
          login_pass_place: "رمز خود را وارد کنید...",
          login_btn: "ورود",
          register_name_place: "نام کامل خود را وارد کنید...",
          register_email_place: "ایمیل خود را وارد کنید...",
          register_pass_place: "رمز خود را وارد کنید...",
          register_btn: "ثبت نام",
        },
        profilesideBar: {
          guestUser: "کاربر مهمان",
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
            product_modal_close_btn: "بستن",
          },
          delete_modal: {
            confirm_message: "آیا از حذف محصول {{name}} مطمئن هستید؟", // 👈 این یک متن معتبر است
            btn_delete: "حذف محصول",
            btn_cancel: "انصراف",
          },

          product_add_page: {
            product_add_page_title: "افزودن محصولات",
            product_edit_page_title: "ویرایش محصولات",
            product_name_title: "نام فارسی محصول",
            product_name_title_placeholder: "نام فارسی محصول را وارد کنید...",
            product_name_en_title: "نام انگلیسی محصول",
            product_name_en_title_placeholder:
              "نام انگلیسی محصول را وارد کنید...",
            product_status_title: "وضعیت محصول",
            product_status_title_placeholder: "وضعیت محصول را انتخاب کنید...",
            product_category_title: "دسته بندی محصول",
            product_category_title_placeholder:
              "دسته بندی محصول را انتخاب کنید...",
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
              title_status_required: "وضعیت محصول الزامی است",
              title_category_required: "دسته بندی محصول الزامی است",
              title_min: "نام محصول باید حداقل ۲ کاراکتر باشد",
              price_required: "قیمت محصول الزامی است",
              price_positive: "قیمت باید بیشتر از صفر باشد",
              price_type: "قیمت باید عدد باشد",
              quantity_required: "موجودی محصول الزامی است",
              quantity_positive: "موجودی باید بیشتر از صفر باشد",
              quantity_type: "موجودی باید عدد باشد",
              feature_name_required: "نام ویژگی الزامی است",
              feature_value_required: "مقدار ویژگی الزامی است",
              feature_min: "حداقل دو ویژگی برای محصول وارد کنید",
            },
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
              "ثبت اطلاعات دقیق و کامل محصول، به مدیریت بهتر فروشگاه و بهبود تجربه خرید کاربران کمک می‌کند. لطفاً هنگام ثبت محصول موارد زیر را رعایت کنید:نام محصول: نام محصول را به‌صورت واضح و حداقل در ۲ کاراکتر وارد کنید. قیمت و موجودی: قیمت دقیق و مقدار موجودی انبار را با اعداد معتبر و مثبت ثبت نمایید. ویژگی‌های محصول: افزودن حداقل ۲ ویژگی (نام و مقدار مشخصه) برای معرفی بهتر کالا الزامی است. تصاویر محصول: می‌توانید تا حداکثر ۳ تصویر باکیفیت و مرتبط با محصول بارگذاری کنید. پس از بررسی نهایی و اطمینان از صحت اطلاعات، می‌توانید محصول خود را ثبت کنید.",
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
