import { Route, Routes } from "react-router-dom";
import { SvgMenu } from "../icons/SvgMenu";
import { SvgSearch } from "../icons/SvgSearch";
import { MainHeader } from "./MainHeader";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Settings } from "../pages/settings/Settings";
import { ProductAdd } from "../pages/product/add/ProductAdd";
import { ProductEdit } from "../pages/product/edit/ProductEdit";
import { ProductManagement } from "../pages/product/management/ProductManagement";

export const Main = ({ handleSideBar, setHandleSideBar, children }) => {
  return (
    <>
      <main className={`main ${handleSideBar && "main-inc"}`}>
        <MainHeader setHandleSideBar={setHandleSideBar} />
        <div className="main-cont">
        {children}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/product/management" element={<ProductManagement />}></Route>
          <Route path="/product/add" element={<ProductAdd />}></Route>
          <Route path="/product/edit/:id" element={<ProductEdit />}></Route>
        </Routes>
        </div>
      </main>
    </>
  );
};
