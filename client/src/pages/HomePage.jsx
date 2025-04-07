import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideFilters"; 
import "../styles/HomePage.scss";

function HomePage() {
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
                        <CourseCard
                            title="Frontend Developer"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            location="Malmö"
                            startDate="Sep 2025"
                            csnEligible={true}
                            status="closed"
                        >
                        </CourseCard>

                        <CourseCard
                            title="Frontend Developer"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            location="Malmö"
                            startDate="Sep 2025"
                            csnEligible={true}
                            status="open"
                        >
                        </CourseCard>

                        <CourseCard
                            title="Frontend Developer"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            location="Malmö"
                            startDate="Sep 2025"
                            csnEligible={true}
                            status="late"
                        >
                        </CourseCard>

                        <CourseCard
                            title="Frontend Developer"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            location="Malmö"
                            startDate="Sep 2025"
                            csnEligible={true}
                            status="open"
                        >
                        </CourseCard>

                        <CourseCard
                            title="Frontend Developer"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            location="Malmö"
                            startDate="Sep 2025"
                            csnEligible={true}
                            status="late"
                        >
                        </CourseCard>

                        <CourseCard
                            title="Frontend Developer"
                            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                            location="Malmö"
                            startDate="Sep 2025"
                            csnEligible={true}
                            status="closed"
                        >
                        </CourseCard>
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