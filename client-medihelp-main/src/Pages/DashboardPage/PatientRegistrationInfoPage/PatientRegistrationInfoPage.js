import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import './PatientRegistrationInfoPage.css'
import { useNavigate } from 'react-router';
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';
import NotFound from '../../NotFoundPage/NotFound';
import { PatientInformationContext } from '../../../App';

export default function PatientRegistrationInfoPage() {
    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))
    const [registeredPatients, setRegisteredPatients] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://secure-scrubland-67511.herokuapp.com/registeredPatients')
            .then(res => res.json())
            .then(data => setRegisteredPatients(data))
    }, [])

    const patients = registeredPatients.filter((patient) => patient.isPatient === true)

    function deletePatient(id) {
        fetch(`https://secure-scrubland-67511.herokuapp.com/deletePatient/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert('Patient deleted Successfully');
                navigate('/dashboard')
            })
    }

    return (
        <section className="patientRegistrationInfoPage" >
            {
                 ((patientInformation.patientEmail || patientInfo.patientEmail)) ?
                <div className="row">
                    <div className='col-lg-2 col-md-3'><Sidebar /></div>
                    <div className="col-lg-10 col-md-9 p-4 patientRegistrationInfoPageContainer" >
                        <h3 className='text-center p-3'>Patient Registration Info</h3>
                        <div className="mt-5">
                            {(patients.length > 0) && <div>

                                <h5 className="mb-3 text-center">Registered Patient: <button className='circleStyle'>{patients.length}</button></h5>
                                <table className="patientInfo-table table table-borderless delete-data container">
                                    <thead>
                                        <tr className="table-header border text-left ">
                                            <th className="" scope="col">Patient Name</th>
                                            <th className="" scope="col">Email</th>
                                            <th className="" scope="col">Gender</th>
                                            <th className="" scope="col">Age</th>
                                            <th className="" scope="col">Phone</th>
                                            <th className="" scope="col">Address</th>
                                            <th className="" scope="col">Disease</th>
                                            <th className="" scope="col">Blood Group</th>
                                            <th className="" scope="col">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="doctorTbl-body">
                                        {
                                            patients.map((patient, index) =>

                                                <tr className=" text-left border">
                                                    <td>{patient.patientName}</td>
                                                    <td>{patient.patientEmail}</td>
                                                    <td>{patient.patientGender}</td>
                                                    <td>{patient.patientAge}</td>
                                                    <td>{patient.patientPhoneNumber}</td>
                                                    <td>{patient.patientAddress}</td>
                                                    <td>{patient.patientDisease}</td>
                                                    <td>{patient.patientBloodGroup}</td>
                                                    <td><button className="delete-btn" onClick={() => deletePatient(patient._id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                                                </tr>

                                            )
                                        }
                                    </tbody>

                                </table>

                            </div>
                            }

                        </div>
                    </div>
                </div>
:
            <NotFound />
           }
        </section>
    )
}