import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PanelLayout } from "./layouts/PanelLayout";
import { Auth } from "./pages/auth/auth";
import { useEffect } from "react";
import { useTheme } from "./hooks/theme-hooks";
import './config/i18n'
import { useTranslation } from "react-i18next";



function App() {

  const {i18n} = useTranslation();


  const {initTheme} = useTheme();

  useEffect(()=>{
    let dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
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
