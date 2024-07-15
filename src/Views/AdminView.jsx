import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../components/AdminComponents/Dashboard/Dashboard";
import ProductView from "./AdminViews/ProductsView";
import ProductFormView from "./AdminViews/ProductFormView";
import SideBar from "../components/AdminComponents/AdminNav/SideBar";
import TopNavBar from "../components/AdminComponents/AdminNav/TopNavBar";
import { useState } from "react";
import "./viewsStyles/admin.css"

const AdminView = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <div >
      <TopNavBar toggleSidebar={toggleSidebar} />
      <div className={`container-fluid ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <SideBar isOpen={isSidebarOpen} toggle={toggleSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="products" element={<ProductView />} />
              <Route path="product/create" element={<ProductFormView />} />
              <Route path="product/modify/:id" element={<ProductFormView />} />
              <Route />
              <Route />
              <Route />
            </Routes>
          </main>
      </div>
    </div>

  );
};


export default AdminView;
