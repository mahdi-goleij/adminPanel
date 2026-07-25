import { useContext, useEffect } from "react";
import { useLayoutStore } from "../../../store/LayoutStore";
import DataTable from "react-data-table-component";
import "./ProductManagement.css";
import { SvgPlus } from "../../../icons/SvgPlus";
import { ProductFilter } from "./_component/ProductFilter";
import { SvgEdit } from "../../../icons/SvgEdit";
import { useTranslation } from "react-i18next";

export const ProductManagement = () => {
  const { setTitlePage } = useLayoutStore();

  const {t} = useTranslation();

  useEffect(() => {
    setTitlePage(t('product.product_page_title'));
  }, []);
  return (
    <>
      <div className="product-head">
        <button>
          <SvgPlus />
          <span>{t('product.product_btn_add')}</span>
        </button>
      </div>

      <ProductFilter />

      <DataTable
        className="product-list"
        columns={columns}
        data={products}
        pagination
        highlightOnHover
        customStyles={customStyles}
      />
    </>
  );
};

const columns = [
  {
    name: "نام محصول",
    selector: (row) => (
      <>
        <div className="product-list-name">
          <img src={row.img} alt="" />
          <span>{row.name}</span>
        </div>
      </>
    ),
  },
  { name: "قیمت محصول", selector: (row) => row.price, sortable: true },
  {
    name: "وضعیت",
    selector: (row) => (
      <>
        {row.status === "enable" && (
          <span className="product-list-tag-enable">فعال</span>
        )}
        {row.status === "disable" && (
          <span className="product-list-tag-disable">غیرفعال</span>
        )}
      </>
    ),
  },
  { name: "تاریخ ایجاد", selector: (row) => row.create, sortable: true },
  {
    name: "ویرایش محصول",
    selector: () => (
      <>
        
        <button className="product-list-btn" >
          <SvgEdit />
        </button>
      </>
    ),
  },
];

const products = [
  {
    name: "کاور ژله‌ای آیفون 13",
    price: 149000,
    create: "1404/07/20",
    img: "https://dkstatics-public.digikala.com/digikala-products/70d7b1907075208760add32fcada217fea0c7677_1759151136.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "کابل شارژ Type-C سریع ۶۰ وات",
    price: 89000,
    create: "1404/07/18",
    img: "https://dkstatics-public.digikala.com/digikala-products/5665395f232b61215c4bd008c79b4ccb795dbfa0_1723410160.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "disable",
  },
  {
    name: "پاوربانک ۱۰۰۰۰ میلی‌آمپر",
    price: 279000,
    create: "1404/07/16",
    img: "https://dkstatics-public.digikala.com/digikala-products/8be2363fcc597db638b1a1046c5eda9aed18ea2d_1760518960.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "گلس محافظ صفحه آیفون",
    price: 29000,
    create: "1404/07/14",
    img: "https://dkstatics-public.digikala.com/digikala-products/8fedbcf1864245e7452a67f27206456a7466f1cb_1747124445.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "هندزفری بلوتوث مدل X200",
    price: 199000,
    create: "1404/07/12",
    img: "https://dkstatics-public.digikala.com/digikala-products/428eb7cbde1fbf99b06bc045dca7f8077d8a1e19_1700297929.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "disable",
  },
  {
    name: "شارژر دیواری ۳۰ وات",
    price: 129000,
    create: "1404/07/10",
    img: "https://dkstatics-public.digikala.com/digikala-products/320a892380236178922a1b10f729ac1bdc840e6e_1736841142.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "هولدر دریچه کولر ماشین",
    price: 39000,
    create: "1404/07/08",
    img: "https://dkstatics-public.digikala.com/digikala-products/813d3f3cacc2f166f6fc643beeef7900de590e09_1733478117.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "disable",
  },
  {
    name: "کابل AUX فنری ۱٫۵ متر",
    price: 25000,
    create: "1404/07/06",
    img: "https://dkstatics-public.digikala.com/digikala-products/5bfcf150fb895608ff599635402b51a44c48d501_1759852105.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "ریگ لایت مخصوص موبایل",
    price: 59000,
    create: "1404/07/04",
    img: "https://dkstatics-public.digikala.com/digikala-products/9077a3b76145b22d0f1c384809fd938ad60a0057_1605783388.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "کیف هندزفری ضد آب",
    price: 39000,
    create: "1404/07/02",
    img: "https://dkstatics-public.digikala.com/digikala-products/e218265f1dc82b5cd5a1d71365349de9a505958c_1735542023.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "disable",
  },
  {
    name: "تبدیل USB-C به USB-A",
    price: 22000,
    create: "1404/06/30",
    img: "https://dkstatics-public.digikala.com/digikala-products/bc79624a4e11931eefcd6e0e759ce8fc1db5ab17_1754248403.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "کابل فلاش لایت موبایل",
    price: 45000,
    create: "1404/06/28",
    img: "https://dkstatics-public.digikala.com/digikala-products/b8057c4175126403918da268dd2980c4270e70c2_1722441224.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "پایه نگهدارنده رومیزی",
    price: 67000,
    create: "1404/06/26",
    img: "https://dkstatics-public.digikala.com/digikala-products/a314b958c259398e4f8979826effad7dcc6c60a0_1749315790.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "disable",
  },
  {
    name: "کارت حافظه microSD ۶۴ گیگ",
    price: 85000,
    create: "1404/06/24",
    img: "https://dkstatics-public.digikala.com/digikala-products/f1579ab5dc3f4560fa610c80b644adef148d9cc9_1755788362.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "enable",
  },
  {
    name: "قلم لمسی تبلت/موبایل",
    price: 47000,
    create: "1404/06/22",
    img: "https://dkstatics-public.digikala.com/digikala-products/0cf5a445b38190993a25da4377783d5b3ac8a814_1754241649.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    status: "disable",
  },
];

const customStyles = {
  pagination: {
    style: {
      backgroundColor: "var(--color-2)",
      color: "var(--color-6)",
      borderTop: "none",
    },
    pageButtonsStyle: {
      // '&:hover':
    },
  },
  headRow: {
    style: {},
  },
  rows: {
    style: {},
  },
};
