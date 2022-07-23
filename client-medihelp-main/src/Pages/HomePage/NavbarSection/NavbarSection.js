import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { PatientInformationContext } from '../../../App';
import './NavbarSection.css'

export default function NavbarSection() {
    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))



    const handleSignOut = () => {
        setPatientInformation({})
        localStorage.clear()
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <nav id="" className={(isSticky || isCollapsed) ? "navbar-section slide in show shadow-sm navbar navbar-expand-md bg-light navbar-light navbar-section fixed-top" : "bg-light slide out show navbar navbar-expand-md navbar-light fixed-top"}>
            <div className="container-fluid-sm nav-bar container ">
                <HashLink to='/#' class="navbar-brand navbar-headline  fs-3" title="MediHelp - Home"><img height="40" width="40" src="https://i.ibb.co/JFR9hnN/logo2.png" alt=" " />MediHelp</HashLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span></button>


                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav ms-auto text-center mb-lg-0" >
                        {
                            (patientInformation.isPatient === false) ?

                                <li class="nav-item px-3">
                                    <Link class="nav-link text-dark" to="/"></Link>
                                </li>
                                :
                                <li class="nav-item px-3">
                                    <Link class="nav-link text-dark" to="/bookAppointment">Appointment</Link>
                                </li>
                        }
                        <li class="nav-item px-3">
                            <Link class="nav-link text-dark" to="/doctors">Doctor</Link>
                        </li>


                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="/"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span className='text-dark'>Service</span>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <HashLink class="dropdown-item" to="/#services">
                                        All Services<span className="hash-icon">*</span>
                                    </HashLink>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/emergencyService">
                                        Emergency
                                    </Link>
                                </li>

                                <li>
                                    <Link class="dropdown-item" to="/ambulanceService">
                                        Ambulance
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/doctors">
                                        Doctor
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/medicineService">
                                        Medicine
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/helplineService">
                                        Helpline
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        <li class="nav-item px-3">
                            <HashLink class="nav-link text-dark" to="/#testimonial">Testimonial</HashLink>
                        </li>
                        <li class="nav-item px-3">
                            <HashLink class="nav-link text-dark" to="/#contactUs">Contact</HashLink>
                        </li>

                        {
                            ((patientInformation.isPatient === true)) ?
                                <li class="nav-item">
                                    <Link to='/profile' class="nav-link text-dark">Profile</Link>
                                </li>
                                :
                                <li class="nav-item">
                                    <Link to='/dashboard' class="nav-link text-dark">Dashboard</Link>
                                </li>
                        }
                        {
                            (patientInformation.patientEmail) ? <li class="nav-item">
                                <Link to='/' onClick={handleSignOut} class="nav-link text-dark">Log out</Link>
                            </li> :
                                <li class="nav-item">
                                    <Link class="nav-link text-dark" to="/login"><strong>Login </strong></Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}