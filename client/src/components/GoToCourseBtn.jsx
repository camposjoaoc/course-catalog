import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export default GoToCourseBtn;