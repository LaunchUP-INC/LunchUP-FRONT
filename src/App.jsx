import "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import LandingView from "./Views/LandingView";
import HomeView from "./Views/HomeView";
import NavigationBar  from "./components/Nav/Nav";
import ProductDetailView from "./Views/ProductDetailView";
import LoginView from "./Views/LoginView";
import SignupView from "./Views/SignupView";
import ShoppingCartView from "./Views/ShoppingCartView";
import ProfileUserView from "./Views/ProfileUserView";
import AdminView from "./Views/AdminView";
import ProfileEdit from "./Views/ProfileEdit";
import PaymentSuccessView from "./Views/PaymentSuccessView";
import PaymentErrorView from "./Views/PaymentErrorView";
import { ProtectedRoute, ProtectAdminRoutes } from "./Views/RoutesProtection/RoutesProtection";
import BuyHistory from "./Views/BuyHistory";
import ChildViewDetails from "./Views/ChildViewDetails";
import BannedView from "./Views/BannedView";
function App() {
    
  
  return (
    <>
      <NavigationBar  />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/home" element={<ProtectedRoute><HomeView /></ProtectedRoute>} />
        <Route path="/products/detail/:id" element={<ProtectedRoute><ProductDetailView /></ProtectedRoute>} />
        <Route path="/shopping" element={<ProtectedRoute><ShoppingCartView /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><ProfileUserView /></ProtectedRoute>} />
        <Route path="/profile/edit" element={<ProtectedRoute><ProfileEdit /></ProtectedRoute>} />
        <Route path="/profile/children" element={<ProtectedRoute><ChildViewDetails /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><BuyHistory /></ProtectedRoute>} />
        <Route path="/payment-success" element={<ProtectedRoute><PaymentSuccessView /></ProtectedRoute>} />
        <Route path="/payment-error" element={<ProtectedRoute><PaymentErrorView /></ProtectedRoute>} />
        <Route path="/banned" element={<BannedView />} />

        {/*Rutas para ADMIN */}
        <Route path="/admin/*" element={<ProtectAdminRoutes><AdminView /></ProtectAdminRoutes>} />        
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
