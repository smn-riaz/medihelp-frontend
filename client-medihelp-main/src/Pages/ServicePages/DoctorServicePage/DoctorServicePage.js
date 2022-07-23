import React from 'react'
import ServicePages from '../../../Components/ServicePages/ServicePages'

export default function DoctorServicePage() {
    return (
        <section className="mt-5 servicePageContainer">
            <ServicePages serviceName="Doctor Service" servicePhoto="https://i.ibb.co/x2Zqggv/doctor.png" specialLink="/doctors"/>
        </section>
    )
}