import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../styles/GoToCourseBtn.scss";

function GoToCourseBtn({ courseId }) {
  const navigate = useNavigate();

  // Handles the button click event to navigate to the course page
  const handleClick = () => {
    const now = Date.now();

    // Retrieve the list of visited courses from localStorage, or initialize as empty array
    const stored = JSON.parse(localStorage.getItem("visitedCourses")) || [];

    // Remove any previous entry for this courseId to avoid duplicates
    const filtered = stored.filter((item) => item.id !== courseId);

    // Add the current courseId with the current timestamp to the visited list
    const updated = [...filtered, { id: courseId, timestamp: now }];

    // Save the updated visited courses list back to localStorage
    localStorage.setItem("visitedCourses", JSON.stringify(updated));

    // Store the last clicked course ID in localStorage
    // This allows the CoursePage to highlight the last visited course
    localStorage.setItem("lastClickedCourseId", courseId);

    // Navigate to the course details page
    navigate(`/course/${courseId}`);
  };

  return (
    <button className="btnGo" onClick={handleClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
}

export default GoToCourseBtn;
