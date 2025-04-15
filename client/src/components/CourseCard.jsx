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

          <CourseStatusBadge status={status} />
        </div>
      </div>

      <div className="course-action">
        <GoToCourseBtn courseId={id} />
      </div>
    </div>
  );
}

export default CourseCard;



/*import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import GoToCourseBtn from "../components/GoToCourseBtn";
import CourseStatusBadge from "../components/CourseStatusBadge";
import '../styles/CourseCard.scss';


function CourseCard({
    title,
    description,
    location,
    startDate,
    csnEligible,
    status
  }) {
    const courseId = title.toLowerCase().replace(/\s+/g, "-");
  
    return (
      <div className={`course-card ${visited ? "visited" : ""}`} onClick={onClick}>
        <div className="course-content">
          <h2 className="course-title">{title}</h2>
          <p>{description}</p>
  
          <div className="course-info-row">
            <div className="course-info">
              <span><FontAwesomeIcon icon={faLocationDot} /> {location}</span>
              <span><FontAwesomeIcon icon={faCalendarDays} /> {startDate}</span>
              {csnEligible && <span>/ CSN Eligible</span>}
            </div>
  
            <CourseStatusBadge status={status} />
          </div>
        </div>
  
        <div className="course-action">
            <GoToCourseBtn courseId={1} />
        </div>
      </div>
    );
  }


  //Course card original 
  
  /*function CourseCard({
    title,
    description,
    location,
    startDate,
    csnEligible,
    status
}) {
    return (
        <div className="course-card">
            <div className="course-content">
                <h2 className="course-title">{title}</h2>
                <p>{description}</p>

                <div className="course-info-row">
                    <div className="course-info">
                        <span><FontAwesomeIcon icon={faLocationDot} /> {location}</span>
                        <span><FontAwesomeIcon icon={faCalendarDays} /> {startDate}</span>
                        {csnEligible && <span>/ CSN Eligible</span>}
                    </div>

                    <CourseStatusBadge status={status} />
                </div>
            </div>

            <div className="course-action">
                <GoToCourseBtn />
            </div>
        </div>
    );
} 
  
export default CourseCard; */