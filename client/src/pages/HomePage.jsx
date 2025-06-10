import React, { useState, useEffect, useRef } from "react";
import CourseCard from "../components/CourseCard";
import CoursesData from "../data/CoursesData.json";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import InfoSection from "../components/InfoSection";
import LoadMoreButton from "../components/LoadMoreButton";
import MobileFilters from "../components/MobileFilters";
import Spinner from "../components/Spinner";
import "../styles/HomePage.scss";

function HomePage() {
  // State to control how many courses are visible; initialized from localStorage or defaults to 5
  // This allows users to see more courses as they click "Load More" and persists across sessions
  const [visibleCourses, setVisibleCourses] = useState(() => {
    // Initialize visibleCourses from localStorage or default to 5
    // This allows the user to set how many courses they want to see initially
    // and persists this choice across sessions.
    return parseInt(localStorage.getItem("visibleCourses") || "5", 10);
  });

  // Stores IDs of courses that were recently added to the visible list (for animation)
  const [recentlyAddedIds, setRecentlyAddedIds] = useState([]);

  // Stores IDs of courses the user has visited (for visual indication)
  const [visitedCourses, setVisitedCourses] = useState([]);

  // Stores the list of courses after applying all filters
  const [filteredCourses, setFilteredCourses] = useState(CoursesData);

  // Stores the ID of the course to highlight (e.g., after clicking)
  const [highlightedCourseId, setHighlightedCourseId] = useState(null);

  // Stores all filter values; initialized from localStorage or defaults
  const [filters, setFilters] = useState(() => {
    // Try to load filters from localStorage, otherwise use default values
    const saved = localStorage.getItem("filters");
    return saved
      ? JSON.parse(saved)
      : {
          area: [],
          type: [],
          level: [],
          language: [],
          certificate: [],
          search: "",
          location: "",
        };
  });

  // Controls loading spinner visibility
  const [loading, setLoading] = useState(false);

  // Persist visibleCourses to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("visibleCourses", visibleCourses);
  }, [visibleCourses]);

  // Highlight the last clicked course (from localStorage), and remove highlight after 30 seconds
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

  // Load visited courses from localStorage, only keeping those visited within the last 30 minutes
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("visitedCourses")) || [];
    const now = Date.now();
    const CACHE_EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes

    // Filter out expired visits
    const freshIds = stored
      .filter((item) => now - item.timestamp < CACHE_EXPIRATION_TIME)
      .map((item) => item.id);

    setVisitedCourses(freshIds);
  }, []);

  // Create a ref to store card elements for scrolling to highlighted card
  const cardRefs = useRef({});

  // Scroll to the highlighted card when loading is done and highlightedCourseId is set
  useEffect(() => {
    if (
      !loading &&
      highlightedCourseId &&
      cardRefs.current[highlightedCourseId]
    ) {
      cardRefs.current[highlightedCourseId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [loading, highlightedCourseId, filteredCourses]);

  // Loads 5 more courses and temporarily flags the new ones to trigger animation
  const handleLoadMore = () => {
    setVisibleCourses((prev) => {
      const newVisible = prev + 5;

      // Get IDs of newly added courses for animation
      const newCourses = filteredCourses
        .slice(prev, newVisible)
        .map((c) => c.id);
      setRecentlyAddedIds(newCourses);

      // Remove animation flag after 600ms
      setTimeout(() => {
        setRecentlyAddedIds([]);
      }, 600);

      return newVisible;
    });
  };

  // Handles search and location filtering, updating the filters state
  const handleSearch = (searchTerm, selectedLocation) => {
    setFilters((prev) => ({
      ...prev,
      search: searchTerm,
      location: selectedLocation,
    }));
  };

  // Main filtering logic: applies all filters to CoursesData and updates filteredCourses
  useEffect(() => {
    setLoading(true);

    let filtered = CoursesData;

    // Filter by search term (title or shortDescription)
    if (filters.search) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          (course.shortDescription &&
            course.shortDescription
              .toLowerCase()
              .includes(filters.search.toLowerCase()))
      );
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(
        (course) => course.location && course.location === filters.location
      );
    }

    // Filter by area (dropdown, single selection)
    if (filters.area.length > 0 && filters.area[0]) {
      filtered = filtered.filter((course) => course.area === filters.area[0]);
    }

    // Filter by type (checkbox, multi)
    if (filters.type.length > 0) {
      filtered = filtered.filter((course) =>
        filters.type.includes(course.type)
      );
    }

    // Filter by level (checkbox, multi)
    if (filters.level.length > 0) {
      filtered = filtered.filter((course) =>
        filters.level.includes(course.level)
      );
    }

    // Filter by language (checkbox, multi)
    if (filters.language.length > 0) {
      filtered = filtered.filter((course) =>
        filters.language.includes(course.language)
      );
    }

    // Filter by certificate (checkbox, multi, values are "Yes"/"No")
    if (filters.certificate.length > 0) {
      filtered = filtered.filter((course) => {
        const cert = course.certificate ? "Yes" : "No";
        return filters.certificate.includes(cert);
      });
    }

    setFilteredCourses(filtered);

    // Simulate loading delay for better UX
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [filters]);

  // Save filters to localStorage whenever they change, to persist user choices
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  // Only show the number of courses specified by visibleCourses
  const coursesToShow = filteredCourses.slice(0, visibleCourses);

  return (
    <div className="home-page-container">
      <aside>
        <div className="sidebar">
          <Sidebar
            filters={filters}
            setFilters={setFilters}
            setVisibleCourses={setVisibleCourses}
          />
        </div>
        <div className="mobile-filters">
          <MobileFilters filters={filters} setFilters={setFilters} />
        </div>
      </aside>
      <main>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <SearchBar onSearch={handleSearch} />
            {(filters.search || filters.location) && (
              <div className="results-for-message">
                {filters.search && filters.location && (
                  <>
                    Results for <strong>{filters.search}</strong> in{" "}
                    <strong>{filters.location}</strong>
                  </>
                )}
                {filters.search && !filters.location && (
                  <>
                    Results for <strong>{filters.search}</strong>
                  </>
                )}
                {!filters.search && filters.location && (
                  <>
                    Results in <strong>{filters.location}</strong>
                  </>
                )}
              </div>
            )}
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
          </>
        )}
      </main>
    </div>
  );
}

export default HomePage;
