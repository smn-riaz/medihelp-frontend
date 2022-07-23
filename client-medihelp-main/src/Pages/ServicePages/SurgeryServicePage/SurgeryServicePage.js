import React from 'react'
import ServicePages from '../../../Components/ServicePages/ServicePages'
import './SurgeryServicePage.css'

export default function SurgeryServicePage() {

    return (
        <section className="mt-5 servicePageContainer">
            <ServicePages serviceName="Surgery Service" servicePhoto="https://i.ibb.co/fCpJ25m/surgery.png" specialLink="/registerPatient"/>
        </section>
    )
}