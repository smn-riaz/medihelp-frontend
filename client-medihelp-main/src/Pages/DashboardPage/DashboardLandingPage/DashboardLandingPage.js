import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PatientInformationContext } from '../../../App'
import ButtonStyle from '../../../Components/Button/ButtonStyle'
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar'
import NotFound from '../../NotFoundPage/NotFound'
import './DashboardLandingPage.css'

export default function DashboardLandingPage() {

    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const [people, setPeople] = useState([])
    useEffect(() => {
        fetch('https://secure-scrubland-67511.herokuapp.com/registeredPatients')
            .then(res => res.json())
            .then(data => setPeople(data))
    }, [])
    const appointments = people.filter((patient) => patient.appointmentFormatDate !== "")
    const admittedPatients = people.filter((patient) => patient.admitFloorNo !== "")
    const staffs = people.filter((patient) => patient.isPatient === false)
    const patients = people.filter((patient) => patient.isPatient === true)
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))
    return (
        <section className="dashboardLandingPage" >
            {
                (patientInformation.patientEmail || patientInfo.patientEmail)?
                <div className="row">
                <div className='col-lg-2 col-md-3'><Sidebar /></div>
                <div className="col-lg-10 col-md-9 dashboardLandingPageContainer" >
                    <h3 className='text-center p-3'>Dashboard</h3>
                    <div className="row d-flex justify-content-center">
                    <div className="col-lg-3 col-md-6 fs-6 col-sm-8 p-3">
                            <ul className='list-group list-unstyled'>
                                <li className=' list-group-item list-group-item-warning text-left text-dark'><span className='fs-5'>Total  Patient:</span> <strong><button className='circleStyle'>{patients.length}</button></strong><hr />
                                {
                                    (patients.length > 0) && 
                                    <ul className='list-group list-unstyled'>
                                <table className="table table-borderless  ">
                                <thead>
                                    <tr className="table-header ">
                                        <th className="" scope="col">#</th> 
                                        <th className="" scope="col">Email</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        patients.map((patient, index) =>

                                            <tr className="">
                                                <td>{index+1}</td>
                                                <td>{patient.patientEmail}</td>
                                            </tr>

                                        )
                                    }
                                </tbody>

                            </table>
                            <div className='d-flex justify-content-end'><p className='apntBtn '><Link to='/patientRegistrationInfo'><ButtonStyle text="More" appointment="true" /></Link></p></div>
                                </ul>
                                }
                                </li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 fs-6 col-sm-8 p-3">
                            <ul className='list-group list-unstyled'>
                                <li className=' list-group-item list-group-item-danger text-left text-dark'><span className='fs-5'>Total  Admitted:</span> <strong><button className='circleStyle'>{admittedPatients.length}</button></strong><hr />
                                {
                                    (admittedPatients.length > 0) &&
                                    <ul className='list-group list-unstyled'>
                                <table className="table table-borderless  ">
                                <thead>
                                    <tr className="table-header">
                                        <th className="" scope="col">#</th> 
                                        <th className="" scope="col">Email</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        admittedPatients.map((patient, index) =>

                                            <tr className="">
                                                <td>{index+1}</td>
                                                <td>{patient.patientEmail}</td>
                                            </tr>

                                        )
                                    }
                                </tbody>

                            </table>
                            <div className='d-flex justify-content-end'><p className='apntBtn '><Link to='/patientAdmitInfo'><ButtonStyle text="More" appointment="true" /></Link></p></div>
                                </ul>
                                }
                                </li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 fs-6 col-sm-8 p-3">
                            <ul className='list-group list-unstyled'>
                                <li className=' list-group-item list-group-item-primary text-left text-dark'><span className='fs-5'>Total  Appointment:</span> <strong><button className='circleStyle'>{appointments.length}</button></strong><hr />
                                {
                                    (appointments.length > 0 ) &&
                                    <ul className='list-group list-unstyled'>
                                <table className="table table-borderless  ">
                                <thead>
                                    <tr className="table-header">
                                        <th className="" scope="col">#</th> 
                                        <th className="" scope="col">Email</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        appointments.map((patient, index) =>

                                            <tr className="">
                                                <td>{index+1}</td>
                                                <td>{patient.patientEmail}</td>
                                            </tr>

                                        )
                                    }
                                </tbody>

                            </table>
                            <div className='d-flex justify-content-end'><p className='apntBtn '><Link to='/appointments'><ButtonStyle text="More" appointment="true" /></Link></p></div>
                                </ul>
                                }
                                </li>
                            </ul>
                        </div>

                        
                        <div className="col-lg-3 col-md-6 fs-6 col-sm-8 p-3">
                            <ul className='list-group list-unstyled'>
                                <li className=' list-group-item list-group-item-secondary text-left text-dark'><span className='fs-5'>Total  Staff:</span> <strong><button className='circleStyle'>{staffs.length}</button></strong><hr />
                               {
                                   (staffs.length > 0 ) && 
                                   <ul className='list-group list-unstyled'>
                                   <table className="table table-borderless  ">
                                   <thead>
                                       <tr className="table-header">
                                           <th className="" scope="col">#</th> 
                                           <th className="" scope="col">Email</th> 
                                       </tr>
                                   </thead>
                                   <tbody>
                                       {
                                           staffs.map((staff, index) =>
   
                                               <tr className="">
                                                   <td>{index+1}</td>
                                                   <td>{staff.patientEmail}</td>
                                               </tr>
   
                                           )
                                       }
                                   </tbody>
   
                               </table>
                               <div className='d-flex justify-content-end'><p className='apntBtn '><Link to='/staffRegistrationInfo'><ButtonStyle text="More" appointment="true" /></Link></p></div>
                                   </ul>
                               }
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            :
            <NotFound />
            }
        </section>
    )
}