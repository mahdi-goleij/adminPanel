import { create } from "zustand";

export const useLayoutStore = create((set) => ({
    titlePage: "",
    setTitlePage: (value) => set({titlePage: value}),
    theme:'dark',
    setTheme:  (value) => set({theme: value}),
    lang:'fa',
    setLang:  (value) => set({lang: value})
}))