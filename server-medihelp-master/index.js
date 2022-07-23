const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId || require('bson');
require('dotenv').config()
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3p1eh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express()


app.use(bodyParser.json());
app.use(cors());

const port = 5050;

app.get('/', (req, res) => {
    res.send("Hello from Hospital Management Project")
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const patientsRegisteredCollection = client.db("mediHelp").collection("patientsRegistered");
    const doctorsAppointmentsCollection = client.db("mediHelp").collection("doctorsAppointments");


    app.post('/addDocAppointments', (req, res) => {
        const doctorsAppointments = req.body;
        doctorsAppointmentsCollection.updateOne(
            { doctorName: doctorsAppointments.doctorName, departmentName: doctorsAppointments.departmentName, appointmentFormatDate: doctorsAppointments.appointmentFormatDate },

            {
                $push: {
                    patients: {
                        $each: doctorsAppointments.patients,
                        $sort: {score: -1},
                        $slice: 3
                    }
                }
            },
            { upsert: true },
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send({ message: err })
                }
                else {
                    res.send(result);
                    console.log(result);
                }
            }
        );
        

          

    })


    app.post('/availablePatientAppointment', (req, res) => {
        const availablePatientAppointmentData = req.body;
        doctorsAppointmentsCollection.findOne(
            {appointmentFormatDate: availablePatientAppointmentData.appointmentFormatDate, doctorName: availablePatientAppointmentData.doctorName, function(err, result) {
                if (err) throw err;
                
              }}
        )
        .then(result => {
            res.send(result)
            // console.log(result);
        })
        .catch(err => {
                res.send(err)
            })
        
            
    })


    app.post('/findPatientAppointment', (req, res) => {
        const findPatientAppointmentData = req.body;
        doctorsAppointmentsCollection.findOne(
            {appointmentFormatDate: findPatientAppointmentData.appointmentFormatDate, doctorName: findPatientAppointmentData.doctorName},{patients: {$elemMatch: {patientName:findPatientAppointmentData.patientName, _id:findPatientAppointmentData._id}} ,function(err, result) {
                if (err) throw err;
                
              }}
        )
        .then(result => {
            res.send(result)
            console.log(result);
        })
        
            
    })




    app.post('/registerPatient', (req, res) => {
        const patient = req.body;
        // console.log(patient);
        patientsRegisteredCollection.insertOne(patient)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    })




    app.delete('/deletePatient/:id', (req, res) => {
        patientsRegisteredCollection.deleteOne({ _id: ObjectId(req.params.id) })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    })



    app.get('/registeredPatients', (req, res) => {
        patientsRegisteredCollection.find()
            .toArray((err, patients) => {
                res.send(patients)
                // console.log(patients);
            })
    })

    


    


    app.post('/patientInformation', (req, res) => {
        const patientInfo = req.body;
        patientsRegisteredCollection.findOne({ "patientEmail":  patientInfo.email, "patientPassword": patientInfo.password, function(err, result) {
          if (err) throw err;
          ;
        }})
            .then((result) => {
                res.send(result)
            })
    })


    app.post('/patientInstantData', (req, res) => {
        const instantInfo = req.body;
        patientsRegisteredCollection.findOne({
            "patientEmail": instantInfo.email, "patientPassword": instantInfo.password, function(err, result) {
                if (err) throw err;
                ;
            }
        })
            .then((result) => {
                res.send(result)
            })
    })


    app.post('/appointmentUpdate', (req, res) => {
        const appointmentData = req.body;
        patientsRegisteredCollection.updateOne(
            { _id: ObjectId(appointmentData._id) },
            {
                $set: { appointmentDate: appointmentData.appointmentDate, appointmentFormatDate: appointmentData.appointmentFormatDate, appointmentLocalFormatDate: appointmentData.appointmentLocalFormatDate, departmentName: appointmentData.departmentName, doctorName: appointmentData.doctorName },
                $currentDate: { "lastModified": true }
            },
            (err, result) => {
                if (err) {
                    // console.log(err);
                    res.status(500).send({ message: err })
                }
                else {
                    res.send(result);
                    // console.log(result);
                }
            }
        )
    })

    app.post('/admitUpdate', (req, res) => {
        const admitData = req.body;
        patientsRegisteredCollection.updateOne(
            { _id: ObjectId(admitData._id) },
            {
                $set: { admitDate: admitData.admitDate, admitFormatDate: admitData.admitFormatDate, admitLocalFormatDate: admitData.admitLocalFormatDate, admitFloorNo: admitData.admitFloorNo, admitRoomNo: admitData.admitRoomNo, admitBedNo: admitData.admitBedNo },
                $currentDate: { "lastModified": true }
            },
            (err, result) => {
                if (err) {
                    // console.log(err);
                    res.status(500).send({ message: err })
                }
                else {
                    res.send(result);
                    // console.log(result);
                }
            }
        )
    })


    app.post('/profileUpdate', (req, res) => {
        const profileData = req.body;
        patientsRegisteredCollection.updateOne(
            { _id: ObjectId(profileData._id) },
            {
                $set: { patientName: profileData.patientName, patientEmail: profileData.patientEmail, patientPassword: profileData.patientPassword, patientGender: profileData.patientGender, patientAge: profileData.patientAge, patientPhoneNumber: profileData.patientPhoneNumber, patientAddress: profileData.patientAddress, patientDisease: profileData.patientDisease, patientBloodGroup: profileData.patientBloodGroup },
                $currentDate: { "lastModified": true }
            },
            (err, result) => {
                if (err) {
                    // console.log(err);
                    res.status(500).send({ message: err })
                }
                else {
                    res.send(result);
                    // console.log(result);
                }
            }
        )
    })


    app.post('/ambulanceUpdate', (req, res) => {
        const ambulanceData = req.body;
        patientsRegisteredCollection.updateOne(
            { _id: ObjectId(ambulanceData._id) },
            {
                $set: { ambulanceDate: ambulanceData.ambulanceDate },
                $currentDate: { "lastModified": true }
            },
            (err, result) => {
                if (err) {
                    // console.log(err);
                    res.status(500).send({ message: err })
                }
                else {
                    res.send(result);
                    // console.log(result);
                }
            }
        )
    })



});


app.listen(process.env.PORT || port)