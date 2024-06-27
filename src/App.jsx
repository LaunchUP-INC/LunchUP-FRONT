import "./App.module.css";
import { Routes, Route, useNavigation } from "react-router-dom";
import LandingView from "./Views/LandingView";
import ProductView from "./Views/ProductsView";
import HomeView from "./Views/HomeView";
import Nav from "./components/Nav/Nav";
import ProductDetailView from "./Views/ProductDetailView";
import ProductFormView from "./Views/ProductFormView";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/products" element={<ProductView />} />
        <Route path="/products/add" element={<ProductFormView />} />
        <Route path="/products/detail/:id" element={<ProductDetailView />} />
      </Routes>
    </>
  );
}

export default App;
