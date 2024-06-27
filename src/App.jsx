import "./App.module.css";
import { Routes, Route, useNavigation } from "react-router-dom";
import LandingView from "./Views/LandingView";
import ProductView from "./Views/ProductsView";
import HomeView from "./Views/HomeView";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path = "/products" element={<ProductView />} />
      </Routes>
    </>
  );
}

export default App;
