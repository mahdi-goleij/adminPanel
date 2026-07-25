import { useContext, useEffect } from "react";
import { useLayoutStore } from "../../store/LayoutStore";
import { useTranslation } from "react-i18next";

export const Settings = () => {
  const { setTitlePage } = useLayoutStore();
  const {t} = useTranslation();

  useEffect(() => {
    setTitlePage(t('settings.page_title'));
  }, []);
  return (
    <>
      <h1>settings page</h1>
    </>
  );
};
