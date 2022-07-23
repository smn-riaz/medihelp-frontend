
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import SectionHeadline from '../SectionHeadline/SectionHeadline'
import './ServicePages.css'

export default function ServicePages({ serviceName, servicePhoto, specialLink }) {
    return (
        <section className="">
            <SectionHeadline headline={serviceName} />
           
            <div className='row px-5 py-1'>
                <div className="col-lg-6 px-5 py-2 text-center">
                    <img className='servicePhoto w-100 h-100' src={servicePhoto}  alt={serviceName} />
                </div>
                <div className="col-lg-6 px-5 py-2 my-auto text-center">
                    <h3>If you need <strong><i>{serviceName}</i></strong> </h3>
                    <h4>please contact here:</h4>
                    <h4><FontAwesomeIcon icon={faPhoneAlt} /> 017000000, 016000000</h4>
                    {
                        (specialLink) && <div>
                            <h6>or</h6>
                            <h5 className='p-3'><Link to={specialLink}><Button text="Visit Here" appointment="true" /></Link></h5>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}