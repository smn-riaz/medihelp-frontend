import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';
import './StaffRegistrationInfoPage.css'

export default function StaffRegistrationInfoPage() {
    const [registeredStaffs, setRegisteredStaffs] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://secure-scrubland-67511.herokuapp.com/registeredPatients')
            .then(res => res.json())
            .then(data => setRegisteredStaffs(data))
    }, [])
    const staffs = registeredStaffs.filter((patient) => patient.isPatient === false)

    function deletePatient(id) {
        if(id !== "61d8b5bb0b0663dfab299e52") {
            fetch(`https://secure-scrubland-67511.herokuapp.com/deletePatient/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                alert('Staff deleted Successfully');
             navigate('/dashboard')
            })
        }
    }


    return (
        <section className="staffRegistrationInfoPage" >
            <div className="row">
                <div className='col-lg-2 col-md-3'><Sidebar /></div>
                <div className="col-lg-10 col-md-9 p-4 staffRegistrationInfoPageContainer" >
                    <h3 className='text-center p-3'>Staff Registration Info</h3>
                    <div className="mt-5">
                        {(staffs.length > 0) && <div>

                            <h5 className="mb-3 text-center">Registered Staffs : <button className='circleStyle'>{staffs.length}</button></h5>
                            <table className="staffInfo-table table table-borderless delete-data container">
                                <thead>
                                    <tr className="table-header text-left ">
                                        <th className="" scope="col">Staff Name</th>
                                        <th className="" scope="col">E-mail</th>
                                        <th className="" scope="col">Working Sector</th>
                                        <th className="" scope="col">Gender</th>
                                        <th className="" scope="col">Age</th>
                                        <th className="" scope="col">Phone</th>
                                        <th className="" scope="col">Address</th>
                                        <th className="" scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="doctorTbl-body">
                                    {
                                        staffs.map((staff, index) =>

                                            <tr className=" text-left border">
                                                <td>{staff.patientName}</td>
                                                <td>{staff.patientEmail}</td>
                                                <td>{staff.patientWorkingSector}</td>
                                                <td>{staff.patientGender}</td>
                                                <td>{staff.patientAge}</td>
                                                <td>{staff.patientPhoneNumber}</td>
                                                <td>{staff.patientAddress}</td>
                                                <td><button className="delete-btn" onClick={() => deletePatient(staff._id)}><FontAwesomeIcon  icon={faTrashAlt} /></button></td>
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
        </section>
    )
}
