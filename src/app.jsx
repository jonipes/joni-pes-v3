import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Efootball from "./pages/Efootball";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/efootball" element={<Efootball />} />
      </Routes>
    </BrowserRouter>
  );
}