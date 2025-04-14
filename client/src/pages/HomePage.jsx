import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import CoursesData from "../data/CoursesData.json";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters";
import "../styles/HomePage.scss";

function HomePage() {
    const [visibleCourses, setVisibleCourses] = useState(5);

    const handleLoadMore = () => {
        setVisibleCourses(prev => prev + 5);
    };

    const coursesToShow = CoursesData.slice(0, visibleCourses);

    return (
        <>
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
                        {coursesToShow.map((course) => (
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                description={course.description}
                                location={course.location}
                                startDate={course.startDate}
                                csnEligible={course.csnEligible}
                                status={course.status}
                            />
                        ))}
                        {visibleCourses < CoursesData.length && (
                            <div className="load-more-container">
                                <button onClick={handleLoadMore} className="load-more-btn">
                                    More
                                </button>
                            </div>
                        )}
                    </div>
                </main>
                <footer>
                    <p>footer</p>
                </footer>
            </div>
        </>
    )
}

export default HomePage;