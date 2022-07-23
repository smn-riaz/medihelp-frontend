import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'
import { PatientInformationContext } from '../../../App'
import ServicePages from '../../../Components/ServicePages/ServicePages'
import './AmbulanceServicePage.css'

export default function AmbulanceServicePage() {
    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const [ambulanceDate, setAmbulanceDate] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false);

    const [value, onChange] = useState(new Date());
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatDate = `${value.getDate()} ${month[value.getMonth()]} ${value.getFullYear()}`;


    if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 6000)
    }


    const handleAmbulance = () => {
        fetch('https://secure-scrubland-67511.herokuapp.com/ambulanceUpdate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ambulanceDate: formatDate, _id: patientInformation._id
            })
        })
            .then(res => res.json())
            .then(result => {
                setIsSuccess(true)
                setAmbulanceDate(formatDate)
            })
    }

    return (
        <section className="mt-5 servicePageContainer">
            <div className="d-flex justify-content-center">
                {
                    (!patientInformation.patientEmail) &&
                    <div className=" mx-auto">

                        <ServicePages serviceName="Ambulance Service" servicePhoto="https://i.ibb.co/r5rpbQn/ambulance.png" specialLink="" />

                        <h4 className="text-center">If you need to pre-book ambulance, please <Link to='/login'>login/register</Link> here.</h4>

                    </div>
                }

                {
                    (patientInformation.patientEmail) &&
                    <div className="row mx-auto pt-5">
                        <h3 className="py-3">Select a date for pre-booking an Ambulance </h3>
                        {
                            (!ambulanceDate) && <p>previous booked for: <strong>{patientInformation.ambulanceDate}</strong></p>
                        }
                        <div className="row">
                            <div className="col-lg-9">
                                {
                                    (ambulanceDate) &&
                                    <h5>Successfully booked <strong><span className="hash-icon">*</span> {ambulanceDate}</strong></h5>
                                }
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    minDate={new Date()}
                                />
                                <button className={(!ambulanceDate) ? 'submit btn btn-primary my-1' : 'submit btn btn-success my-1'} onClick={handleAmbulance}>Book Ambulance</button>
                                {isSuccess &&
                                    <p className="ml-3 p-1 success-mgs text-success"><FontAwesomeIcon icon={faCheckCircle} />  Ambulance Booked Successfully.</p>

                                }
                            </div>

                        </div>
                    </div>
                }
            </div>

        </section>
    )
}