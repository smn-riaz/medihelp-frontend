import React from 'react'
import ServicePages from '../../../Components/ServicePages/ServicePages'

export default function EmergencyServicePage() {
    const emergencyContact = [
        {
            image: 'https://img.icons8.com/color/60/000000/whatsapp--v1.png',
            link: 'https://wa.me/+8801799999999',
            name: 'WhatsApp'
        },
        // {
        //     image: 'https://img.icons8.com/fluency/60/000000/facebook-messenger--v2.png',
        //     link: 'https://wa.me/+8801799999999',
        //     name: 'Messenger'
        // },
        {
            image: 'https://img.icons8.com/color/60/000000/telegram-app--v1.png',
            link: 'https://t.me/medihelp77',
            name: 'Telegram'
        },
        {
            image: 'https://img.icons8.com/color/60/000000/skype--v1.png',
            link: 'skype:medihelp77?call',
            name: 'Skype'
        },
        {
            image: 'https://img.icons8.com/color/60/000000/zoom.png',
            link: 'tel:+8801700000000',
            name: 'Zoom'
        },
        {
            image: 'https://img.icons8.com/color/60/000000/google-meet.png',
            link: 'tel:+8801700000000',
            name: 'Google Meet'
        },
    ]
    return (
        <section className="mt-5 servicePageContainer">
            <ServicePages serviceName="Emergency Service" servicePhoto="https://i.ibb.co/4j68xF5/247.png" specialLink="" />

            <div className="row d-flex justify-content-center">
                {
                    emergencyContact.map(contact => <div className="col-lg-2">
                    <a href={contact.link} target="_blank" rel="noreferrer"><img src={contact.image} alt={contact.name} /></a>
                </div>)
                    
                }
            </div>
        </section>
    )
}