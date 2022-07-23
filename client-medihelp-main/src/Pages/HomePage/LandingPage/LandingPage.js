import React, { useEffect, useState } from 'react'
import ContactSection from '../ContactSection/ContactSection'
import DoctorSection from '../DoctorSection/DoctorSection'
import FooterSection from '../FooterSection/FooterSection'
import NavbarSection from '../NavbarSection/NavbarSection'
import PremiumServicesSection from '../PremiumServicesSection/PremiumServicesSection'
import ServiceSection from '../ServiceSection/ServiceSection'
import SocialActivitySection from '../SocialActivitySection/SocialActivitySection'
import SpecialistServiceSection from '../SpecialistServiceSection/SpecialistServiceSection'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import TopBannerSection from '../TopBannerSection/TopBannerSection'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <section className="landingPage">
            <div className='topPart'>
                <div className="navSection">
                    <NavbarSection />
                </div>
                <div className="bannerSection">
                    <TopBannerSection />
                </div>
            </div>
            <div className="serviceSection">
                <ServiceSection />
            </div>
            <div className="">
                <SpecialistServiceSection />
            </div>
            <div className="">
                <DoctorSection />
            </div>
            <div className="">
                <SocialActivitySection />
            </div>
            <div className="">
                <TestimonialSection />
            </div>
            <div className="">
                <PremiumServicesSection />
            </div>
            <div className="">
                <ContactSection />
            </div>
            <div className="">
                <FooterSection />
            </div>
        </section>
    )
}