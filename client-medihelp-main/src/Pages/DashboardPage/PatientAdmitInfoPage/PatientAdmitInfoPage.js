import React, { useContext, useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { PatientInformationContext } from '../../../App';
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';
import NotFound from '../../NotFoundPage/NotFound';
import './PatientAdmitInfoPage.css'

export default function PatientAdmitInfoPage() {
    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))
    const [patients, setPatients] = useState([])
    useEffect(() => {
        fetch('https://secure-scrubland-67511.herokuapp.com/registeredPatients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])

    const admittedPatients = patients.filter((patient) => patient.admitFloorNo !== "")
    return (
        <section className="patientAdmitInfoPage" >
            {
                 (patientInformation.patientEmail || patientInfo.patientEmail)?
                <div className='row'>
                    <div className='col-lg-2 col-md-3'><Sidebar /></div>
                    <div className="col-lg-10 col-md-9 p-4 patientAdmitInfoPageContainer" >
                        <h3 className='text-center p-3'>Admitted Patients</h3>
                        {
                            (admittedPatients.length > 0) ?
                                <div>
                                    <h4 className='text-center p-3'>Total admitted : <button className='circleStyle'> {admittedPatients.length}</button></h4>
                                    <table className="patientInfo-table table table-borderless delete-data container">
                                        <thead>
                                            <tr className="table-header border ">
                                                <th className="" scope="col">Patient Name</th>
                                                <th className="" scope="col">Email</th>
                                                <th className="" scope="col">Phone</th>
                                                <th className="" scope="col">Admit Date</th>
                                                <th className="" scope="col">Seat Location</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                admittedPatients.map((patient, index) =>

                                                    <tr className="border">
                                                        <td>{patient.patientName}</td>
                                                        <td>{patient.patientEmail}</td>
                                                        <td>{patient.patientPhoneNumber}</td>
                                                        <td>{patient.admitFormatDate}</td>
                                                        <td>{patient.admitFloorNo} floor, room {patient.admitRoomNo}, bed {patient.admitBedNo}</td>

                                                    </tr>

                                                )
                                            }
                                        </tbody>

                                    </table>
                                </div>
                                :
                                <div>
                                    <h4 className='text-center p-3'>No patient admitted </h4>
                                </div>
                        }
                    </div>
                </div>
                 :
                 <NotFound />
            }

        </section>
    )
}