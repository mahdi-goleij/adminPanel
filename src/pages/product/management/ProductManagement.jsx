import { useContext, useEffect } from "react";
import { useLayoutStore } from "../../../store/LayoutStore";
import DataTable from "react-data-table-component";
import "./ProductManagement.css";
import { SvgPlus } from "../../../icons/SvgPlus";
import { ProductFilter } from "./_component/ProductFilter";
import { SvgEdit } from "../../../icons/SvgEdit";
import { SVGDetail } from "../../../icons/SvgDetail";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../../hooks/product-hooks";
import { Link, useSearchParams } from "react-router-dom";
import { useProductStore } from "../../../store/ProductStore";
import { SvgTrash } from "../../../icons/SvgTrash";
import { ProductDelete } from "./_component/ProductDelete";
import { ProductDetails } from "./_component/ProductDetails";

export const ProductManagement = () => {
  const { setTitlePage } = useLayoutStore();
  const { setVisibleProductModal, setSelectedProduct, setVisibleDel } =
    useProductStore();
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  let query = searchParams.toString();
  const { data } = useProduct(query);

  const handleDetail = (product) => {
    setVisibleProductModal(true);
    setSelectedProduct(product);
  };

  const handleDelete = (product) => {
    setVisibleDel(true);
    setSelectedProduct(product);
  };

  const columns = [
    {
      name: t("product.table.product_name"),
      selector: (row) => (
        <>
          <div className="product-list-name">
            <img src={row.images[0]} alt="" />
            <span>{i18n.language === "fa" ? row.title : row.englishTitle}</span>
          </div>
        </>
      ),
      width: "200px",

      style: {
        justifyContent: "center",
        display: "flex",
      },
    },
    {
      name: t("product.table.product_price"),
      selector: (row) => row.price,
      style: {
        justifyContent: "center",
        display: "flex",
      },
      sortable: true,
    },
    {
      name: "موجودی",
      selector: (row) => row.quantity,
      style: {
        justifyContent: "center",
        display: "flex",
      },
      sortable: true,
    },
    {
      name: "دسته بندی",
      selector: (row) => row.category,
      style: {
        justifyContent: "center",
        display: "flex",
      },
    },
    {
      name: t("product.table.status"),
      selector: (row) => (
        <>
          {row.status === "active" && (
            <span className="product-list-tag-enable">
              {t("product.table.enable")}
            </span>
          )}
          {row.status === "deactive" && (
            <span className="product-list-tag-disable">
              {t("product.table.disable")}
            </span>
          )}
        </>
      ),
      style: {
        justifyContent: "center",
        display: "flex",
      },
    },
    {
      name: t("product.table.create_date"),
      selector: (row) =>
        i18n.language === "fa"
          ? new Date(row.createdAt).toLocaleDateString("fa")
          : new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
      style: {
        justifyContent: "center",
        display: "flex",
      },
    },
    {
      name: t("product.table.edit_product"),
      selector: (row) => (
        <div className="product-list-cont">
          <Link to={`/p/product/edit/${row._id}`}>
            <button className="product-list-btn">
              <SvgEdit />
            </button>
          </Link>
          <button
            onClick={() => {
              handleDetail(row);
            }}
            className="product-list-btn"
          >
            <SVGDetail />
          </button>
          <button
            onClick={() => {
              handleDelete(row);
            }}
            className="product-list-btn"
          >
            <SvgTrash />
          </button>
        </div>
      ),
      width: "200px",
      style: {
        justifyContent: "center",
        display: "flex",
      },
    },
  ];

  useEffect(() => {
    setTitlePage(t("product.product_manage.product_management"));
  }, [t]);
  return (
    <>
      <div className="product-head">
        <Link to={"/p/product/add"}>
          <button>
            <SvgPlus />
            <span>{t("product.product_btn_add")}</span>
          </button>
        </Link>
      </div>

      <ProductFilter />

      <DataTable
        className="product-list"
        columns={columns}
        data={data?.data}
        pagination
        highlightOnHover
        customStyles={customStyles}
      />

      <ProductDetails />
      <ProductDelete />
    </>
  );
};

const customStyles = {
  // ۱. تنظیمات سرستون‌ها
  headCells: {
    style: {
      display: "flex",
      justifyContent: "center", // وسط‌چین کردن افقی سرستون‌ها
      alignItems: "center",     // وسط‌چین کردن عمودی سرستون‌ها
      textAlign: "center",
      fontWeight: "bold",
    },
  },

  // ۲. تنظیمات سلول‌های داده (مقادیر)
  cells: {
    style: {
      display: "flex",
      justifyContent: "center", // وسط‌چین کردن افقی مقادیر
      alignItems: "center",     // وسط‌چین کردن عمودی مقادیر
      textAlign: "center",
    },
  },

  // ۳. تنظیمات ردیف هدر
  headRow: {
    style: {
      // اگر استایلی خواستی اینجا بذار (مثلا border)
    },
  },

  // ۴. تنظیمات ردیف‌های جدول
  rows: {
    style: {
      // استایل‌های ردیف‌ها
    },
  },

  // ۵. تنظیمات صفحه‌بندی (کاملاً جدا و مستقل)
  pagination: {
    style: {
      backgroundColor: "var(--color-2)",
      color: "var(--color-6)",
      borderTop: "none",
    },
  },
};
