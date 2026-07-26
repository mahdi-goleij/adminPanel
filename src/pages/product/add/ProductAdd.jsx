import "./ProductAdd.css";
import { useLayoutStore } from "../../../store/LayoutStore";
import { ProductAddForm } from "./_components/ProductAddForm";
import { ProductAddRules } from "./_components/ProductAddRules";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const ProductAdd = () => {
  const { setTitlePage } = useLayoutStore();
  const {t} = useTranslation();

  useEffect(() => {
    setTitlePage(t('product.product_add_page.product_add_page_title'));
  }, [t]);

  return (
    <>
      <div className="product-add">
        <ProductAddForm />

        <ProductAddRules />
      </div>
    </>
  );
};
