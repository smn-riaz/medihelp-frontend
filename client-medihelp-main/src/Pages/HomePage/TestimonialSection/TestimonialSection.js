import React from 'react'
import { Link } from 'react-router-dom';
import './TestimonialSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter } from '@fortawesome/free-brands-svg-icons';
import './TestimonialSection.css'
import SectionHeadline from '../../../Components/SectionHeadline/SectionHeadline';
import Slide from 'react-reveal/Slide';


export default function TestimonialSection() {
    return (
        <section className="mt-5 p-5 testimonial-section" id="testimonial">
            <Slide bottom>
            <SectionHeadline headline="Our Patient's Say" />
            <div className='row d-flex justify-content-around px-3 py-4 mt-5'>
                <div className="col-lg-6  p-3 row patient-card">
                    <div className="col-lg-3 text-center p-2">
                        <img src="https://i.ibb.co/R6cYnx6/patient1.jpg" height=" 120" width=" 120" className="  rounded-circle" alt="Ray Lin" />
                    </div>
                    <div className="col-lg-8 p-2">
                        <h3>Ray Lin</h3><hr />
                        <p><strong>"</strong> Dr. Tong is fantastic. I was in so much pain, and he not only prescribed pain med until I could have surgery in a few weeks. The surgery worked, and I am pain-free.<strong>"</strong></p>
                        <p><Link to="/"><FontAwesomeIcon className="fs-4" icon={faTwitter} /></Link></p>
                    </div>
                </div>
                <div className="col-lg-6  p-3 row patient-card">
                <div className="col-lg-3 text-center">
                        <img src="https://i.ibb.co/Y3wHZQ0/patient2.jpg" height=" 120" width=" 120" className="  rounded-circle" alt="Suya Jau" />
                    </div>
                    <div className="col-lg-8">
                        <h3>Suya Jau</h3><hr />
                        <p><strong>"</strong> I am very happy with Dr. John as my pain management Dr. He is always pleasant and professional. He always tried to do the right thing for me and couldn't be happier.<strong>"</strong></p>
                        <p><Link to="/"><FontAwesomeIcon icon={faTwitter} className="fs-4"/></Link></p>
                    </div>
                </div>
                <div className="col-lg-6  p-3 row patient-card ">
                <div className="col-lg-3 text-center">
                        <img src="https://i.ibb.co/ydjyFyc/patinet3.jpg" height=" 120" width=" 120" className="  rounded-circle" alt="Lina John" />
                    </div>
                    <div className="col-lg-8">
                        <h3>Lina John</h3><hr />
                        <p><strong>"</strong> Hello, my experience with Dr. David was great. I felt compassion and care from all involved. I was/am anxious about this, but I know the outcome will bring back a quality of life. A big thank you to all who were involved in my procedure.<strong>"</strong></p>
                        <p><Link to="/"><FontAwesomeIcon icon={faTwitter} className="fs-4"/></Link></p>
                    </div>
                </div>
            </div>
            </Slide>
        </section>
    )
}