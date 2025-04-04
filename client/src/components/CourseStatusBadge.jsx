import '../styles/CourseStatusBadge.scss';

const statusMap = {
    open: 'Open for application',
    closed: 'Closed for application',
    late: 'Open for late application',
};

export default function CourseStatusBadge({ status }) {
    const text = statusMap[status] || '';
    return (
        <span className={`status-badge status-badge--${status}`}>
            {text}
        </span>
    );
}