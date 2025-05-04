import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import GoToCourseBtn from "../components/GoToCourseBtn";
import CourseStatusBadge from "../components/CourseStatusBadge";
import '../styles/CourseCard.scss';

function CourseCard({
  id,
  title,
  description,
  location,
  startDate,
  csnEligible,
  status,
  visitedCourses,
  setVisitedCourses
}) {
  const visited = visitedCourses.includes(id);

  const handleClick = () => {
    if (!visited) {
      const updated = [...visitedCourses, id];
      setVisitedCourses(updated);
      localStorage.setItem("visitedCourses", JSON.stringify(updated));
    }
  };

  return (
    <div className={`course-card ${visited ? "visited" : ""}`} onClick={handleClick}>
      <div className="course-content">
        <h2 className="course-title">
          {title}
          {visited && <FontAwesomeIcon icon={faCheckCircle} className="visited-dot" />}
        </h2>
        <p>{description}</p>
        <div className="course-info-row">
          <div className="course-info">
            <span><FontAwesomeIcon icon={faLocationDot} /> {location}</span>
            <span><FontAwesomeIcon icon={faCalendarDays} /> {startDate}</span>
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

