/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/GoToCourseBtn.scss';
function GoToCourseBtn() {

    return (
        <>
            <div>
                <button className="btnGo"><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </>
    );
}

export default GoToCourseBtn;*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // IMPORTANT: import Link
import '../styles/GoToCourseBtn.scss';

function GoToCourseBtn({ courseId }) { // receive the courseId!
    return (
        <Link to={`/course/${courseId}`} style={{ textDecoration: "none" }}>
            <button className="btnGo">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </Link>
    );
}

export default GoToCourseBtn;
