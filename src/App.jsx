import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PanelLayout } from "./layouts/PanelLayout";
import { Auth } from "./pages/auth/Auth";
import { useEffect } from "react";
import { useTheme } from "./hooks/theme-hooks";
import './config/i18n'
import { useTranslation } from "react-i18next";
import { useLang } from "./hooks/lang-hooks";



function App() {

  const {i18n} = useTranslation();
  const {initTheme} = useTheme();
  const {initLang} = useLang();


  useEffect(()=>{
    initLang();
  },[i18n.language]);


  useEffect(()=>{
    initTheme();
  },[]);

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Auth />}></Route>
              <Route path="/p/*" element={<PanelLayout />}></Route>
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
