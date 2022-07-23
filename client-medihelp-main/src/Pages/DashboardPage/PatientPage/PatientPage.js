import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PatientInformationContext } from '../../../App'
import Button from '../../../Components/Button/Button'
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar'
import NotFound from '../../NotFoundPage/NotFound'
import human from '../../../Assets/human.png'
import './PatientPage.css'
import ButtonStyle from '../../../Components/Button/ButtonStyle'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal/lib/components/Modal'

export default function PatientPage() {

    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    const findData = {
        email: patientInformation.patientEmail,
        password: patientInformation.patientPassword
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointmentTime, setAppointmentTime] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const profileData = {
            _id: patientInformation._id,
            patientName: data.patientName[0].toUpperCase() + data.patientName.substring(1),
            patientEmail: data.patientEmail,
            patientPassword: data.patientPassword,
            patientGender: data.patientGender[0].toUpperCase() + data.patientGender.substring(1),
            patientAge: data.patientAge,
            patientPhoneNumber: data.patientPhoneNumber,
            patientAddress: data.patientAddress[0].toUpperCase() + data.patientAddress.substring(1),
            patientDisease: data.patientDisease[0].toUpperCase() + data.patientDisease.substring(1),
            patientBloodGroup: data.patientBloodGroup,
        };



        fetch("https://secure-scrubland-67511.herokuapp.com/profileUpdate", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profileData)
        })
            .then(res => res.json())
            .then(result => {
                result ? setModalIsOpen(false)
                    : alert("something went wrong");
            })
            setModalIsOpen(false)
    };

    function openModal() {
        setModalIsOpen(true);
        // const updateSingleDoctor = allDoctor.find(adm => adm._id === adId)
        // setUpdatedDoctor(updateSingleDoctor)

    }


    fetch("https://secure-scrubland-67511.herokuapp.com/patientInstantData", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(findData)
    })
        .then(res => res.json())
        .then(data => {
            if (data.patientEmail) {
                setPatientInformation(data)
            }
        })


        
        fetch("https://secure-scrubland-67511.herokuapp.com/findPatientAppointment", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                appointmentFormatDate: patientInformation.appointmentFormatDate,
                patientName: patientInformation.patientName,
                _id: patientInformation._id,
                doctorName: patientInformation.doctorName
            }
            )
        })

            .then(res => res.json())
            .then(data => {
                const indexAppointment = data.patients.findIndex(x => x._id === patientInformation._id);
                if(indexAppointment === 0) {
                    setAppointmentTime('7.00 pm')
                }
                else if(indexAppointment === 1) {
                    setAppointmentTime('7.15 pm')
                }
                else{
                    setAppointmentTime('7.30 pm')
                }
            })

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '90vh'
        }
    };
    var subtitle;
   

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        if(showPassword){
            setShowPassword(false)
        }
        else{
            setShowPassword(true)
        }
    }

    return (
        <section className="patientPage" >
            {
                (patientInformation.patientEmail) ?
                    <div className='row'>
                        <div className='col-lg-2 col-md-3'><Sidebar /></div>
                        <div className="col-lg-10 col-md-9 p-4 patientPageContainer" >
                            <h3 className="text-center p-3">Welcome <strong>{patientInformation.patientName}</strong> , you're here.</h3>


                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8 col-sm-12 bio-container p-4">
                                    <p className='text-center'><img src={human} height="20%" width="20%" alt={patientInformation.patientName} /></p>
                                    <h3 className='text-center font-weight-bold text-light'><strong>{patientInformation.patientName}</strong></h3>
                                    <div className="row d-flex justify-content-end">
                                        <div className="col-lg-6 col-md-6 col-sm-10">
                                            <ul className='list-group list-unstyled'>
                                               
                                                <li className='fs-5 p-2 m-1 list-group-item  text-left text-dark'>Age: <small><strong>{patientInformation.patientAge }</strong></small> </li>
                                                <li className='fs-5 p-1 m-1 list-group-item  text-left text-dark'>Gender:  <small><strong>{patientInformation.patientGender }</strong></small> </li>
                                                <li className='fs-5 p-1 m-1 list-group-item  text-left text-dark'>Blood group: <small><strong>{patientInformation.patientBloodGroup}</strong></small></li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-10">
                                            <ul className='list-group list-unstyled'>
                                                <li className='fs-5 p-1 m-1 list-group-item text-right text-dark'>Email:  <small><strong>{patientInformation.patientEmail}</strong></small> </li>
                                                <li className='fs-5 p-1 m-1 list-group-item  text-right text-dark'>Phone:  <small><strong>{patientInformation.patientPhoneNumber }</strong></small> </li>
                                                <li className='fs-5 p-1 m-1 list-group-item  text-right text-dark'>Address:  <small><strong>{patientInformation.patientAddress}</strong></small> </li>
                                            </ul>

                                        </div>
                                        <div className='text-center'> 
                                        {/* <button onClick={openModal} className="btn btn-secondary px-3 mt-2 shadow-lg"><strong>Update Profile</strong></button> */}
                                            <Modal
                                                isOpen={modalIsOpen}
                                                onRequestClose={() => {
                                                    setModalIsOpen(false)
                                                }}

                                                style={customStyles}
                                                contentLabel="Example Modal"
                                            >

                                                <div className="row d-flex justify-content-end">
                                                    <div className="col-10">
                                                        <h3 ref={_subtitle => (subtitle = _subtitle)}><span >Update Profile</span></h3>
                                                    </div>
                                                    <div className="col-2 ">

                                                    </div>
                                                </div><hr></hr>

                                                <div>

                                                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                                                            <div className="form-group">



                                                                <label for="patientName" className="w-100"><h6>Name : </h6>
                                                                    < input defaultValue={patientInformation.patientName} type="text" id="patientName" maxLength="20" {...register('patientName')} name="patientName" placeholder="" className="form-control m-2" required />
                                                                    {errors.patientName && <span className="text-danger">This field is required</span>}
                                                                </label>


                                                                <label for="patientEmail" className="w-100"><h6>E-mail : </h6>
                                                                    < input defaultValue={patientInformation.patientEmail} type="email" id="patientEmail" maxLength="20" {...register('patientEmail')} name="patientEmail" placeholder="" className="form-control m-2" required />
                                                                    {errors.patientEmail && <span className="text-danger">This field is required</span>}
                                                                </label>

                                                                <label for="patientPassword" className="w-100"><h6>Password : <small>(6-16 chars)</small></h6>
                                                                    < input defaultValue={patientInformation.patientPassword} type={(showPassword) ? 'text' : 'password'} id="patientPassword" maxLength="16" minLength="6"  {...register('patientPassword')} name="patientPassword" placeholder="" className="form-control m-2" required />
                                                                    {errors.patientEmail && <span className="text-danger">This field is required</span>}
                                                                    < input className='mb-4' type="checkbox" onClick={handleShowPassword} /> {(showPassword) ? 'hide password' : 'show password'}
                                                                </label><br />



                                                                <label for="" className=""><h6>Gender :  {patientInformation.patientGender}<small> (previous)</small></h6>
                                                                    < input className='m-1' type="radio" id="male" name="patientGender" {...register('patientGender')} value="Male" /> <label for="male"> Male</label>
                                                                    < input  className='m-1' type="radio" id="female" name="patientGender" {...register('patientGender')} value="Female" /> <label for="female"> Female</label>
                                                                    < input className='m-1' type="radio" id="other" name="patientGender" {...register('patientGender')} value="Other" /> <label for="Other"> Other</label>
                                                                    {errors.PatientGender && <span className="text-danger">This field is required</span>}
                                                                </label><br />

                                                                <label for="patientAge" className="w-100"><h6>Age : </h6>
                                                                    < input defaultValue={patientInformation.patientAge} type="number" id="patientAge" min='0' max="120" {...register('patientAge')} name="patientAge" placeholder="" className="form-control m-2" required />
                                                                    {errors.patientAge && <span className="text-danger">This field is required</span>}
                                                                </label>

                                                                <label for="patientPhoneNumber" className="w-100"><h6>Phone Number : </h6>
                                                                    < input defaultValue={patientInformation.patientPhoneNumber} type="tel" pattern="[0]{1}[1]{1}[3,4,6,7,8,9]{1}[0-9]{8}" id="patientPhoneNumber"  {...register('patientPhoneNumber')} name="patientPhoneNumber" placeholder="" className="form-control m-2" required />
                                                                    {errors.patientAge && <span className="text-danger">This field is required</span>}
                                                                </label>

                                                                <label for="patientAddress" className="w-100"><h6>Address : </h6>
                                                                    < input defaultValue={patientInformation.patientAddress} type="text" id="patientAddress" maxLength="25"  {...register('patientAddress')} name="patientAddress" placeholder="" className="form-control m-2" required />
                                                                    {errors.patientAddress && <span className="text-danger">This field is required</span>}
                                                                </label>

                                                                <label for="patientDisease" className="w-100"><h6>Disease : </h6>
                                                                    < input defaultValue={patientInformation.patientDisease} type="text" id="patientDisease" maxLength="20"  {...register('patientDisease')} name="patientDisease" placeholder="" className="form-control m-2" required />
                                                                    {errors.patientDisease && <span className="text-danger">This field is required</span>}
                                                                </label>


                                                                <label for="patientBloodGroup"><h6>Blood group:
                                                                    <select id="patientBloodGroup" name="patientBloodGroup" {...register('patientBloodGroup')} >
                                                                        <option>previous: {patientInformation.patientBloodGroup}</option>
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

                                                                <div className="form-group text-right">
                                                                    <button type="submit" className="btn btn-secondary m-2">Submit</button>
                                                                </div>
                                                                </div>
                                                        </form>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row p-2 pt-5 mx-auto d-flex justify-content-center">
                                {
                                    (patientInformation.admitFormatDate) &&
                                    <div className="col-lg-5 col-md-6 col-sm-9">
                                        <h4 className="text-center p-2">Hospital admit info.</h4>
                                        <ul className='list-group list-unstyled'>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-danger text-right text-dark'>Admit Date:  {patientInformation.admitFormatDate} </li>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-warning text-right text-dark'>Floor No:  {patientInformation.admitFloorNo } </li>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-success text-right text-dark'>Room No:  {patientInformation.admitRoomNo } </li>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-primary text-right text-dark'>Seat No:  {patientInformation.admitBedNo} </li>
                                        </ul>
                                    </div>

                                }

                                {
                                    (patientInformation.appointmentFormatDate ) &&
                                    <div className="col-lg-5 col-md-6 col-sm-9">
                                        <h4 className="text-center p-2">Appointment info.</h4>
                                        <ul className='list-group list-unstyled'>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-dark text-right text-dark'>Appointment date:  <strong>{patientInformation.appointmentFormatDate}</strong> </li>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-dark text-right text-dark'>Appointment time:  <strong>{appointmentTime}</strong> </li>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-dark text-right text-dark'>Doctor:  <strong>{patientInformation.doctorName }, <u>{patientInformation.departmentName }</u> </strong> </li>
                                            
                                        </ul>
                                    </div>
                                }


                                {
                                    (patientInformation.ambulanceDate ) &&
                                    <div className="col-lg-5 col-md-6 col-sm-9">
                                        <h4 className="text-center p-2">Ambulance Info</h4>
                                        <ul className='list-group list-unstyled'>
                                            <li className='fs-5 p-2 m-1 list-group-item list-group-item-dark text-right text-dark'>Booked Ambulance date:  <strong>{patientInformation.ambulanceDate}</strong> </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                            {
                                (patientInformation.isPatient) &&
                                <div className="d-flex justify-content-center">
                                    <p className='apntBtn p-3'><Link to='/patientAdmit'><Button text="ADMIT PATIENT" appointment="true" /></Link></p>
                                    <p className='apntBtn p-3'><Link to='/bookAppointment'><ButtonStyle text="GET APPOINTMENT" appointment="true" /></Link></p>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <NotFound />
            }
        </section>
    )
}