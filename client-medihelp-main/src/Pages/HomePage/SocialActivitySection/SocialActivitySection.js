import React from 'react'
import './SocialActivitySection.css'
import SectionHeadline from '../../../Components/SectionHeadline/SectionHeadline'
import Button from '../../../Components/Button/Button'
import { HashLink } from 'react-router-hash-link'


export default function SocialActivitySection() {
    return (
        <section className="mt-5 py-5 " id="">
            <SectionHeadline headline="Social Activity" supText="Want to Join Our"/>
            <div className="row p-5 socialActivity-Section">
                <div className="col-lg-4">
                    <h3>As a Doctor:</h3>
                    <ul className="fs-5">
                        <li>Free Medical Treatment in Hospital</li>
                        <li>Free Medical Treatment per week in Rural Area</li>
                        <li>Free Medical Treatment in Our Monthly Medical Camp <strong>etc</strong>.</li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h3>As a General People:</h3>
                    <ul className="fs-5">
                        <li>Blood Donation</li>
                        <li>Eye Donation</li>
                        <li>Kidney Donation</li>
                        <li>Money Donation <strong>etc</strong>.</li>
                    </ul>
                </div>
                <div className=" col-lg-4 gy-5">
                <HashLink to='/#contactUs'><Button text="Join Our Activity" appointment="true"/></HashLink>
                </div>
            </div>


        </section>

    )
}