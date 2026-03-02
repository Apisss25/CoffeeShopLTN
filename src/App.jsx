import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MainLayout from "./layout/MainLayout";
const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
