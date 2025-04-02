import React, { useState } from "react";
import "./styles/App.scss";
import './styles/SearchBar.scss';
import CourseCard from "./components/CourseCard";
import SearchBar from "./components/SearchBar";
function App() {

  return (
    <>
      <div className="container">
      <SearchBar />
      </div>
      <div className="container">
        <CourseCard />
      </div>

    </>
  )
}

export default App
