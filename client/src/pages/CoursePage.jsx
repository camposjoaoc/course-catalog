import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CoursePage.scss";
import CoursesData from "../data/CoursesData.json";
import Footer from "../components/Footer";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = CoursesData.find(c => c.id === parseInt(id));
    setCourse(foundCourse);
  }, [id]);

  if (!course) {
    return (
      <div className="course-page-container">
        <p>Loading course details...</p>
      </div>
    );
  }

  return (
    <div className="course-page-container">
      <nav>
        <p>Navbar</p>
      </nav>

      <section className="hero">
        <div className="course-header">
          <h1>{course.title}</h1>
        </div>

        <div className="course-body">
          <p className="course-description">{course.description}</p>

          <div className="course-details">
            <p>Location: {course.location}</p>
            <p>Start Date: {course.startDate}</p>
            <p>Status: {course.status}</p>
            {course.csnEligible && <p>CSN Eligible</p>}
          </div>
        </div>
      </section>

      <div className="course-main">
        <div className="course-left">
          <h2>Course Details</h2>
          <ul>
            <li>Starting date: Dec 2025</li>
            <li>Place: Sweden</li>
            <li>Internship: 10 months</li>
            <li>Duration: 2 years</li>
            <li>Language: English</li>
            <li>Degree: Higher Vocational Education</li>
            <li>Tuition: Free for EU/EEA</li>
          </ul>
          <button className="apply-button">Apply Here</button>
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

          <div className="coordinator">
            <h3>Course Coordinator</h3>
            <p>Title:John Doe</p>
            <p>Email: johndoe@email.com</p>
            <p>Phone: +123456789</p>
          </div>
        </div>
      </div>

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



