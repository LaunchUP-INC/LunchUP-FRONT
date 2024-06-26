import "./App.module.css";
import { Routes, Route, useNavigation } from "react-router-dom";
import LandingView from "./Views/LandingView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingView />} />
      </Routes>
    </>
  );
}

export default App;
