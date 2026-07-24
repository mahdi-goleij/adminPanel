import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, array } from "yup";

export const ProductAddForm = () => {
  const [file, setFile] = useState(null);

  let productSchema = object({
    title: string()
      .required("فیلد نام محصول اجباریست")
      .min(2, "حتما نام باید 2 کاراکتر باشد"),
    price: number()
      .required("قیمت اجباریست")
      .positive("بیشتر از صفر باشد")
      .typeError("حتما عدد باشد"),
    quantity: number()
      .required(" اجباریست")
      .positive("بیشتر از صفر باشد")
      .typeError("حتما عدد باشد"),
    tools: array()
      .of(
        object({
          name: string().required("نام اجباریست"),
          value: string().required("مقدار اجباریست"),
        })
      )
      .min(2),
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
          <p>عنوان محصول</p>
          <input
            className="product-form-item-inp"
            type="text"
            placeholder="نام محصول را وارد کنید"
            {...register("title")}
          />
          {errors.title && (
            <span className="product-form-item-error">
              {errors.title.message}
            </span>
          )}
        </div>
        <div className="product-form-item">
          <p>قیمت محصول</p>
          <input
            className="product-form-item-inp"
            type="number"
            placeholder="قیمت محصول را وارد کنید"
            {...register("price")}
          />
          {errors.price && (
            <span className="product-form-item-error">
              {errors.price.message}
            </span>
          )}
        </div>
        <div className="product-form-item">
          <p>موجودی محصول</p>
          <input
            className="product-form-item-inp"
            type="number"
            placeholder="موجودی محصول را وارد کنید"
            {...register("quantity")}
          />
          {errors.quantity && (
            <span className="product-form-item-error">
              {errors.quantity.message}
            </span>
          )}
        </div>

        <div className="product-form-item">
          <p>ویژگی های محصول</p>
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
                حذف
              </button>
            </div>
          ))}
          <button className="product-form-item-btn" type="button" onClick={() => append({ name: "", value: "" })}>
            افزودن ویژگی جدید
          </button>
        </div>

        <div className="product-form-item">
          <p>تصویر محصول</p>
          <input
            {...register("image")}
            className="product-form-item-inp"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            type="file"
            placeholder="موجودی محصول را وارد کنید"
          />
        </div>
        {file && (
          <img
            className="product-add-form-img"
            src={URL.createObjectURL(file)}
          />
        )}

        <button className="product-form-btn">افزودن</button>
      </form>
    </>
  );
};
