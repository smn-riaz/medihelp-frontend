import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import './PatientRegistrationPage.css'
import { PatientInformationContext } from '../../../App';
import { useNavigate } from 'react-router';
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';


export default function PatientRegistrationPage({ registrationNotice }) {

    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }

    const onSubmit = data => {
        const patientData = {
            isPatient: true,
            patientName: data.patientName[0].toUpperCase() + data.patientName.substring(1),
            patientEmail: data.patientEmail,
            patientPassword: data.patientPassword,
            patientGender: data.patientGender[0].toUpperCase() + data.patientGender.substring(1),
            patientAge: data.patientAge,
            patientPhoneNumber: data.patientPhoneNumber,
            patientAddress: data.patientAddress[0].toUpperCase() + data.patientAddress.substring(1),
            patientDisease: data.patientDisease[0].toUpperCase() + data.patientDisease.substring(1),
            patientBloodGroup: data.patientBloodGroup,
            departmentName: '',
            doctorName: '',
            ambulanceDate: '',
            admitFormatDate: '',
            admitFloorNo: '',
            admitRoomNo: '',
            admitBedNo: '',
            appointmentFormatDate: '',
            appointmentTime:''
        };


        fetch("https://secure-scrubland-67511.herokuapp.com/registerPatient", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(patientData)
        })

            .then(result => {
                if (result) {
                    navigate('/login');
                }
            })
            .catch(err => {
                alert('Something happened wrong')
            })


    }


    return (
        <section className="patientRegistrationPage" >
            <div className="row">
                <div className='col-lg-2 col-md-3'><Sidebar /></div>
                <div className="col-lg-10 col-md-9 p-5 patientRegistrationPageContainer">
                    {
                        (!registrationNotice) && <h3 className='text-center p-3'>Patient Registration</h3>
                    }
                    {
                        (registrationNotice) && <h4 className='text-center p-2'>{registrationNotice}</h4>
                    }
                    <div className="contactMain-part row d-flex justify-content-center" >

                        <div className="col-lg-8 col-sm-10 contact-form p-4">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-group">

                                    <label for="patientName" className="w-100"><h6>Patient Name *: </h6>
                                        <input type="text" id="patientName" maxLength="20" {...register('patientName')} name="patientName" placeholder="" className="form-control m-2" required />
                                        {errors.patientName && <span className="text-danger">This field is required</span>}
                                    </label>


                                    <label for="patientEmail" className="w-100"><h6>E-mail *: </h6>
                                        <input type="email" id="patientEmail" maxLength="20" {...register('patientEmail')} name="patientEmail" placeholder="" className="form-control m-2" required />
                                        {errors.patientEmail && <span className="text-danger">This field is required</span>}
                                    </label>

                                    <label for="patientPassword" className="w-100"><h6>Password *: <small>(6-16 chars)</small></h6>
                                        <input type={(showPassword)? 'text': 'password'} id="patientPassword" maxLength="16" minLength="6"  {...register('patientPassword')} name="patientPassword" placeholder="" className="form-control m-2" required />
                                        {errors.patientEmail && <span className="text-danger">This field is required</span>}
                                        <input className='mb-4' type="checkbox" onClick={handleShowPassword} /> {(showPassword) ? 'hide password' : 'show password'}
                                    </label><br />
                                        
                                    

                                    <label for="" className=""><h6>Gender *: </h6>
                                        <input className='m-1' type="radio" id="male" name="patientGender" {...register('patientGender')} value="Male" /> <label for="male"> Male</label>
                                        <input className='m-1' type="radio" id="female" name="patientGender" {...register('patientGender')} value="Female" /> <label for="female"> Female</label>
                                        <input className='m-1' type="radio" id="other" name="patientGender" {...register('patientGender')} value="Other" /> <label for="Other"> Other</label>
                                        {errors.PatientGender && <span className="text-danger">This field is required</span>}
                                    </label><br />

                                    <label for="patientAge" className="w-100"><h6>Age *: </h6>
                                        <input type="number" id="patientAge" min='0' max="120" {...register('patientAge')} name="patientAge" placeholder="" className="form-control m-2" required />
                                        {errors.patientAge && <span className="text-danger">This field is required</span>}
                                    </label>

                                    <label for="patientPhoneNumber" className="w-100"><h6>Phone Number *: </h6>
                                        <input type="tel" pattern="[+]{1}[8]{2}[0]{1}[1]{1}[3,4,5,6,7,8,9]{1}[0-9]{8}" defaultValue="+8801" id="patientPhoneNumber"  {...register('patientPhoneNumber')} name="patientPhoneNumber" placeholder="" className="form-control m-2" required />
                                        {errors.patientAge && <span className="text-danger">This field is required</span>}
                                    </label>

                                    <label for="patientAddress" className="w-100"><h6>Address *: </h6>
                                        <input type="text" id="patientAddress" maxLength="25"  {...register('patientAddress')} name="patientAddress" placeholder="" className="form-control m-2" required />
                                        {errors.patientAge && <span className="text-danger">This field is required</span>}
                                    </label>

                                    <label for="patientDisease" className="w-100"><h6>Disease *: </h6>
                                        <input type="text" id="patientDisease" maxLength="20"  {...register('patientDisease')} name="patientDisease" placeholder="" className="form-control m-2" required />
                                        {errors.patientAge && <span className="text-danger">This field is required</span>}
                                    </label>


                                    <label for="patientBloodGroup"><h6>Blood group:
                                        <select id="patientBloodGroup" name="patientBloodGroup" {...register('patientBloodGroup')} >
                                            
                                            <option value="O+">O+</option>
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="AB+">AB+</option>
                                            <option value="O-">O-</option>
                                            <option value="A-">A-</option>
                                            <option value="B-">B-</option>
                                            <option value="AB-">AB-</option>
                                        </select></h6>
                                    </label>
                                </div>
                                <div className="form-group text-right">
                                    <button type='submit' className='button'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}