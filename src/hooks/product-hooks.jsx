import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { baseApi } from "../api/baseApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useProductStore } from "../store/ProductStore";

export const useProduct = (query) => {
  return useQuery({
    queryKey: ["products", query],
    queryFn: async () => {
      return baseApi(`/product?${query}`, "GET");
    },
  });
};

export const useSingleProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    enabled: false,
    queryFn: async () => {
      return baseApi(`/product/${id}`, "GET");
    },
  });
};

export const useAddProduct = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (formData) => {
      return await baseApi("/product", "POST", formData, true);
    },
    onSuccess: (data) => {
      if (data.result) {
        toast.success("اضافه کردن محصول موفقیت آمیز بود");
        navigate("/p/product/management");
      } else {
        // اگر سرور گفت کاربر پیدا نشد (یعنی سشن منقضی شده)
        if (data.mes === "کاربر پیدا نشد") {
          toast.error("نشست شما منقضی شده است. لطفاً دوباره وارد شوید.");
          navigate("/"); // هدایت خودکار به صفحه لاگین
        } else {
          toast.error(data.mes || "اضافه کردن محصول موفقیت آمیز نبود");
        }
      }
    },
  });
};

export const useEditProduct = (id) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (formData) => {
      return await baseApi(`/product/${id}`, "PATCH", formData, true);
    },
    onSuccess: (data) => {
      if (data.result) {
        toast.success("ویرایش کردن محصول موفقیت آمیز بود");
        navigate("/p/product/management");
      } else {
        // اگر سرور گفت کاربر پیدا نشد (یعنی سشن منقضی شده)
        if (data.mes === "کاربر پیدا نشد") {
          toast.error("نشست شما منقضی شده است. لطفاً دوباره وارد شوید.");
          navigate("/"); // هدایت خودکار به صفحه لاگین
        } else {
          toast.error(data.mes || "ویرایش کردن محصول موفقیت آمیز نبود");
        }
      }
    },
  });
};

export const useDeleteProduct = (id) => {
  const queryClient = useQueryClient();

  const {setVisibleDel} = useProductStore()


  return useMutation({
    mutationFn: async (formData) => {
      return await baseApi(`/product/${id}`, "DELETE");
    },
    onSuccess: (data) => {
      if (data.result) {
        setVisibleDel(false);
        queryClient.invalidateQueries({ queryKey: ["products"] })
        toast.success("حذف کردن محصول موفقیت آمیز بود");
      } else {
        // اگر سرور گفت کاربر پیدا نشد (یعنی سشن منقضی شده)
        if (data.mes === "کاربر پیدا نشد") {
          toast.error("نشست شما منقضی شده است. لطفاً دوباره وارد شوید.");
          navigate("/"); // هدایت خودکار به صفحه لاگین
        } else {
          toast.error(data.mes || "حذف کردن محصول موفقیت آمیز نبود");
        }
      }
    },
  });
};