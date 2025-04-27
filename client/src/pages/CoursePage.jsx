import React from "react";
import { useParams } from "react-router-dom";
import "../styles/CoursePage.scss";
import CoursesData from "../data/CoursesData.json";
import Footer from "../components/Footer";

const CoursePage = () => {
  const { id } = useParams();

  return (
    <div className="course-page-container">
            <nav>
                <p>navbar</p>
            </nav>
      {/* Hero Section */}
      <section className="hero">
        <img src="/path/to/your/course-image.jpg" alt="Course Preview" />
        <div className="hero-content">
          <h1>Study Frontend Development</h1>
          <p>Learn how to become a skilled frontend developer building modern, responsive websites and applications.</p>
          <button>Apply Here</button>
        </div>
      </section>

      {/* Main Section */}
      <div className="course-main">
        {/* Left - Course Details */}
        <div className="course-left">
          <h2>Course Details</h2>
          <ul>
            <li><strong>Starting date:</strong> Dec 2025</li>
            <li><strong>Place:</strong> Sweden</li>
            <li><strong>Internship:</strong> 10 months</li>
            <li><strong>Duration:</strong> 2 years</li>
            <li><strong>Language:</strong> English</li>
            <li><strong>Degree:</strong> Higher Vocational Education</li>
            <li><strong>Tuition:</strong> Free for EU/EEA</li>
          </ul>
          <button>Apply Here</button>
        </div>

        <div className="course-right">
          <section>
            <h2>Course Description</h2>
            <p>This course will prepare you with skills in HTML, CSS, JavaScript, and frameworks like React. You will learn best practices in building user-friendly, responsive web applications and work on real-world projects.</p>
          </section>

          <section>
            <h2>Requirements</h2>
            <ul>
              <li>Completed upper secondary education</li>
              <li>Strong motivation and basic tech skills</li>
              <li>Recommended: knowledge of HTML/CSS</li>
            </ul>
          </section>

          {/* Coordinator Box */}
          <div className="coordinator">
            <h3>Course Coordinator</h3>
            <p><strong>Title:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@email.com</p>
            <p><strong>Phone:</strong> +123456789</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Students Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <h3>Student A</h3>
            <p>"This course helped me land my first developer job!"</p>
          </div>
          <div className="testimonial-card">
            <h3>Student B</h3>
            <p>"The teachers are amazing and the projects are real-world."</p>
          </div>
          <div className="testimonial-card">
            <h3>Student C</h3>
            <p>"Highly recommend it to anyone wanting to start coding."</p>
          </div>
        </div>
      </section>

            <footer>
                <Footer />
            </footer>
    </div>
  );
};

export default CoursePage;


