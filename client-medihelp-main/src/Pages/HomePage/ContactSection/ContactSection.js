import React from 'react'
import './ContactSection.css'
import emailjs from 'emailjs-com';
import Button from '../../../Components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import SectionHeadline from '../../../Components/SectionHeadline/SectionHeadline';

export default function ContactSection() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_fvs637j', 'template_ly8fru8', e.target, 'user_49awXJo2E6GemxwSwLUev')
            .then((result) => {
                alert("Message sent successfully!");
            }, (error) => {
            });
        e.target.reset()
    }


    
    return (
        <section className="px-4 messageUs-container" id="contactUs">
           
            <div className="contactMain-part row d-flex py-5 px-2 my-3 justify-content-center" >
            <SectionHeadline headline="Contact us" />
                <div className="col-lg-6 col-sm-12 contact-form p-4">
                    <form autoComplete autoCorrect onSubmit={sendEmail}>

                        <div className="row p-2">
                            <div className="col-lg-6 col-sm-12 fs-5"><FontAwesomeIcon icon={faEnvelope} /> medihelp@gmail.com</div>
                            <div className="col-lg-6 col-sm-12 fs-5"><FontAwesomeIcon icon={faPhoneAlt} /> 0000000000</div>
                        </div>
                        <div className="separator fs-4">or</div>
                        <label for="exampleFormControlInput1" class="form-label">Name* : </label>
                        <input type="text" name="user_name" class="form-control " id="exampleFormControlInput1" placeholder="John Doe" required />
                        <label for="exampleFormControlInput2" class="form-label">Email* : </label>
                        <input type="email" name="user_email" class="form-control" id="exampleFormControlInput2" placeholder="example@yahoo.com" required />
                        <label for="exampleFormControlInput2" class="form-label">Phone : </label>
                        <input type="tel" pattern="[0]{1}[1]{1}[3,4,6,7,8,9]{1}[0-9]{8}" defaultValue="01" name="phone" class="form-control" id="exampleFormControlInput2" placeholder="01**********" />
                        <label for="exampleFormControlTextarea1" class="form-label">Message* : </label>
                        <textarea name="message" class="form-control " id="exampleFormControlTextarea1" placeholder="..." rows="3" required></textarea>
                        <div className="py-2">
                            <Button text="Submit" />
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}