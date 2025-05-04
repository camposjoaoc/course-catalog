import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CoursePage.scss";
import CoursesData from "../data/CoursesData.json";

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

      <section className="hero">
        <div className="course-header">
          <h1>{course.title}</h1>
        </div>

        <div className="course-body">
          <p className="course-description">{course.shortDescription}</p>

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
            <li>Starting date: {course.startingDate}</li>
            <li>Place: {course.place}</li>
            <li>Internship: {course.internship}</li>
            <li>Duration: {course.duration}</li>
            <li>Language: {course.language}</li>
            <li>Degree: {course.degree}</li>
            <li>Tuition: {course.tuition}</li>
          </ul>
          <button className="apply-button">Apply Here</button>
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
            <p><strong>Title:</strong> John Doe</p>
            <p><strong>Email:</strong> johndoe@email.com</p>
            <p><strong>Phone:</strong> +123456789</p>
          </section>
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
    </div>
  );
};

export default CoursePage;



