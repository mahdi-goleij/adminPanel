import { useLayoutStore } from "../store/LayoutStore";

export const useTheme = () => {
  const { setTheme } = useLayoutStore();

  const handleSetTheme = (newTheme) => {
    let classList = document.documentElement.classList;
    if (newTheme === "light") {
      classList.add("light");
    } else {
      classList.remove("light");
    }
  };

  const handleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    handleSetTheme(newTheme);
  };

  const initTheme = () => {
    let localTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
      let finalTheme = localTheme || systemTheme;
    setTheme(finalTheme);
    handleSetTheme(finalTheme);
  };

  return { handleTheme, initTheme };
};
