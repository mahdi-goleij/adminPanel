import { AnimatedBorder } from "../../../../components/AnimatedBorder";
import { useTranslation } from "react-i18next";

export const ProductAddRules = () => {
  const {t} = useTranslation();
  
  return (
    <>
      <div className="product-rules">
        <AnimatedBorder>
          <div className="product-rules-inner">
            <h4>{t('product.product_rules.title')}</h4>
            <p>{t('product.product_rules.description')}</p>
          </div>
        </AnimatedBorder>
      </div>
    </>
  );
};
