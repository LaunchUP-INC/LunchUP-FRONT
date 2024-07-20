import "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from "react-router-dom";
import LandingView from "./Views/LandingView";
import ProductView from "./Views/AdminViews/ProductsView";
import HomeView from "./Views/HomeView";
import NavigationBar  from "./components/Nav/Nav";
import ProductDetailView from "./Views/ProductDetailView";
import ProductFormView from "./Views/AdminViews/ProductFormView";
import LoginView from "./Views/LoginView";
import SignupView from "./Views/SignupView";
import ShoppingCartView from "./Views/ShoppingCartView";
import ProfileUserView from "./Views/ProfileUserView";
import AdminView from "./Views/AdminView";
import ProfileEdit from "./Views/ProfileEdit";
import PaymentSuccessView from "./Views/PaymentSuccessView";
import PaymentErrorView from "./Views/PaymentErrorView";


function App() {
  const location = useLocation();
  return (
    <>
      <NavigationBar  />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/products/detail/:id" element={<ProductDetailView />} />
        <Route path="/shopping" element={<ShoppingCartView />} />
        <Route path="/profile" element={<ProfileUserView />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/payment-success" element={<PaymentSuccessView />} />
        <Route path="/payment-error" element={<PaymentErrorView />} />

        {/*Rutas para ADMIN */}
        <Route path="/admin/*" element={<AdminView />} />        
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
