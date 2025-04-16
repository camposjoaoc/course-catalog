import React, { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import CoursesData from "../data/CoursesData.json";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import InfoSection from "../components/InfoSection";
import LoadMoreButton from "../components/LoadMoreButton";
import Footer from "../components/Footer";
import MobileFilters from "../components/MobileFilters";
import "../styles/HomePage.scss";

function HomePage() {
    const [visibleCourses, setVisibleCourses] = useState(5);
    const [recentlyAddedIds, setRecentlyAddedIds] = useState([]);
    const [visitedCourses, setVisitedCourses] = useState([]);

    //Visited courses
    useEffect(() => {
        const stored = localStorage.getItem("visitedCourses");
        if (stored) {
            setVisitedCourses(JSON.parse(stored));
        }
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
            <nav>
                <p>navbar</p>
            </nav>
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
                                description={course.description}
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
                    <button onClick={() => {
                        localStorage.removeItem("visitedCourses");
                        window.location.reload();
                    }}>
                        Reset Visited Courses
                    </button>
                </div>
                <div>
                    <InfoSection />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>

    )
}

export default HomePage;

/* import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import InfoSection from "../components/InfoSection";
import LoadMoreButton from "../components/LoadMoreButton";
import "../styles/HomePage.scss";

function HomePage() {
  const courses = [
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet...",
      location: "Malmö",
      startDate: "Sep 2025",
      csnEligible: true,
      status: "closed",
    },
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet...",
      location: "Malmö",
      startDate: "Sep 2025",
      csnEligible: true,
      status: "open",
    },
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet...",
      location: "Malmö",
      startDate: "Sep 2025",
      csnEligible: true,
      status: "late",
    },
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet...",
      location: "Malmö",
      startDate: "Sep 2025",
      csnEligible: true,
      status: "open",
    },
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet...",
      location: "Malmö",
      startDate: "Sep 2025",
      csnEligible: true,
      status: "closed",
    },
  ];

  const [visibleCourses, setVisibleCourses] = useState(3); 

  const handleLoadMore = () => {
    setVisibleCourses((prev) => prev + 2); 
  };

  return (
    <div className="home-page-container">
      <nav>
        <p>navbar</p>
      </nav>

      <aside>
        <Sidebar />
      </aside>

      <main>
        <div>
          <SearchBar />
        </div>

        <div className="results-container">
          {courses.slice(0, visibleCourses).map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              location={course.location}
              startDate={course.startDate}
              csnEligible={course.csnEligible}
              status={course.status}
            />
          ))}

          {visibleCourses < courses.length && (
            <LoadMoreButton onClick={handleLoadMore} />
          )}
        </div>

        <div>
          <InfoSection />
        </div>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default HomePage;
*/
