import "./ProductAdd.css";
import { useLayoutStore } from "../../../store/LayoutStore";
import { ProductAddForm } from "./_components/ProductAddForm";
import { ProductAddRules } from "./_components/ProductAddRules";
import { useEffect } from "react";

export const ProductAdd = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("افزودن محصولات");
  }, []);

  return (
    <>
      <div className="product-add">
        <ProductAddForm />

        <ProductAddRules />
      </div>
    </>
  );
};
