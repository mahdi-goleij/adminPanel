import { useTranslation } from "react-i18next";
import { CModal } from "../../../../components/CModal/CModal";

export const ProductDetails = ({
  visibleProductModal,
  setVisibleProductModal,
}) => {
  // تعریف t حتماً باید داخل کامپوننت و قبل از return باشد
  const { t } = useTranslation();

  return (
    <>
      <CModal visible={visibleProductModal} setVisible={setVisibleProductModal}>
        <div className="product-details">
          <div className="product-details-row">
            <span>{t("product.product_add_page.product_name_title")}:</span>
            <p>کابل شارژ</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_name_en_title")}:</span>
            <p>کابل شارژ</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_status_title")}:</span>
            <p>کابل شارژ</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_category_title")}:</span>
            <p>کابل شارژ</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_price_title")}:</span>
            <p>کابل شارژ</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_quantity_title")}:</span>
            <p>کابل شارژ</p>
          </div>

          <button
            onClick={() => {
              setVisibleProductModal(false);
            }}
          >
            بستن
          </button>
        </div>
      </CModal>
    </>
  );
};
