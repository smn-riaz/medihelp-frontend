import React, { useContext, useState } from 'react'
import Calendar from 'react-calendar';
import { useForm } from 'react-hook-form';
import PatientRegistrationPage from '../PatientRegistrationPage/PatientRegistrationPage'
import 'react-calendar/dist/Calendar.css';
import './BookAppointmentPage.css'
import { PatientInformationContext } from '../../../App';
import { useNavigate } from "react-router-dom";
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';
import deptDoctors from '../../../FakeData/FakeData';

export default function BookAppointmentPage() {

    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [value, onChange] = useState(new Date());
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatDate = `${value.getDate()} ${month[value.getMonth()]} ${value.getFullYear()}`;



    const [selectedDepts, setSelectedDepts] = useState('Neurology')
    const selectedDept = deptDoctors.filter(doctors => doctors.dept === selectedDepts)
    const selectedDocts = selectedDept[0].doctors
    const [selectedDoct, setSelectedDoct] = useState('')
    const [successfulBooking, setSuccessfulBooking] = useState(false)
    const [availableAppointment, setAvailableAppointment] = useState(false)
    const [showSubmit, setShowSubmit] = useState(false)
    const appointmentData = {
        appointmentFormatDate: formatDate,
        _id: patientInformation._id,
        departmentName: selectedDepts,
        doctorName: selectedDoct
    };


    const handleAvailableAppointment = () => {

        fetch("https://secure-scrubland-67511.herokuapp.com/availablePatientAppointment", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                appointmentFormatDate: formatDate,
                patientName: patientInformation.patientName,
                _id: patientInformation._id,
                doctorName: selectedDoct
            }
            )
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                
               if ((data.patients.length === 3) && ((data.patients.map(patient => patient._id !== patientInformation._id))[0])) {
                    setAvailableAppointment('Sorry, maximum appointments booked. Try for another doctor or date.')
                    
                }
               else if ((data.patients.map(patient => patient._id === patientInformation._id))[0])  {
                    setAvailableAppointment('Already you have an appointment')
                }
                 
                else {
                    setShowSubmit(true)
                    setAvailableAppointment(false)
                }

                
            })
            .catch(err => {
                setAvailableAppointment(false)
                setShowSubmit(true)
            }
            )

    }



    const onSubmit = () => {

        fetch("https://secure-scrubland-67511.herokuapp.com/addDocAppointments", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                doctorName: selectedDoct,
                departmentName: selectedDepts,
                appointmentFormatDate: formatDate,
                patients: [{
                    patientName: patientInformation.patientName,
                    _id: patientInformation._id,
                    appointmentFormatDate: formatDate,
                }]

            })
        })


            .then(result => {
                if (result) {
                    setSuccessfulBooking(true)
                }
            })
            .catch(err => {
                alert('Something happened wrong')
            })


        fetch("https://secure-scrubland-67511.herokuapp.com/appointmentUpdate", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointmentData)
        })
            .then(res => res.json())
            .then(result => {
                navigate('/profile')
            })
            .catch(err =>
                alert('Something wrong, please try again')
            )


        setShowSubmit(false)
    };
    return (
        <section className="bookAppointmentPage" >
            {
                ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === true || patientInfo.isPatient === true)) ?
                    <div className='row'>
                        <div className='col-lg-2 col-md-3'><Sidebar /></div>
                        <div className="col-lg-10 col-md-9 p-4 bookAppointmentPageContainer" >

                            <h3 className='text-center p-3'>Book Appointment</h3>
                            <div className="contactMain-part row p-3" >
                                {/* {(patientInformation.appointmentFormatDate || patientInfo.appointmentFormatDate) && <h5 className='text-center p-3'>Your last appointment: <strong>{patientInformation.appointmentFormatDate || patientInfo.appointmentFormatDate}, ( {patientInformation.doctorName || patientInfo.doctorName}, <u>{patientInformation.departmentName || patientInfo.departmentName}</u> )</strong></h5>} */}


                                <div className="col-lg-5 calender p-5 mx-auto">
                                    <h5 className='text-center'>{formatDate}</h5>
                                    <Calendar
                                        onChange={onChange}
                                        value={value}
                                        minDate={new Date()}
                                    />

                                </div>


                                <div className="col-lg-7 p-5 mx-auto">

                                    <nav className='py-3'>
                                        <h4 className="text-danger text-center"><u>Departments</u></h4>
                                        <ul className="nav justify-content-center nav-pills">
                                            <li onClick={() => setSelectedDepts("Neurology")} className="nav-item watch-type">
                                                <span to="neurology" className={selectedDepts === "Neurology" ? "active nav-link" : "nav-link"}>Neurology</span>
                                            </li>
                                            <li onClick={() => setSelectedDepts("Orthopaedics")} className="nav-item watch-type">
                                                <span to="orthopaedics" className={selectedDepts === "Orthopaedics" ? "active nav-link" : "nav-link"}>Orthopaedics</span>
                                            </li>
                                            <li onClick={() => setSelectedDepts("Children")} className="nav-item watch-type">
                                                <span to="children" className={selectedDepts === "Children" ? "active nav-link" : "nav-link"}>Children</span>
                                            </li>
                                            <li onClick={() => setSelectedDepts("Ear, Nose & Throat")} className="nav-item watch-type">
                                                <span to="ear, nose & throat" className={selectedDepts === "Ear, Nose & Throat" ? "active nav-link" : "nav-link"}>Ear, Nose & Throat</span>
                                            </li>
                                            <li onClick={() => setSelectedDepts("Endocrinology")} className="nav-item watch-type">
                                                <span to="endocrinology" className={selectedDepts === "Endocrinology" ? "active nav-link" : "nav-link"}>Endocrinology</span>
                                            </li>
                                        </ul>
                                    </nav>


                                    <div className="text-center mt-4 py-3">
                                        <h4><u className="text-danger text-center">Doctors:</u> (<small>{selectedDepts}</small>)</h4>
                                        {
                                            selectedDocts.map((doctor) => <button onClick={() => setSelectedDoct(`${doctor}`)} className={(selectedDoct === `${doctor}`) ? 'btn btn-primary  m-1' : 'btn  m-1'}>{doctor}</button>)
                                        }

                                    </div>
                                    <div className='text-center pt-4'>
                                        {
                                           <div className=''>
                                                <h5 className='text-danger'>{availableAppointment}
                                                </h5>
                                            </div>
                                        }
                                        {/* {
                                            (yourAppointment) && <div className=''>
                                                <h5 className='text-danger'>{yourAppointment}
                                                </h5>
                                            </div>
                                        } */}
                                       
                                        {
                                            (selectedDepts && selectedDoct && formatDate) &&
                                            <button className='btn btn-outline-primary my-5' onClick={handleAvailableAppointment}>Watch Available Appointment</button>
                                        }
                                        {(successfulBooking) && <div>
                                            <h5><span className="hash-icon">*</span> <u>Successfully booked your appointment on:</u></h5>
                                            <h6> {formatDate}, {selectedDoct}, <u>{selectedDepts}</u></h6></div>
                                        }
                                    </div>
                                </div>
                                {
                                (showSubmit) &&
                                    <div className='d-flex justify-content-center'>
                                        <button className='btn btn-success' onClick={onSubmit}>Book Appointment</button>
                                    </div>
                                }
                            </div>


                        </div></div>
                    :
                    <div>
                        <PatientRegistrationPage registrationNotice="Please, register first to Book Appointment." />
                    </div>
            }
        </section>
    )
}