const Patient = require('../models/Patient.models');
//const Doctor = require('../models/Doctor.models');
//const Appointment = require('../models/Appointment.models');


//Simple version, without validation 
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// List all Patients
exports.listAllPatients = function (req, res, next) {
    // req.body.Patient_Id
    var doctorFilter = {};
    if(req.query.doctorId){
        doctorFilter = { where: { Patient_Doctor_Id: req.query.doctorId}};
    }
    Patient.findAll(doctorFilter) 
    .then(patient => {

        //console.log(patient);
        /* res.render('patient', {
            patient
        }); */
        res.status(200).json({patient});
    })
    .catch(err => {
        console.log(err.message);
        next(err);
    }); 
}               

// Add a new patient
exports.createPatient = function (req, res) {

    Patient.create(
        {
            Patient_Id: req.body.Patient_Id,
            Patient_Name: req.body.Patient_Name,
            Patient_Gender: req.body.Patient_Gender,
            Patient_Date_Of_Birth: req.body.Patient_Date_Of_Birth,
            Patient_Age: req.body.Patient_Age,
            Patient_Address: req.body.Patient_Address,
            Patient_Contact_Number: req.body.Patient_Contact_Number,
            Patient_Next_Of_Kin: req.body.Patient_Next_Of_Kin,
            Patient_Next_Of_Kin_Contact_Number: req.body.Patient_Next_Of_Kin_Contact_Number,
            Patient_Allergies: req.body.Patient_Allergies,
            Patient_Other_Details: req.body.Patient_Other_Details
        }).then(patient => {
            res.status(200).json(patient);
        });
    }

// List a particular patient
exports.findPatientById = function (req, res) {
    console.log(req.params.id);
    Patient.findByPk(req.params.id)
    .then(patient => {
        console.log(patient);
        res.status(200).json({patient});
    })
     .catch(err => console.log(err));
        
};



/*// Update Patient Details
Patient.find({ where: { Patient_Id: '1234567Z' } })
  .on('success', function (patient) {
    // Check if record exists in db
    if (patient) {
      patient.update({
        Patient_Id: '2345678A'
      })
      .success(function () {})
    }
  })*/


/*// Update a patient's details
exports.updatePatient = function(req, res){
    Patient.findByIdAndUpdate(req.query.id, {$set: req.body}, function (err, patient) {
          if (err){
            return next(err);
          }
          res.status(200).send('Patient details updated.');
      });
}*/

exports.updatePatient = function(req, res, next){
    console.log("update works");
    return Patient.update(       
        {
            Patient_Name: req.body.Patient_Name,
            Patient_Gender: req.body.Patient_Gender,
            Patient_Date_Of_Birth: req.body.Patient_Date_Of_Birth,
            Patient_Age: req.body.Patient_Age,
            Patient_Address: req.body.Patient_Address,
            Patient_Contact_Number: req.body.Patient_Contact_Number,
            Patient_Next_Of_Kin: req.body.Patient_Next_Of_Kin,
            Patient_Next_Of_Kin_Contact_Number: req.body.Patient_Next_Of_Kin_Contact_Number,
            Patient_Allergies: req.body.Patient_Allergies,
            Patient_Other_Details: req.body.Patient_Other_Details,
            Patient_Doctor_Id: req.body.Patient_Doctor_Id
    },{ where: { Patient_Id: req.body.Patient_Id}}       
        ).then(patient => {
            res.status(200).json(patient);}
            ).catch(e => {
        console.log(e);
        next();
    });
};


/*// Delete a patient
exports.deletePatient = function (req, res) {
    Patient.findByIdAndRemove(req.query.Patient_Id, function (err) {
        if (err){
          return next(err);
        }
        res.send('Patient Deleted successfully!');
    })
};*/

// Delete a Patient
exports.deletePatient = function (req, res, next) {
    Patient.destroy({
        where: {Patient_Id: req.body.Patient_Id} , 
        })
        .then(deletedPatient => {
            console.log(`Has Patient with Id: 1234567Z been deleted? 1 means yes, 0 means no: ${deletedPatient}`);
            res.json({"deleted":true});
          });
    }; 


