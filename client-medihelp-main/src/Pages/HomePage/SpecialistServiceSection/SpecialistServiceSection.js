import React from 'react'
import './SpecialistServiceSection.css'

export default function SpecialistServiceSection() {
    const services = [
        { service: "Brain & Nerves (Neurology)" },
        { service: "Cancer (Oncology)" },
        { service: "Bones (Orthopaedics)" },
        { service: "Children (Pediatrics)" },
        { service: "Ear, Nose & Throat (Otorhinolaryngology)" },
        { service: "Eyes (Ophthalmology)" },
        { service: "General Surgery" },
        { service: "Heart & Vascular (Cardiovascular)" },
        { service: "Hormone Disorder (Endocrinology)" },
        { service: "Kidneys (Renal Medicine)" },
        { service: "Lungs (Respiratory Medicine)" },
        { service: "Women (Obstetrics & Gynecology)" },
        { service: "Transplant & Cellular Therapy" }
    ]
    return (
        <section className="mt-5 p-2" id="">
        <h3 className="text-center pb-2">Our Specialist Doctors services :</h3>
            <div className="row special-container mt-4" id="services">
                <div className="col-lg-8 text-center specialContainer-left">
                    <img src="https://i.ibb.co/XZjRMd2/special.jpg" alt="special services" width="90%" height="80%" />
                </div>
                <div className="col-lg-4 specialContainer-right">
                    <div className='d-flex justify-content-center'>
                        <ul className="services-list">
                            {
                                services.map(service => <h5 className="px-4"><li className="special-services "> {service.service}</li></h5>)
                            }

                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}