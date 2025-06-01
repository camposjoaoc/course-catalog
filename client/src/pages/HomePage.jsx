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
  const [filteredCourses, setFilteredCourses] = useState(CoursesData);

  //Visited courses
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("visitedCourses")) || [];
    const now = Date.now();
    const CACHE_EXPIRATION_TIME = 30 * 60 * 1000;

    const freshIds = stored
      .filter(item => now - item.timestamp < CACHE_EXPIRATION_TIME)
      .map(item => item.id);

    setVisitedCourses(freshIds);
  }, []);

  // Loads 5 more courses and temporarily flags the new ones to trigger animation
  const handleLoadMore = () => {
    setVisibleCourses(prev => {
      const newVisible = prev + 5;

      // Get IDs of newly added courses to apply animation class
      const newCourses = filteredCourses.slice(prev, newVisible).map(c => c.id);
      setRecentlyAddedIds(newCourses);

      // Clear the animation flag after the animation duration (600ms)
      setTimeout(() => {
        setRecentlyAddedIds([]);
      }, 600);

      return newVisible;
    });
  };

  // Handles search and location filtering
  const handleSearch = (searchTerm, selectedLocation) => {
    let filtered = CoursesData;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.shortDescription && course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter(course =>
        course.location && course.location === selectedLocation
      );
    }

    setFilteredCourses(filtered);
    setVisibleCourses(5);
  };

  const coursesToShow = filteredCourses.slice(0, visibleCourses);

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
        <SearchBar onSearch={handleSearch} />
        <div className="results-container">
          {coursesToShow.length === 0 ? (
            <div className="no-results-message">
              <p className="no-results-message">No courses found</p>
              <p className="no-results-message">Please try a different search term or location.</p>
            </div>
          ) : (
            coursesToShow.map((course) => (
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
            ))
          )}
          {visibleCourses < filteredCourses.length && (
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

