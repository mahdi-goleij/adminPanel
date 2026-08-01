import { useTranslation } from "react-i18next";
import { CModal } from "../../../../components/CModal/CModal";
import { useProductStore } from "../../../../store/ProductStore";
import {
  useDeleteProduct,
  useSingleProduct,
} from "../../../../hooks/product-hooks";
import { useEffect } from "react";
import { BtnLoader } from "../../../../components/BtnLoader/BtnLoader";

export const ProductDelete = () => {
  const { t, i18n } = useTranslation();

  const { selectedProduct, visibleDel, setVisibleDel } = useProductStore();
  const handleClose = () => {
    setVisibleDel(false);
    selectedProduct(null);
  };
  const { mutate, isPending } = useDeleteProduct(selectedProduct?._id);

  const productName =
    i18n.language === "fa"
      ? selectedProduct?.title
      : selectedProduct?.englishTitle;

  return (
    <>
      <CModal visible={visibleDel} setVisible={setVisibleDel}>
        <div className="product-del">
          <p>
            {t("product.delete_modal.confirm_message", { name: productName })}
          </p>
          <div className="product-del-btn">
            {isPending ? (
              <button>
                <BtnLoader />
              </button>
            ) : (
              <button onClick={() => mutate()}>
                {" "}
                {t("product.delete_modal.btn_delete")}
              </button>
            )}
            <button onClick={handleClose}>
              {" "}
              {t("product.delete_modal.btn_cancel")}
            </button>
          </div>
        </div>
      </CModal>
    </>
  );
};
