
import './PatientAdmitPage.css'
import React, { useContext, useState } from 'react'
import Calendar from 'react-calendar';
import { useForm } from 'react-hook-form';
import PatientRegistrationPage from '../PatientRegistrationPage/PatientRegistrationPage'
import 'react-calendar/dist/Calendar.css';
import { PatientInformationContext } from '../../../App';
import { useNavigate } from 'react-router';
import Sidebar from '../../../Components/Dashboad/Sidebar/Sidebar';

export default function PatientAdmitPage() {
    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
   
    const navigate = useNavigate()
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))
    const {  handleSubmit, formState: { errors } } = useForm();
    const [value, onChange] = useState(new Date());
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatDate = `${value.getDate()} ${month[value.getMonth()]} ${value.getFullYear()}`;


    const floorsNo = ['2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th'];
    const roomsNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const bedsNo = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K']
    const floorNo = floorsNo[Math.floor(Math.random() * floorsNo.length)];
    const roomNo = roomsNo[Math.floor(Math.random() * roomsNo.length)];
    const bedNo = bedsNo[Math.floor(Math.random() * bedsNo.length)];

    const onSubmit = (data) => {
        const patientAdmitData = {
            admitDate: value,
            admitFormatDate: formatDate,
            admitLocalFormatDate: value.toLocaleDateString(),
            admitFloorNo: floorNo,
            admitRoomNo: roomNo,
            admitBedNo: bedNo,
            _id: patientInformation._id,
            patientDisease: data.patientDisease
        };

        fetch("https://secure-scrubland-67511.herokuapp.com/admitUpdate", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(patientAdmitData)
        })
            .then(res => res.json())
            .then(result => {
               if(result) {
                navigate('/profile')

               }
            })
            .catch(err =>
                alert('Something wrong, please try again')
            )
    };



    return (
        <section className="patientAdmitPage" >
            {
                ((patientInformation.patientEmail || patientInfo.patientEmail) && (patientInformation.isPatient === true || patientInfo.isPatient === true)) ?
                    <div className="row">
                        <div className='col-lg-2 col-md-3'><Sidebar /></div>

                        <div className="col-lg-10 col-md-9 p-4 patientAdmitPageContainer" >
                            {
                                (!patientInformation.floorNo || !patientInfo.floorNo) ?
                                    <div>
                                        <h3 className='text-center p-3'>Patient Admit</h3>
                                        <div className="contactMain-part row p-3" >

                                            <div className="col-lg-6 calender p-5 mx-auto">
                                                <h5 className='text-center'>Please select a date:</h5>
                                                <Calendar
                                                    onChange={onChange}
                                                    value={value}
                                                    minDate={new Date()}
                                                />
                                            </div>

                                            <div className="col-lg-6 px-5 contact-form py-2 mx-auto">
                                                <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                                                    <h4 className='text-center py-3'>Admit from: <span className='appointDate'>{formatDate}</span></h4>
                                                    {(patientInformation.formatDate || patientInfo.formatDate) &&
                                                        <h4 className='text-center px-1 pb-3'>Last admitted : <span className='appointDate'>{patientInformation.formatDate || patientInfo.formatDate}</span></h4>
                                                    }
                                                    <div className="form-group">

                                                        <label for="patientName" className="w-100"><h6>Patient Name: </h6>
                                                            <input type="text" id="patientName" value={patientInformation.patientName || patientInfo.patientName} name="patientName" placeholder="" className="form-control m-2" required />
                                                            {errors.patientName && <span className="text-danger">This field is required</span>}
                                                        </label>


                                                        <label for="patientEmail" className="w-100"><h6>Patient Email: </h6>
                                                            <input type="email" id="patientEmail" value={patientInformation.patientEmail || patientInfo.patientEmail} name="patientEmail" placeholder="" className="form-control m-2" required />
                                                            {errors.patientEmail && <span className="text-danger">This field is required</span>}
                                                        </label>

                                                        <label for="patientGender" className="w-100"><h6>Gender: </h6>

                                                            <input type="text" id="patientGender" value={patientInformation.patientGender || patientInfo.patientGender} name="patientGender" placeholder="" className="form-control m-2" required />
                                                            {errors.patientGender && <span className="text-danger">This field is required</span>}
                                                        </label><br />

                                                        <label for="patientAge" className="w-100"><h6>Age: </h6>
                                                            <input type="number" id="patientAge" value={patientInformation.patientAge || patientInfo.patientAge} name="patientAge" placeholder="" className="form-control m-2" required />
                                                            {errors.patientAge && <span className="text-danger">This field is required</span>}
                                                        </label>


                                                        <label for="patientDisease" className="w-100"><h6>Disease: </h6>
                                                            <input type="text" id="patientDisease" value={patientInformation.patientDisease || patientInfo.patientDisease} name="patientDisease" placeholder="" className="form-control m-2" required />
                                                            {errors.patientAge && <span className="text-danger">This field is required</span>}
                                                        </label>
                                                    </div>
                                                    <div className="form-group text-center">
                                                        <button type="submit" className='button w-100'>Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div className="bookedInfo">
                                        <h3 className='text-center p-3'>Booked seat Information</h3>
                                        <form autoComplete="on">
                                            <h4 className='text-center p-5'>Dear <strong>{patientInformation.patientName || patientInfo.patientName}</strong>, your seat booked successfully from <span className='appointDate'>{formatDate}</span></h4>
                                            <div className="form-group text-center">
                                                <h4 className='text-secondary'>Your seat location: </h4>
                                                <div className='p-3 '>
                                                    <button type='button' className='btn btn-primary w-25 fs-4'>{patientInformation.floorNo || patientInfo.floorNo} Floor</button>
                                                </div>
                                                <div className='p-3 '>
                                                    <button type='button' className='btn btn-info w-25 fs-4'>Room No. {patientInformation.roomNo || patientInfo.roomNo}</button>
                                                </div>
                                                <div className='p-3 '>
                                                    <button type='button' className='btn btn-warning w-25 fs-4'>Bed No. {patientInformation.bedNo || patientInfo.bedNo}</button>
                                                </div>
                                                <div>
                                                    <h5>MediHelp Hospital, Dhaka, Bangladesh.</h5>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                            }
                        </div>
                    </div>
                    :
                    <div>
                        <PatientRegistrationPage registrationNotice="Please, register first to Admit Patient." />
                    </div>
            }
        </section >
    )
}