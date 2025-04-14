import React from "react";
import { useParams } from "react-router-dom";
import "../styles/CoursePage.scss";

const CoursePage = () => {
  const { id } = useParams();

  return (
    <div className="course-page-container">
      <h1>Course Details</h1>
      <p>Course ID: {id}</p>
      {}
    </div>
  );
};

export default CoursePage;
