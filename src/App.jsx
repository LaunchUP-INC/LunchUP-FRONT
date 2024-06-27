import "./App.module.css";
import { Routes, Route, useNavigation } from "react-router-dom";
import LandingView from "./Views/LandingView";
import ProductView from "./Views/ProductsView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path = "/products" element={<ProductView />} />
      </Routes>
    </>
  );
}

export default App;
