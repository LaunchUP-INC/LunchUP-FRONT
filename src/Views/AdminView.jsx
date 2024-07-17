import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../components/AdminComponents/Dashboard/Dashboard";
import ProductsView from "./AdminViews/ProductsView";
import ProductFormView from "./AdminViews/ProductFormView";
import SideBar from "../components/AdminComponents/AdminNav/SideBar";
import TopNavBar from "../components/AdminComponents/AdminNav/TopNavBar";
import { useEffect, useState } from "react";
import "./viewsStyles/admin.css"
import UsersView from "./AdminViews/UsersView";
import StatsView from "./AdminViews/StatsView";
import { fetchProducts, fetchUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AdminView = () => {
  const dispatch = useDispatch(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const allProducts = useSelector((state) => state.allProducts);
  const allUsers = useSelector((state) => state.allUsers);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(()=>{
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  },[dispatch]);

  return (

    <div >
      <TopNavBar toggleSidebar={toggleSidebar} />
      <div className={`container-fluid ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <SideBar isOpen={isSidebarOpen} toggle={toggleSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="products" element={<ProductsView products={allProducts} />} />
              <Route path="product/create" element={<ProductFormView />} />
              <Route path="product/modify/:id" element={<ProductFormView />} />
              <Route path="users" element={<UsersView users={allUsers} />} />
              <Route path="stats" element={<StatsView />} />
              <Route />
            </Routes>
          </main>
      </div>
    </div>

  );
};


export default AdminView;
