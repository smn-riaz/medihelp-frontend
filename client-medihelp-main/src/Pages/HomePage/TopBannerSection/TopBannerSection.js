import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './TopBannerSection.css'
import Button from '../../../Components/Button/Button'
import ButtonStyle from '../../../Components/Button/ButtonStyle'
import { PatientInformationContext } from '../../../App'

export default function TopBannerSection() {
  const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
  return (
    <section className="topBanner-section" id="header">
      <div className='row text-center d-flex align-items-center justify-content-center'>
        <div className="col-lg-6">
          
            <img src="https://i.ibb.co/CzkBkdJ/banner.png" alt=" " width="100%" height="100%" />
          
        </div>
        <div className="col-lg-6 textDiv ">
          
            <h2 className="qto-sign p-4"> &#8220;He who has health has hope and he who has hope has everything&#8221;</h2>
            {
               (patientInformation.isPatient === false) ?
               <div></div>
               :
              <div className='p-2'>
                <p className='apntBtn py-1 px-2'><Link to='/bookAppointment'><Button text="GET APPOINTMENT" appointment="true" /></Link></p>
                <p className='apntBtn py-1 px-2'><Link to='/patientAdmit'><ButtonStyle text="ADMIT PATIENT" appointment="true" /></Link></p>
              </div>
            }
          
        </div>
      </div>
    </section>
  )
}