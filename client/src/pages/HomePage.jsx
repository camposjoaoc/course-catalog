import React, { useState, useEffect, useRef } from "react";
import CourseCard from "../components/CourseCard";
import CoursesData from "../data/CoursesData.json";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import InfoSection from "../components/InfoSection";
import LoadMoreButton from "../components/LoadMoreButton";
import MobileFilters from "../components/MobileFilters";
import "../styles/HomePage.scss";

function HomePage() {
  const [visibleCourses, setVisibleCourses] = useState(() => {
    // Initialize visibleCourses from localStorage or default to 5
    // This allows the user to set how many courses they want to see initially
    // and persists this choice across sessions.
    return parseInt(localStorage.getItem("visibleCourses") || "5", 10);
  });
  const [recentlyAddedIds, setRecentlyAddedIds] = useState([]);
  const [visitedCourses, setVisitedCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(CoursesData);
  const [highlightedCourseId, setHighlightedCourseId] = useState(null);

  // Initialize visibleCourses from localStorage
  useEffect(() => {
    localStorage.setItem("visibleCourses", visibleCourses);
  }, [visibleCourses]);

  // Highlight the last clicked course
  useEffect(() => {
    const lastClicked = localStorage.getItem("lastClickedCourseId");
    setHighlightedCourseId(lastClicked ? parseInt(lastClicked, 10) : null);

    // Clear the highlight after 30 seconds
    const timeout = setTimeout(() => {
      setHighlightedCourseId(null);
      localStorage.removeItem("lastClickedCourseId");
    }, 30000);

    return () => clearTimeout(timeout);
  }, []);

  //Visited courses
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("visitedCourses")) || [];
    const now = Date.now();
    const CACHE_EXPIRATION_TIME = 30 * 60 * 1000;

    const freshIds = stored
      .filter((item) => now - item.timestamp < CACHE_EXPIRATION_TIME)
      .map((item) => item.id);

    setVisitedCourses(freshIds);
  }, []);

  // Crie refs para os cards
  const cardRefs = useRef({});

  // Scroll para o card destacado ao montar
  useEffect(() => {
    if (highlightedCourseId && cardRefs.current[highlightedCourseId]) {
      cardRefs.current[highlightedCourseId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [highlightedCourseId]);

  // Loads 5 more courses and temporarily flags the new ones to trigger animation
  const handleLoadMore = () => {
    setVisibleCourses((prev) => {
      const newVisible = prev + 5;

      // Get IDs of newly added courses
      const newCourses = filteredCourses
        .slice(prev, newVisible)
        .map((c) => c.id);
      setRecentlyAddedIds(newCourses);

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
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (course.shortDescription &&
            course.shortDescription
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter(
        (course) => course.location && course.location === selectedLocation
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
              <p className="no-results-message">
                Please try a different search term or location.
              </p>
            </div>
          ) : (
            coursesToShow.map((course) => (
              <div
                key={course.id}
                ref={(el) => (cardRefs.current[course.id] = el)}
                className={`course-card-wrapper ${
                  recentlyAddedIds.includes(course.id) ? "fade-in" : ""
                }`}
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
                  highlighted={highlightedCourseId === course.id}
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
  );
}

export default HomePage;
