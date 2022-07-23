import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './FooterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function FooterSection() {
    return (
        <footer className="footer-container">
            <div className="row mx-auto footer-link-container text-justify container-fluid">
                <div className="col-md-4 py-2">
                    <HashLink to="/#" className="navbar-brand text-center">
                        <p><img src="https://i.ibb.co/JFR9hnN/logo2.png" className="logo-icon" alt="logo"/></p>
                        <h3 className="text-white">MediHelp Hospital</h3>
                    </HashLink>
                </div>

               

                <div className="col-md-2 text-center py-2">
                            <ul className="list-unstyled">
                                <li><Link to="/" className="footer-link">Privacy Policy &middot;</Link></li>
                                <li><Link to="/" className="footer-link">Cookie Policy &middot;</Link></li>
                                <li><Link to="/" className="footer-link">Read FAQ &middot;</Link></li>
                                <li><Link to="/" className="footer-link">Terms of Use &middot;</Link></li>
                            </ul>
                </div>
                <div className="col-md-2 text-center py-2">
                            <ul className="list-unstyled">
                                <li><Link to="/" className="footer-link"><FontAwesomeIcon className="animated-hover" icon={faFacebook} /> Facebook</Link></li>
                                <li><Link to="/" className="footer-link"><FontAwesomeIcon icon={faInstagram} /> Instagram</Link></li>
                                <li><Link to="/" className="footer-link"><FontAwesomeIcon icon={faYoutube} /> YouTube</Link></li>
                                <li><Link to="/" className="footer-link"><FontAwesomeIcon icon={faTwitter} /> Twitter</Link></li>

                            </ul>
                </div>

                <div className="col-md-3 text-center py-2">
                    <ul className="list-unstyled">
                        <li className="footer-link"><FontAwesomeIcon icon={faEnvelope} /> medihelp@gmail.com</li>
                        <li className="footer-link"><FontAwesomeIcon icon={faPhoneAlt} /> 0000000000</li>
                        <li className="footer-link"><FontAwesomeIcon icon={faMapMarkerAlt} /> Dhaka, Bangladesh</li>
                        <li><a href="mailto:medihelp@gmail.com"><button className="btn btn-light subscribe-btn">Feedback</button></a></li>
                    </ul>
                </div>

            </div>
            <div className="row footer-bottom">
                <div className="col-12">
                <p  className="text-center text-white py-1">© {(new Date().getFullYear())} MediHelp.com<br/>All rights reserved. </p>
                </div>
            </div>

        </footer>
    )
}