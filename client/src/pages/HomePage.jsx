import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import CoursesData from "../data/CoursesData.json";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import "../styles/HomePage.scss";
import InfoSection from "../components/InfoSection";
import LoadMoreButton from "../components/LoadMoreButton";

function HomePage() {
    const [visibleCourses, setVisibleCourses] = useState(5);
    const [recentlyAddedIds, setRecentlyAddedIds] = useState([]);

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
                <Sidebar />
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
                                title={course.title}
                                description={course.description}
                                location={course.location}
                                startDate={course.startDate}
                                csnEligible={course.csnEligible}
                                status={course.status}
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
            <footer>
                <p>footer</p>
            </footer>
        </div>

    )
}

export default HomePage;