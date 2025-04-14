import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import InfoSection from "../components/InfoSection";
import LoadMoreButton from "../components/LoadMoreButton";
import "../styles/HomePage.scss";

function HomePage() {

  /*const courses = [
    {
      title: "Frontend Developer",
      description: "Lorem ipsum dolor sit amet...",
      location: "Malmö",
      startDate: "Sep 2025",
      csnEligible: true,
      status: "closed",
    },
    {
      title: "Business & Marketing",
      description: "Lorem ipsum dolor sit amet...",
      location: "Stockholm",
      startDate: "Sep 2026",
      csnEligible: true,
      status: "open",
    },
    {
      title: "Language & Culture",
      description: "Lorem ipsum dolor sit amet...",
      location: "Uppsala",
      startDate: "Jan 2026",
      csnEligible: true,
      status: "late",
    },
    {
      title: "UX/UI design",
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
  ); */
} 

export default HomePage;
