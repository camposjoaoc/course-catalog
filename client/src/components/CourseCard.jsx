import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import GoToCourseBtn from './GoToCourseBtn.jsx';
import '../styles/CourseCard.scss';

function CourseCard() {
    return (
        <div className="course-card">
            <div className="course-content">
                <h2 className="course-title">Frontend Developer</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <div className="course-info">
                    <span><FontAwesomeIcon icon={faLocationDot} /> Malmö</span>
                    <span><FontAwesomeIcon icon={faCalendarDays} /> Sep 2025</span>
                    <span>/ CSN Eligible</span>
                </div>
            </div>
            <div className="course-action">
                <GoToCourseBtn />
            </div>
        </div>
    );
}

export default CourseCard;