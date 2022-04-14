import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.scss";
import Home from "./screens/HomeScreen";

import Merchant from "./screens/Merchant";
import Supplier from "./screens/Supplier";

function App() {
  return (
    <>
     
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/merchant" element={<Merchant/>} />
        <Route path="/supplier" element={<Supplier />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
