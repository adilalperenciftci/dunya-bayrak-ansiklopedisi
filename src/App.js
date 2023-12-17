import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ana sayfa yolu */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} /> {/* Yedek yol, tanımlanmamış tüm yollar için */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
