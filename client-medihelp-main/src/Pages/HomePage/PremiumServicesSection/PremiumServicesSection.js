import React from 'react'
import SectionHeadline from '../../../Components/SectionHeadline/SectionHeadline'
import './PremiumServicesSection.css'


export default function PremiumServicesSection() {
    return (
        <section className="px-2 mt-2 premiumService-section" id="services">
            <SectionHeadline headline="Our Premium Services" />
            <div className="d-flex pb-5 p-2 justify-content-around row">
           
                <div className="col-lg-4 col-md-6 m-1 service-card ">
                        <h3 className="text-center p-3 service-headline">Primary</h3>
                        <img src="https://i.ibb.co/kJQb7CQ/psvc1.jpg" className="service-img" alt="service" />
                        <h4 className="text-center mt-4"><small className="fs-6"><sub>only</sub></small>$39<small className="fs-6"><sub>/ 3 months</sub></small></h4>
                        <p className="p-2  description-text">
                            <ul>
                                <li>Regular Health Tips Message.</li>
                                <li>Monthly meet your Doctor in Phone Call.</li>
                                <li>A Physical Check up in 3 months etc.</li>
                            </ul>
                        </p>
                </div>
                <div className="col-lg-4 col-md-6 m-1 service-card ">
                    <h3 className="text-center p-3 service-headline">Secondary</h3>
                    <img src="https://i.ibb.co/jDp09s1/psvc2.jpg" className="service-img" alt="service" />
                    <h4 className="text-center mt-4"><small className="fs-6"><sub>only</sub></small>$69<small className="fs-6"><sub>/ 3 months</sub></small></h4>
                    <p className="p-2  description-text">
                        <ul>
                            <li>Regular Health Tips Message.</li>
                            <li>Every week meet your Doctor in Phone Call.</li>
                            <li>A monthly Physical Check up etc.</li>
                        </ul>
                    </p>
                </div>
                <div className="col-lg-4 col-md-6 m-1 service-card ">
                        <h3 className="text-center p-3 service-headline">Standard</h3>
                        <img src="https://i.ibb.co/WK70kn0/psvc3.jpg" className="service-img" alt="service" />
                        <h4 className="text-center mt-4"><small className="fs-6"><sub>only</sub></small>$99<small className="fs-6"><sub>/ 3 months</sub></small></h4>
                        <p className="p-2  description-text">
                            <ul>
                                <li>Regular Health Tips & Food menu on your phone.</li>
                                <li>Every week meet your Doctor in Video Call.</li>
                                <li>2 times/Month Physical Check up etc.</li>
                            </ul>
                        </p>
                </div>
            </div>
        </section>
    )
}