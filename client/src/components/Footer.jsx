import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.scss'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-column">
                    <p className="footer-title">Product</p>
                    <p>News</p>
                    <p>Support</p>
                    <p>Sign in</p>
                    <p>Status</p>
                </div>
                <div className="footer-column">
                    <p className="footer-title">School X</p>
                    <p>About us</p>
                    <p>Work with us</p>
                    <p>Contact</p>
                    <p>LinkedIn</p>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-left">
                    <p>&copy; 2025 Learnpoint AB. All rights reserved.</p>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="footer-right">
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;