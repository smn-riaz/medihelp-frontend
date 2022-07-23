import React, { useContext, useState } from "react";
import SectionHeadline from "../../Components/SectionHeadline/SectionHeadline";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PatientInformationContext } from "../../App";

export default function LoginLandingPage() {
  const [patientInformation, setPatientInformation] = useContext(
    PatientInformationContext
  );
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const patientInfo = {
    isPatient: patientInformation.isPatient,
    patientWorkingSector: patientInformation.patientWorkingSector,
    patientId: patientInformation._id,
    patientName: patientInformation.patientName,
    patientEmail: patientInformation.patientEmail,
    patientGender: patientInformation.patientGender,
    patientAge: patientInformation.patientAge,
    patientPhoneNumber: patientInformation.patientPhoneNumber,
    patientAddress: patientInformation.patientAddress,
    patientDisease: patientInformation.patientDisease,
    patientBloodGroup: patientInformation.patientBloodGroup,
    admitDate: patientInformation.admitDate,
    admitFormatDate: patientInformation.admitFormatDate,
    admitLocalFormatDate: patientInformation.admitLocalFormatDate,
    admitFloorNo: patientInformation.admitFloorNo,
    admitRoomNo: patientInformation.admitRoomNo,
    admitBedNo: patientInformation.admitBedNo,
    appointmentDate: patientInformation.appointmentDate,
    appointmentFormatDate: patientInformation.appointmentFormatDate,
    appointmentLocalFormatDate: patientInformation.appointmentLocalFormatDate,
  };
  const [errorMessage, setErrorMessage] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  const setUserToken = () => {
    localStorage.setItem("patientInfo", JSON.stringify(patientInfo));
  };

  const onSubmit = (data) => {
    const loginData = {
      email: data.patientEmail,
      password: data.patientPassword,
    };

    fetch("https://secure-scrubland-67511.herokuapp.com/patientInformation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.patientEmail) {
          setPatientInformation(data);
          navigate("/profile");
        }
      })
      .catch((err) => setErrorMessage("Email or Password wrong"));
  };
  setUserToken();

  const patientLocalInfo = JSON.parse(localStorage.getItem("patientInfo"));
  const handleLocal = () => {
    if (!patientInformation.patientEmail && patientInfo.patientEmail) {
      setPatientInformation(patientLocalInfo);
    }
  };

  handleLocal();
  return (
    <section className="patientRegistrationPage mt-5 p-5">
      {!patientInformation.patientEmail && (
        <div className="contactMain-part row d-flex justify-content-center">
          <SectionHeadline headline="Sign in" />


          <div className="col-lg-3 col-md-6 col-sm-10 p-3">
            <h5>For testing: </h5>
            <div>
              <h6>
                <b>
                  <u>As an Admin*:</u>
                </b>
              </h6>
              <p>
                <b>email : </b> admin202@yahoo.com
              </p>
              <p>
                <b>password : </b> admin202@yahoo{" "}
              </p>
            </div>
            <div>
              <h6>
                <b>
                  <u>As a Patient*:</u>
                </b>
              </h6>
              <p>
                <b>email : </b> sahed@gmail.com
              </p>
              <p>
                <b>password : </b> sahed@gmail.com{" "}
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-10 contact-form p-4">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
              <div className="form-group">
                {errorMessage && (
                  <h5 className="text-center" style={{ color: "red" }}>
                    Email or password was wrong! Try again.
                  </h5>
                )}
                <label for="patientEmail" className="w-100">
                  <h6> Email: </h6>
                  <input
                    type="email"
                    id="patientEmail"
                    {...register("patientEmail")}
                    name="patientEmail"
                    placeholder=""
                    className="form-control m-2"
                    required
                  />
                  {errors.patientEmail && (
                    <span className="text-danger">This field is required</span>
                  )}
                </label>

                <label for="patientPassword" className="w-100">
                  <h6>Password: </h6>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="patientPassword"
                    {...register("patientPassword")}
                    name="patientPassword"
                    placeholder=""
                    className="form-control m-2"
                    required
                  />
                  {errors.patientPassword && (
                    <span className="text-danger">This field is required</span>
                  )}
                </label>

                <label for="showPassword">
                  <input type="checkbox" onClick={handleShowPassword} />{" "}
                  {showPassword ? "hide password" : "show password"}
                </label>
              </div>
              <div className="form-group text-right p-2">
                <button type="submit" className="button">
                  Submit
                </button>
                <h5 className="pt-4 font-weight-bold">
                  <small>
                    New to MediHelp website?{" "}
                    <Link className="text-dark" to="/patientRegistration">
                      Register Now.
                    </Link>
                  </small>
                </h5>
              </div>
            </form>
          </div>

         
        </div>
      )}
    </section>
  );
}
