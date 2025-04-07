// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.scss";
import "./styles/SearchBar.scss";
import HomePage from "./pages/HomePage";
import Sidebar from './components/SideFilters';

function App() {
  return (
    <div className="container">    
      <BrowserRouter basename="/school-catalog">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
