import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseApi } from "../api/baseApi";
import { useAuthStore } from "../store/AuthStore";

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
  // گرفتن تابع ذخیره کاربر از استور Zustand
  const setUser = useAuthStore((state) => state.setUser);
  return useMutation({
    mutationFn: async (postData) => {
      return await baseApi("/auth/register", "POST", postData);
    },
    onSuccess: (data, variables) => {
      if (data.result) {
        navigation("/p/dashboard");
        toast.success("ثبت نام موفقیت آمیز بود");
        setFormType("login");
        // ذخیره نام و ایمیل در Zustand و LocalStorage
        setUser({
          fullName: variables.fullName,
          email: variables.email,
        });
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
        localStorage.removeItem("isAuth");
        toast.info("خروج موفقیت آمیز بود");
      } else {
        toast.error("خروچ انجام نشد");
      }
    },
  });
};

//   return useMutation({
//     mutationFn: async (postData) => {
//       return await baseApi("/auth/register", "POST", postData);
//     },
//     // پارامتر دوم (variables) همون postData ارسالی از فرم است
//     onSuccess: (data, variables) => {
//       if (data.result) {

//         // ذخیره نام و ایمیل در Zustand و LocalStorage
//         setUser({
//           fullName: variables.fullName,
//           email: variables.email
//         });

//         navigation("/p/dashboard");
//         toast.success("ثبت نام موفقیت آمیز بود");
//         setFormType("login");
//       } else {
//         toast.error("ثبت نام انجام نشد");
//       }
//     },
//   });
// };
