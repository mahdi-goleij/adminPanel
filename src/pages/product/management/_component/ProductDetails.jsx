import { useTranslation } from "react-i18next";
import { CModal } from "../../../../components/CModal/CModal";
import { useProductStore } from "../../../../store/ProductStore";
import { useSingleProduct } from "../../../../hooks/product-hooks";
import { useEffect } from "react";

export const ProductDetails = () => {
  // تعریف t حتماً باید داخل کامپوننت و قبل از return باشد
  const { t } = useTranslation();

  const { selectedProduct, visibleProductModal, setVisibleProductModal } =
    useProductStore();

  const { data, refetch } = useSingleProduct(selectedProduct?._id);

  useEffect(() => {
    if (selectedProduct?._id && visibleProductModal) {
      refetch();
    }
  }, [selectedProduct]);

  return (
    <>
      <CModal visible={visibleProductModal} setVisible={setVisibleProductModal}>
        <div className="product-details">
          <div className="product-details-row">
            <span>{t("product.product_add_page.product_name_title")}:</span>
            <p>{data?.data?.title}</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_name_en_title")}:</span>
            <p>{data?.data?.englishTitle}</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_status_title")}:</span>
            <p>{data?.data?.status}</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_category_title")}:</span>
            <p>{data?.data?.category}</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_price_title")}:</span>
            <p>{data?.data?.price}</p>
          </div>

          <div className="product-details-row">
            <span>{t("product.product_add_page.product_quantity_title")}:</span>
            <p>{data?.data?.quantity}</p>
          </div>

          {data?.data?.properties?.map((item, index) => (
            <div key={index} className="product-details-row">
              <span>{item.name}:</span>
              <p>{item.value}</p>
            </div>
          ))}

          <div className="product-details-img">
            {data?.data?.images?.map((item, index) => (
              <img key={index} src={item} />
            ))}
          </div>

          <button
            onClick={() => {
              setVisibleProductModal(false);
            }}
          >
            {/* {t('product.product_modal_close_btn')} */}
            بستن
          </button>
        </div>
      </CModal>
    </>
  );
};
