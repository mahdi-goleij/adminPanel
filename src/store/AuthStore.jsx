import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // اولش کاربری لاگین/رجیستر نکرده
      
      // این تابع رو صدا می‌زنی تا اطلاعات کاربر ذخیره بشه
      setUser: (userData) => set({ user: userData }),
      
      // برای زمان خروج از حساب
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", // اسمی که توی LocalStorage ذخیره میشه
    }
  )
);