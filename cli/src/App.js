import { Routes, Route } from "react-router-dom";

import "./App.scss";
import AboutScreen from "./screens/AboutScreen";
import Contact from "./screens/Contact";
import Home from "./screens/HomeScreen";
import Merchant from "./screens/Merchant";
import Supplier from "./screens/Supplier";

function App() {
  return (
    <>
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sell" element={<Merchant/>} />
        <Route path="/supply" element={<Supplier />} />
        <Route path="/AboutUs" element={<AboutScreen />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
     
    </>
  );
}

export default App;
