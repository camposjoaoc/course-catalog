import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/GoToCourseBtn.scss';

function GoToCourseBtn({ courseId }) {
    return (
        <Link to={`/course/${courseId}`}>
            <button className="btnGo">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </Link>
    );
}

export default GoToCourseBtn;
