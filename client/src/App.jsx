// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.scss";
import "./styles/SearchBar.scss";
import HomePage from "./pages/HomePage";
import Sidebar from './components/SideFilters';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <div className="container"> 
    <Navbar />   
      <BrowserRouter basename="/school-catalog">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
