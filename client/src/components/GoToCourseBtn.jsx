import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/GoToCourseBtn.scss";

function GoToCourseBtn({ courseId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const now = Date.now();
    const stored = JSON.parse(localStorage.getItem("visitedCourses")) || [];
    const filtered = stored.filter((item) => item.id !== courseId);
    const updated = [...filtered, { id: courseId, timestamp: now }];
    localStorage.setItem("visitedCourses", JSON.stringify(updated));

    // Store the last clicked course ID in localStorage
    // This allows the CoursePage to highlight the last visited course
    localStorage.setItem("lastClickedCourseId", courseId);

    navigate(`/course/${courseId}`);
  };

  return (
    <button className="btnGo" onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
}

export default GoToCourseBtn;
