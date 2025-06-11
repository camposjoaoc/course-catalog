import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CoursePage.scss";
import CoursesData from "../database/CoursesData.json";
import Spinner from "../components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCourse = CoursesData.find((c) => c.id === parseInt(id));
    setCourse(foundCourse);

    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Spinner />;

  if (!course) {
    return (
      <div className="course-page-container course-not-found-center">
        <p className="course-not-found">Course not found.</p>

        <p className="course-not-found">
          The course you are looking for does not exist or has been removed.
        </p>
        <button className="back-button" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="course-page-container">
      <section className="hero">
        <div className="course-hero-grid">
          <div className="course-image">
            <button className="back-button" onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img src={course.image} alt={course.title} />
          </div>

          <div className="course-info">
            <h1>{course.title}</h1>
            <p className="course-description">{course.shortDescription}</p>
          </div>
        </div>
      </section>

      <div className="course-main">
        <div className="course-left">
          <h2>Course Details</h2>
          <ul>
            <li>
              <strong>Starting date:</strong> {course.startingDate}
            </li>
            <li>
              <strong>Place:</strong> {course.place}
            </li>
            <li>
              <strong>Internship:</strong> {course.internship}
            </li>
            <li>
              <strong>Duration:</strong> {course.duration}
            </li>
            <li>
              <strong>Language:</strong> {course.language}
            </li>
            <li>
              <strong>Degree:</strong> {course.degree}
            </li>
            <li>
              <strong>CSN:</strong>{" "}
              {course.csnEligible ? "Eligible" : "Not eligible"}
            </li>
          </ul>

          {course.tuition && typeof course.tuition === "object" && (
            <div className="tuition-section">
              <strong>Applications & Tuition</strong>
              <ul>
                <li>
                  <em>Nordic applicants:</em>
                  <ul>
                    <li>{course.tuition.nordic.dates}</li>
                    <li>{course.tuition.nordic.fee}</li>
                  </ul>
                </li>
                <li>
                  <em>International applicants:</em>
                  <ul>
                    <li>{course.tuition.international.dates}</li>
                    <li>{course.tuition.international.fee}</li>
                    <li>{course.tuition.international.note}</li>
                  </ul>
                </li>
              </ul>
            </div>
          )}

          <button className="apply-button">Apply here</button>
        </div>

        <div className="course-right">
          <section>
            <h2>Course Description</h2>
            <p>{course.courseDescription}</p>
          </section>

          <section>
            <h2>Requirements</h2>
            <ul>
              {course.requirements
                .split(". ")
                .filter(Boolean)
                .map((req, index) => (
                  <li key={index}>{req.trim()}</li>
                ))}
            </ul>
          </section>

          <section className="coordinator">
            <h2>Course Coordinator</h2>
            <p>
              <strong>Title:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> johndoe@email.com
            </p>
            <p>
              <strong>Phone:</strong> +123456789
            </p>
          </section>
        </div>
      </div>

      <section className="testimonials">
        <h2>Students Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar"></div>
              <div className="testimonial-name-year">
                Random Name
                <br />
                Year
              </div>
            </div>
            <hr />
            <div className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar"></div>
              <div className="testimonial-name-year">
                Random Name
                <br />
                Year
              </div>
            </div>
            <hr />
            <div className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <div className="testimonial-avatar"></div>
              <div className="testimonial-name-year">
                Random Name
                <br />
                Year
              </div>
            </div>
            <hr />
            <div className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
