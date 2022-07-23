import React, { createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DashboardLandingPage from "./Pages/DashboardPage/DashboardLandingPage/DashboardLandingPage";
import PatientRegistrationPage from "./Pages/DashboardPage/PatientRegistrationPage/PatientRegistrationPage";
import PatientRegistrationInfoPage from "./Pages/DashboardPage/PatientRegistrationInfoPage/PatientRegistrationInfoPage";
import StaffRegistrationPage from "./Pages/DashboardPage/StaffRegistrationPage/StaffRegistrationPage";
import LandingPage from "./Pages/HomePage/LandingPage/LandingPage";
import LoginLandingPage from './Pages/LoginPage/LoginLandingPage';
import NotFound from "./Pages/NotFoundPage/NotFound";
import StaffRegistrationInfoPage from "./Pages/DashboardPage/StaffRegistrationInfoPage/StaffRegistrationInfoPage";
import BookAppointmentPage from "./Pages/DashboardPage/BookAppointmentPage/BookAppointmentPage";
import SurgeryServicePage from "./Pages/ServicePages/SurgeryServicePage/SurgeryServicePage";
import NavbarSection from "./Pages/HomePage/NavbarSection/NavbarSection";
import DoctorServicePage from "./Pages/ServicePages/DoctorServicePage/DoctorServicePage";
import AmbulanceServicePage from "./Pages/ServicePages/AmbulanceServicePage/AmbulanceServicePage";
import EmergencyServicePage from "./Pages/ServicePages/EmergencyServicePage/EmergencyServicePage";
import HelplineServicePage from "./Pages/ServicePages/HelplineServicePage/HelplineServicePage";
import MedicineServicePage from "./Pages/ServicePages/MedicineServicePage/MedicineServicePage";
import PatientAdmitPage from "./Pages/DashboardPage/PatientAdmitPage/PatientAdmitPage";
import PatientAdmitInfoPage from "./Pages/DashboardPage/PatientAdmitInfoPage/PatientAdmitInfoPage";
import PrivateRoute from "./Pages/LoginPage/PrivateRoute";
import PatientPage from "./Pages/DashboardPage/PatientPage/PatientPage";
import AppointmentsPage from "./Pages/DashboardPage/AppointmentsPage/AppointmentsPage";
import BillRecordPage from "./Pages/DashboardPage/BillRecordPage/BillRecordPage";
import DoctorLandingPage from "./Pages/DoctorPage/DoctorLandingPage";

export const PatientInformationContext = createContext()

function App() {
   const [patientInformation, setPatientInformation] = useState({})
 
  // https://secure-scrubland-67511.herokuapp.com/
  return (
    <PatientInformationContext.Provider value={[patientInformation, setPatientInformation]}>
      <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/doctors" element={<><NavbarSection/><DoctorLandingPage /></>} />
        <Route path="/login" element={<><NavbarSection/><LoginLandingPage/></>} />

        <Route path="/profile" element={<PrivateRoute><PatientPage/></PrivateRoute>} />

        <Route path="/patientRegistrationInfo" element={<PrivateRoute><PatientRegistrationInfoPage /></PrivateRoute>} />
        <Route path="/staffRegistration" element={<PrivateRoute><StaffRegistrationPage/></PrivateRoute>} />
        <Route path="/staffRegistrationInfo" element={<PrivateRoute><StaffRegistrationInfoPage /></PrivateRoute>} />
        <Route path="/patientAdmitInfo" element={<PrivateRoute><PatientAdmitInfoPage /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardLandingPage/></PrivateRoute>} />
        <Route path="/appointments" element={<PrivateRoute><AppointmentsPage/></PrivateRoute>} />
        <Route path="/billRecord" element={<PrivateRoute><BillRecordPage/></PrivateRoute>} />
      
        <Route path="/patientAdmit" element={<PrivateRoute><PatientAdmitPage/></PrivateRoute>} />
        <Route path="/bookAppointment" element={<PrivateRoute><BookAppointmentPage /></PrivateRoute>} />
        
        <Route path="/patientRegistration" element={<PatientRegistrationPage/>} />

        <Route path="/surgeryService" element={<><NavbarSection/><SurgeryServicePage /></>} />
        <Route path="/doctorService" element={<><NavbarSection/><DoctorServicePage /></>} />
        <Route path="/ambulanceService" element={<><NavbarSection/><AmbulanceServicePage /></>} />
        <Route path="/emergencyService" element={<><NavbarSection/><EmergencyServicePage /></>} />
        <Route path="/helplineService" element={<><NavbarSection/><HelplineServicePage /></>} />
        <Route path="/medicineService" element={<><NavbarSection/><MedicineServicePage /></>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </PatientInformationContext.Provider>
  );
}

export default App;