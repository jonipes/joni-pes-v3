import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/Home";
import Efootball from "./pages/Efootball";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/efootball" element={<Efootball/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
