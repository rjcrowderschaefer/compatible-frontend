import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
// import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


function Footer(props) {
    return (
        <>
            <div className="footer-pin">
                <div className="footer">
                    <div className="footer-info">
                        <div className="footer-follow">
                            <span className="footer-section-title">
                                Follow us! We're friendly:</span>
                            <div className="social-icons">
                                <span className="social-icon">
                                    <FontAwesomeIcon icon={faSquareTwitter} size="lg" style={{ color: "#ffffff", }} />
                                </span>
                                <span className="social-icon">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#ffffff", }} />
                                </span>
                                <span className="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#ffffff", }} />
                                </span>
                                <span className="social-icon">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#ffffff", }} />
                                </span>
                            </div>
                        </div>
                        <div className="footer-discover">
                            <span className="footer-section-title">
                                Discover
                            </span>
                            <span className="footer-links">
                                <a href="/signup" className="footer-link">Sign Up</a>
                                <a href="/categories" className="footer-link">Skills By Category</a>
                            </span>
                        </div>
                        <div className="footer-company">
                            <div className="footer-section-title">
                                Company
                                <div className="footer-links">
                                    <a href="/about" className="footer-link">About Us</a>
                                    <a href="/faqs" className="footer-link">FAQs</a>
                                    <a href="/contact" className="footer-link">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-credit">
                            Full stack application built by RJ Crowder-Schaefer <FontAwesomeIcon icon={faCopyright} size="sm" style={{ color: "#062315", }} /> 2023
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;