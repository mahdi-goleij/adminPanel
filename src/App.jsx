import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PanelLayout } from "./layouts/PanelLayout";
import { Auth } from "./pages/auth/Auth";
import { useEffect } from "react";
import { useTheme } from "./hooks/theme-hooks";
import "./config/i18n";
import { useTranslation } from "react-i18next";
import { useLang } from "./hooks/lang-hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bounce, ToastContainer } from "react-toastify";
import { ProtectedRoute } from "./layouts/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  const { i18n } = useTranslation();
  const { initTheme } = useTheme();
  const { initLang } = useLang();

  useEffect(() => {
    initLang();
  }, [i18n.language]);

  useEffect(() => {
    initTheme();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />}></Route>
            <Route path="/p/*" element={<ProtectedRoute ><PanelLayout /></ProtectedRoute>}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
}

export default App;
