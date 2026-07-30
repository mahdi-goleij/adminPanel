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
import { ProductDetails } from "./_component/productDetails";

export const ProductManagement = () => {
  const { setTitlePage ,visibleProductModal , setVisibleProductModal } = useLayoutStore();
  const { t, i18n } = useTranslation();

  const [searchParams] = useSearchParams();
  let query = searchParams.toString();
  const { data } = useProduct(query);

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
    },
    {
      name: t("product.table.product_price"),
      selector: (row) => row.price,
      sortable: true,
    },
    { name: "موجودی", selector: (row) => row.quantity, sortable: true },
    { name: "دسته بندی", selector: (row) => row.category },
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
    },
    {
      name: t("product.table.create_date"),
      selector: (row) =>
        i18n.language === "fa"
          ? new Date(row.createdAt).toLocaleDateString("fa")
          : new Date(row.createdAt).toLocaleDateString(),
      sortable: true,
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
          <button onClick={()=> {setVisibleProductModal(true)}} className="product-list-btn">
            <SVGDetail />
          </button>
        </div>
      ),
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


      <ProductDetails visibleProductModal={visibleProductModal} setVisibleProductModal={setVisibleProductModal} />


    </>
  );
};

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
