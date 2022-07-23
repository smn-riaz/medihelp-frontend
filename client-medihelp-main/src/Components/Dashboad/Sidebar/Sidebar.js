import { faChartLine, faFileInvoice, faHospitalUser, faEye, faProcedures, faHome, faUsersCog, faCalendarAlt,  faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { PatientInformationContext } from '../../../App';

const Sidebar = () => {
    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))

    return (
        <div className="sidebar d-flex flex-column justify-content-between pt-5 px-3" >
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="sidebar-link text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {
                    (patientInformation.patientEmail || patientInfo.patientEmail) &&
                    <li>
                        <Link to="/profile" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faUserCircle} /> <span><strong>{patientInformation.patientName || patientInfo.patientName}</strong></span>
                        </Link>
                    </li>
                }
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === false || patientInfo.isPatient === false)) &&
                    <li >
                        <Link to="/dashboard" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faChartLine} /> <span c>Dashboard</span>
                        </Link>
                    </li>
                }
                {
                    (!(patientInformation.patientEmail || patientInfo.patientEmail)) &&
                    <li >
                        <Link to="/patientRegistration" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faHospitalUser} /> <span>Patient Registration</span>
                        </Link>
                    </li>
                }
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === false || patientInfo.isPatient === false)) &&
                    <li>
                        <Link to="/patientRegistrationInfo" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faFileAlt} /> <span >Patient Reg. Info.</span>
                        </Link>
                    </li>
                }
                
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === true || patientInfo.isPatient === true)) &&
                    <li>
                        <Link to="/patientAdmit" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faProcedures} /> <span>Patient Admit</span>
                        </Link>
                    </li>
                }
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === false || patientInfo.isPatient === false)) &&
                    <li>
                        <Link to="/patientAdmitInfo" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faFileInvoice} /> <span>Patient Admit Info.</span>
                        </Link>
                    </li>
                }
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === false || patientInfo.isPatient === false)) &&
                    <li>
                        <Link to="/staffRegistration" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faUsersCog} /> <span>Staff Registration</span>
                        </Link>
                    </li>
                }
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === false || patientInfo.isPatient === false)) &&
                    <li>
                        <Link to="/staffRegistrationInfo" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faFileAlt} /> <span >Staff Reg. Info.</span>
                        </Link>
                    </li>
                }
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === true || patientInfo.isPatient === true)) &&
                    <li>
                        <Link to="/bookAppointment" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faCalendarAlt} /> <span>Book Appointment</span>
                        </Link>
                    </li>
                }
                {
                    ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === false  || patientInfo.isPatient === false)) &&
                    <li>
                        <Link to="/appointments" className="sidebar-link text-decoration-none">
                            <FontAwesomeIcon icon={faEye} /> <span>View Appointments</span>
                        </Link>
                    </li>
                }
                {/* <li>
                <Link to="/generateBill" className="sidebar-link text-decoration-none">
                <FontAwesomeIcon icon={faFileInvoiceDollar} /> <span>Generate Bill</span> 
                </Link>
            </li>
            <li>
                <Link to="/billRecord" className="sidebar-link text-decoration-none">
                <FontAwesomeIcon icon={faFileMedical} /> <span>Bill Record</span> 
                </Link>
            </li> */}
                

            </ul>
        </div>
    );
};

export default Sidebar;