// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.scss";
import "./styles/SearchBar.scss";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
