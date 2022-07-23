import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';
import './AppointmentsPage.css'

export default function AppointmentsPage() {



    const [patients, setPatients] = useState([])
    const [appointmentsList, setAppointmentsList] = useState([])

    useEffect(() => {
        fetch('https://secure-scrubland-67511.herokuapp.com/registeredPatients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])

    useEffect(() => {
        fetch('https://secure-scrubland-67511.herokuapp.com/registeredPatients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])

    const appointments = patients.filter((patient) => patient.appointmentFormatDate !== "")


    return (
        <section className="appointmentsPage" >
            <div className='row'>
                <div className='col-lg-2 col-md-3'><Sidebar /></div>

                <div className="col-lg-10 row col-md-9 p-4 appointmentsPageContainer" >
                    <div>
                        <h3 className='text-center p-3'>View Appointments</h3>
                        {(appointments.length > 0) ?
                        <div> <h4 className='text-center p-3'>Available appointment: <button className='circleStyle'> {appointments.length}</button></h4>
                            <table className="patientInfo-table table table-borderless delete-data container">
                                <thead>
                                    <tr className="table-header border ">
                                        <th className="" scope="col">Patient Name</th>
                                        <th className="" scope="col">Email</th>
                                        <th className="" scope="col">Phone</th>
                                        <th className="" scope="col">Appointment Date</th>
                                        <th className="" scope="col">Doctor</th>
                                        <th className="" scope="col">Dept.</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        appointments.map((patient, index) =>

                                            <tr className="border">
                                                <td>{patient.patientName}</td>
                                                <td>{patient.patientEmail}</td>
                                                <td>{patient.patientPhoneNumber}</td>
                                                <td>{patient.appointmentFormatDate}</td>
                                                <td>{patient.doctorName}</td>
                                                <td>{patient.departmentName}</td>
                                            </tr>

                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                        :

                        <div> <h4 className='text-center p-3'>No Appointment available</h4></div>
                                }
                    </div>

                </div>


            </div>

            <div>

            </div>

        </section>
    )
}

//  {(appointments.length > 0) ?