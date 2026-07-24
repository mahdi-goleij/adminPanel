import { useContext, useEffect } from "react";
import { useLayoutStore } from "../../store/LayoutStore";

export const Settings = () => {
  const { setTitlePage } = useLayoutStore();

  useEffect(() => {
    setTitlePage("تنظیمات");
  }, []);
  return (
    <>
      <h1>settings page</h1>
    </>
  );
};
