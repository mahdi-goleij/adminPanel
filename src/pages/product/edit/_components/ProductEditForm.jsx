import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, array } from "yup";
import { useTranslation } from "react-i18next";
import { useEditProduct } from "../../../../hooks/product-hooks";
import {BtnLoader} from "../../../../components/BtnLoader/BtnLoader"

export const ProductEditForm = ({productData}) => {
  const { mutate, isPending } = useEditProduct(productData?._id);

  const { t } = useTranslation();
  let productSchema = object({
    title: string()
      .required(t("product.product_add_page.errors.title_required"))
      .min(2, t("product.product_add_page.errors.title_min")),
    englishTitle: string()
      .required(t("product.product_add_page.errors.title_required"))
      .min(2, t("product.product_add_page.errors.title_min")),
    status: string().required(
      t("product.product_add_page.errors.title_status_required")
    ),
    category: string().required(
      t("product.product_add_page.errors.title_category_required")
    ),
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
          name: string().required(
            t("product.product_add_page.errors.feature_name_required")
          ),
          value: string().required(
            t("product.product_add_page.errors.feature_value_required")
          ),
        })
      )
      .min(2, t("product.product_add_page.errors.feature_min")),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  const onSubmit = (data) => {
    const finalData = {
      ...data,
    };
    let formData = new FormData();
    formData.append("title", finalData.title);
    formData.append("price", finalData.price);
    formData.append("quantity", finalData.quantity);
    formData.append("category", finalData.category);
    formData.append("englishTitle", finalData.englishTitle);
    formData.append("status", finalData.status);

    finalData.tools.forEach((item, index) => {
      formData.append(`properties[${index}][name]`, item.name);
      formData.append(`properties[${index}][value]`, item.value);
    });
    mutate(formData);
  };

  useEffect(()=> {
    if (productData) {
      reset({
        title:productData?.title,
        englishTitle:productData?.englishTitle,
        status:productData?.status,
        category:productData?.category,
        price:productData?.price,
        quantity:productData?.quantity,
        tools: productData?.properties ? productData?.properties.map((item)=> ({name: item.name, value:item.value})) : [{name: '' , value: '',}],
      })
    }
  },[productData])


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="product-form">
        <div className="product-form-item">
          <p>{t("product.product_add_page.product_name_title")}</p>
          <input
            className="product-form-item-inp"
            type="text"
            placeholder={t(
              "product.product_add_page.product_name_title_placeholder"
            )}
            {...register("title")}
          />
          {errors.title && (
            <span className="product-form-item-error">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>{t("product.product_add_page.product_name_en_title")}</p>
          <input
            className="product-form-item-inp"
            type="text"
            placeholder={t(
              "product.product_add_page.product_name_en_title_placeholder"
            )}
            {...register("englishTitle")}
          />
          {errors.englishTitle && (
            <span className="product-form-item-error">
              {errors.englishTitle.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>{t("product.product_add_page.product_status_title")}</p>
          <select
            className="product-form-item-select"
            {...register("status")}
          >
            <option value="" disabled selected hidden>
              {t("product.product_add_page.product_status_title_placeholder")}
            </option>
            <option value="active">فعال</option>
            <option value="deactive">غیر فعال</option>
          </select>
          {errors.status && (
            <span className="product-form-item-error">
              {errors.status.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>{t("product.product_add_page.product_category_title")}</p>
          <select
            className="product-form-item-select"
            {...register("category")}
          >
            <option value="" disabled selected hidden>
              {t("product.product_add_page.product_category_title_placeholder")}
            </option>
            <option value="cover">کاور</option>
            <option value="holder">هولدر</option>
            <option value="bag">کیف</option>
            <option value="charger">شارژر</option>
            <option value="cable">کابل</option>
            <option value="flash">فلش</option>
          </select>
          {errors.category && (
            <span className="product-form-item-error">
              {errors.category.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>{t("product.product_add_page.product_price_title")}</p>
          <input
            className="product-form-item-inp"
            type="number"
            placeholder={t(
              "product.product_add_page.product_price_title_placeholder"
            )}
            {...register("price")}
          />
          {errors.price && (
            <span className="product-form-item-error">
              {errors.price.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>{t("product.product_add_page.product_quantity_title")}</p>
          <input
            className="product-form-item-inp"
            type="number"
            placeholder={t(
              "product.product_add_page.product_quantity_title_placeholder"
            )}
            {...register("quantity")}
          />
          {errors.quantity && (
            <span className="product-form-item-error">
              {errors.quantity.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>{t("product.product_add_page.product_feature_title")}</p>
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
                {t("product.product_add_page.product_delete_feature")}
              </button>
            </div>
          ))}
          <button
            className="product-form-item-btn"
            type="button"
            onClick={() => append({ name: "", value: "" })}
          >
            {t("product.product_add_page.product_add_feature_title")}
          </button>
        </div>




        {isPending ? (
          <button type="button" className="product-form-btn-loader">
            <BtnLoader></BtnLoader>
          </button>
        ) : (
          <button className="product-form-btn">
            {t("product.product_add_page.product_add_btn")}
          </button>
        )}
      </form>
    </>
  );
};
