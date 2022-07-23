import React from 'react';
import { Link } from 'react-router-dom'
import SectionHeadline from '../../../Components/SectionHeadline/SectionHeadline';
import './ServiceSection.css'

export default function ServiceSection() {

    const services = [
        {
            serviceName:'Emergency Service',
            image:'https://i.ibb.co/V3xSjSg/247.png',
            serviceLink:'/emergencyService'
        },
        {
            serviceName:'Ambulance Service',
            image:'https://i.ibb.co/r5rpbQn/ambulance.png',
            serviceLink:'/ambulanceService'
        },
        {
            serviceName:'Doctor Service',
            image:'https://i.ibb.co/x2Zqggv/doctor.png',
            serviceLink:'/doctorService'
        },
       
        {
            serviceName:'Medicine Service',
            image:'https://i.ibb.co/yP8hZDW/medicine.png',
            serviceLink:'/medicineService'
        },
        
        {
            serviceName:'Helpline Service',
            image:'https://i.ibb.co/t2rhJcc/helpline.png',
            serviceLink:' '
        },
        {
            serviceName:'Surgery Service',
            image:'https://i.ibb.co/82Sktf2/surgery.png',
            serviceLink:''
        },
    ]

    return (
        <section className="service-section" id="services">
            <SectionHeadline headline="Services" />
            <div className="row">
                <h3 className="text-center py-2">Always we are ready to provide you</h3>
                    {
                        services.map(service =>
                        <div className="col-lg-4 px-1 service-box text-center py-5 col-md-6 col-sm-6">
                        <Link className="text-decoration-none text-dark" to={service.serviceLink}>
                            <h4 className="font-weight-bold">{service.serviceName}</h4>
                            <img className="service-image p-1 m-1" src={service.image} height="120" width="120" alt=" " />
                           
                        </Link>
                        </div>)
                    }
            </div>
        </section>
    )
}

