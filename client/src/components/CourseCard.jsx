import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDays,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import GoToCourseBtn from "../components/GoToCourseBtn";
import CourseStatusBadge from "../components/CourseStatusBadge";
import "../styles/CourseCard.scss";

function CourseCard({
  id,
  title,
  description,
  location,
  startDate,
  csnEligible,
  status,
  visitedCourses,
  setVisitedCourses,
  highlighted,
}) {
  const visited = visitedCourses.includes(id);

  return (
    <div
      className={`course-card${highlighted ? " highlighted" : ""} ${
        visited ? "visited" : ""
      }`}
    >
      <div className="course-content">
        <h2 className="course-title">
          {title}
          {visited && (
            <FontAwesomeIcon icon={faCheckCircle} className="visited-dot" />
          )}
        </h2>
        <p>{description}</p>
        <div className="course-info-row">
          <div className="course-info">
            <span>
              <FontAwesomeIcon icon={faLocationDot} /> {location}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendarDays} /> {startDate}
            </span>
            {csnEligible && <span>/ CSN Eligible</span>}
          </div>
          <div className="course-status">
            <CourseStatusBadge status={status} />
          </div>
        </div>
      </div>
      <div className="course-action">
        <GoToCourseBtn courseId={id} />
      </div>
    </div>
  );
}

export default CourseCard;
