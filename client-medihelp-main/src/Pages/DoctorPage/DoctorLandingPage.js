import React, { useState } from 'react'
import SectionHeadline from '../../Components/SectionHeadline/SectionHeadline'
import doctorsData from '../../FakeData/DoctorsData'
import './DoctorLandingPage.css'

export default function DoctorLandingPage() {

    const [selectedDepts, setSelectedDepts] = useState('Neurology')
    const selectedDept = doctorsData.filter(doctors => doctors.dept === selectedDepts)
    const selectedDocts = selectedDept[0].doctors


    return (
        <section className="mt-5 px-4 py-5 doctor-landingPage" id="doctors">
            <SectionHeadline headline="Our Doctor's" />
            <div class="">
                <nav className='py-3'>
                    <h3 className="text-secondary text-center">Departments</h3>
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


                    <div className='text-center mt-4 row d-flex justify-content-center'>
                    {
                        selectedDocts.map((doctor) => 
                                <div class="col-lg-4 col-sm-8 col-md-5 row m-4 doctor-card">
                                    <div className="col-lg-5 p-1">
                                        <img src={doctor.photo} className=" w-100 h-100" alt="doctor" />
                                    </div>
                                    <div className="col-lg-5 py-2">
                                        <h4 className='pt-3'>{doctor.name}</h4>
                                        <h6>{doctor.degree}</h6>
                                        <h5 className='pt-2'># {doctor.dept}</h5>
                                    </div>
                                
                            
                        </div>)
                    }
                    </div>

              

            </div>

        </section >
    )
}


