import React from 'react'
import './DoctorSection.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from '../../../Components/Button/Button'
import { Link } from 'react-router-dom'
import SectionHeadline from '../../../Components/SectionHeadline/SectionHeadline';

export default function DoctorSection() {
    const doctorsPoster = ['https://i.ibb.co/pZ2TP7n/doctor1.jpg', 'https://i.ibb.co/6BSjKPw/doctor2.jpg', 'https://i.ibb.co/D44XTtn/doctor3.jpg', 'https://i.ibb.co/MVHqCXL/doctor4.jpg', 'https://i.ibb.co/GvhKy0x/doctor5.jpg']
    return (
        <section className="mt-2 px-4 py-2 doctor-section">
            <SectionHeadline headline="Our Doctors" />
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <Carousel >
                        {
                            doctorsPoster.map(doctorPoster => <div>
                                <img src={doctorPoster} alt="Doctor's Bio" />
                            </div>)
                        }
                    </Carousel>
                    <div className="d-flex justify-content-end pb-3"><Link to='/doctors'><Button text="More DOCTOR's" title="Click to see the Doctors" appointment="true"/></Link></div>
                </div>
            </div>
        </section>
    )
}