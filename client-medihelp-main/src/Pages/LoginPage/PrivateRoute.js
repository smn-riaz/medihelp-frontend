import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { PatientInformationContext } from '../../App';

export default function PrivateRoute({ children }) {
  
    const [patientInformation, setPatientInformation] = useContext(PatientInformationContext)
    
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'))
    return ((patientInformation.patientEmail)) ? children : <Navigate to="/login" />;
  }