import React, { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import CoursesData from "../data/CoursesData.json";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import InfoSection from "../components/InfoSection";
import LoadMoreButton from "../components/LoadMoreButton";
import MobileFilters from "../components/MobileFilters";
import "../styles/HomePage.scss";

function HomePage() {
  const [visibleCourses, setVisibleCourses] = useState(5);
  const [recentlyAddedIds, setRecentlyAddedIds] = useState([]);
  const [visitedCourses, setVisitedCourses] = useState([]);

  //Visited courses
useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("visitedCourses")) || [];
  const now = Date.now();
  const THIRTY_MINUTES = 30 * 60 * 1000;

  const freshIds = stored
    .filter(item => now - item.timestamp < THIRTY_MINUTES)
    .map(item => item.id);

  setVisitedCourses(freshIds);
}, []);

  // Loads 5 more courses and temporarily flags the new ones to trigger animation
  const handleLoadMore = () => {
    setVisibleCourses(prev => {
      const newVisible = prev + 5;

      // Get IDs of newly added courses to apply animation class
      const newCourses = CoursesData.slice(prev, newVisible).map(c => c.id);
      setRecentlyAddedIds(newCourses);

      // Clear the animation flag after the animation duration (600ms)
      setTimeout(() => {
        setRecentlyAddedIds([]);
      }, 600);

      return newVisible;
    });
  };
  const coursesToShow = CoursesData.slice(0, visibleCourses);

  return (
    <div className="home-page-container">
      <aside>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mobile-filters">
          <MobileFilters />
        </div>
      </aside>
      <main>
        <SearchBar />
        <div className="results-container">
          {coursesToShow.map((course) => (
            <div
              key={course.id}
              className={`course-card-wrapper ${recentlyAddedIds.includes(course.id) ? "fade-in" : ""}`}
            >
              <CourseCard
                id={course.id}
                title={course.title}
                description={course.shortDescription}
                location={course.location}
                startDate={course.startDate}
                csnEligible={course.csnEligible}
                status={course.status}
                visitedCourses={visitedCourses}
                setVisitedCourses={setVisitedCourses}
              />
            </div>
          ))}
          {visibleCourses < CoursesData.length && (
            <div className="load-more-container">
              <LoadMoreButton onClick={handleLoadMore} />
            </div>
          )}
        </div>
        <div>
          <InfoSection />
        </div>
      </main>
    </div>
  )
}

export default HomePage;

