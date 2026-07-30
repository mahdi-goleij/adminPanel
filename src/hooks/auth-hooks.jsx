import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseApi } from "../api/baseApi";

export const useLogin = () => {
  const navigation = useNavigate();
  return useMutation({
    mutationFn: async (postData) => {
      return await baseApi("/auth/login", "POST", postData);
    },
    onSuccess: (data) => {
      if (data.result) {
        navigation("/p/dashboard");
        toast.success("ورود موفقیت آمیز بود");
        localStorage.setItem("isAuth", "true");

        // برای ارسال توکن در صورت ذخیره کردن در لوکال استوریج
        // localStorage.setItem("token", data.token);
      } else {
        toast.error("مشخصات وارد شده درست نیست");
      }
    },
  });
};

export const useRegister = (setFormType) => {
  const navigation = useNavigate();
  return useMutation({
    mutationFn: async (postData) => {
      return await baseApi("/auth/register", "POST", postData);
    },
    onSuccess: (data) => {
      if (data.result) {
        navigation("/p/dashboard");
        toast.success("ثبت نام موفقیت آمیز بود");
        setFormType("login");
      } else {
        toast.error("ثبت نام انجام نشد");
      }
    },
  });
};
export const useLogout = () => {
  const navigation = useNavigate();
  return useMutation({
    mutationFn: async () => {
      return await baseApi("/auth/logout", "POST");
    },
    onSuccess: (data) => {
      if (data.result) {
        navigation("/");
        localStorage.removeItem('isAuth')
        toast.info("خروج موفقیت آمیز بود");
      } else {
        toast.error("خروچ انجام نشد");
      }
    },
  });
};
