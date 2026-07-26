import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, array } from "yup";
import { useTranslation } from "react-i18next";

export const ProductAddForm = () => {
  const [file, setFile] = useState(null);
  
  const {t} = useTranslation();
  let productSchema = object({
    title: string()
    .required(t("product.product_add_page.errors.title_required"))
    .min(2, t("product.product_add_page.errors.title_min")),
    price: number()
    .required(t("product.product_add_page.errors.price_required"))
    .positive(t("product.product_add_page.errors.price_positive"))
    .typeError(t("product.product_add_page.errors.price_type")),
    quantity: number()
    .required(t("product.product_add_page.errors.quantity_required"))
    .positive(t("product.product_add_page.errors.quantity_positive"))
    .typeError(t("product.product_add_page.errors.quantity_type")),
    tools: array()
    .of(
      object({
        name: string().required(t("product.product_add_page.errors.feature_name_required")),
        value: string().required(t("product.product_add_page.errors.feature_value_required")),
      })
    )
    .min(2,  t("product.product_add_page.errors.feature_min")),
  });
  
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });
  
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="product-form">
        <div className="product-form-item">
          <p>{t('product.product_add_page.product_name_title')}</p>
          <input
            className="product-form-item-inp"
            type="text"
            placeholder={t('product.product_add_page.product_name_title_placeholder')}
            {...register("title")}
          />
          {errors.title && (
            <span className="product-form-item-error">
              {errors.title.message}
            </span>
          )}
        </div>
        <div className="product-form-item">
          <p>{t('product.product_add_page.product_price_title')}</p>
          <input
            className="product-form-item-inp"
            type="number"
            placeholder={t('product.product_add_page.product_price_title_placeholder')}
            {...register("price")}
          />
          {errors.price && (
            <span className="product-form-item-error">
              {errors.price.message}
            </span>
          )}
        </div>
        <div className="product-form-item">
          <p>{t('product.product_add_page.product_quantity_title')}</p>
          <input
            className="product-form-item-inp"
            type="number"
            placeholder={t('product.product_add_page.product_quantity_title_placeholder')}
            {...register("quantity")}
          />
          {errors.quantity && (
            <span className="product-form-item-error">
              {errors.quantity.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>{t('product.product_add_page.product_feature_title')}</p>
          {fields.map((item, index) => (
            <div key={item.id} className="product-form-dynamic">
              <div className="product-form-dynamic-item">
                <input {...register(`tools.${index}.name`)} />
                {errors?.tools?.[index]?.name && (
                  <span className="product-form-item-error">
                    {errors?.tools?.[index]?.name.message}
                  </span>
                )}
              </div>
              <div className="product-form-dynamic-item">
                <input {...register(`tools.${index}.value`)} />
                {errors?.tools?.[index]?.value && (
                  <span className="product-form-item-error">
                    {errors?.tools?.[index]?.value.message}
                  </span>
                )}
              </div>
              <button type="button" onClick={() => remove(index)}>
              {t('product.product_add_page.product_delete_feature')}
              </button>
            </div>
          ))}
          <button className="product-form-item-btn" type="button" onClick={() => append({ name: "", value: "" })}>
          {t('product.product_add_page.product_add_feature_title')}
          </button>
        </div>

        <div className="product-form-item">
          <p>{t('product.product_add_page.product_img_title')}</p>
          <input
            {...register("image")}
            className="product-form-item-inp"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            type="file"
          />
        </div>
        {file && (
          <img
            className="product-add-form-img"
            src={URL.createObjectURL(file)}
          />
        )}

        <button className="product-form-btn">{t('product.product_add_page.product_add_btn')}</button>
      </form>
    </>
  );
};
