import "./ProductEdit.css";
import { useEffect } from "react";
import { ProductEditForm } from "./_components/ProductEditForm";
import { useLayoutStore } from "../../../store/LayoutStore";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../../hooks/product-hooks";

export const ProductEdit = () => {
  const { setTitlePage } = useLayoutStore();
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useSingleProduct(id);

  useEffect(() => {
    setTitlePage(t("product.product_add_page.product_edit_page_title"));
  }, [t]);

  return (
    <>
      <div className="product-add">
        <ProductEditForm productData={data?.data} />
      </div>
    </>
  );
};
