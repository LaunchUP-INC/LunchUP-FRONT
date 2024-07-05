import "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigation } from "react-router-dom";
import LandingView from "./Views/LandingView";
import ProductView from "./Views/ProductsView";
import HomeView from "./Views/HomeView";
import Nav from "./components/Nav/Nav";
import ProductDetailView from "./Views/ProductDetailView";
import ProductFormView from "./Views/ProductFormView";
import LoginView from "./Views/LoginView";
import SignupView from "./Views/SignupView";
import ShoppingCartView from "./Views/ShoppingCartView";
import ProfileUserView from "./Views/ProfileUserView";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/products" element={<ProductView />} />
        <Route path="/products/add" element={<ProductFormView />} />
        <Route path="/products/detail/:id" element={<ProductDetailView />} />
        <Route path="/shopping" element={<ShoppingCartView />} />
        <Route path="/profile" element={<ProfileUserView />} />
      </Routes>
    </>

  );
}

export default App;
