const Doctor = require('../models/Doctor.models');
//const Appointment = require('../models/Appointment.models');
//const Patient = require('../models/Patient.models');


//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// List all doctors
exports.listAllDoctors = function (req, res) {

    Doctor.findAll()
    .then(doctor => {
        console.log(doctor);
        //res.render('doctor', {
        //    doctor
        //});
        res.status(200).json({doctor});
    })
    .catch(err => console.log(err));

};

// List a particular doctor
exports.findDoctorById = function (req, res) {
    console.log(req.params.id);
    Doctor.findByPk(req.params.id)
    .then(doctor => {
        //doctor.updateAtt...
        console.log(doctor);
        res.status(200).json({doctor});
    })
     .catch(err => console.log(err));
        
};



/* 
        Doctor_Id: '3821927T',
        Doctor_Name: 'Dr Megan White',
        Doctor_Gender: 'Female',
        Doctor_Date_Of_Birth: '10/07/1984',
        Doctor_Age: '34',
        Doctor_Address: 'The Grange Medical Centre, Kilrush Road, Ennis, County Clare',
        Doctor_Contact_Number: '0873921788',
        Doctor_Other_Details: 'n/a' */
    

    

/*// Update a doctor's details
 exports.updateDoctor = function(req, res){
    Doctor.findByIdAndUpdate(req.query.Doctor_Id, {$set: req.body}, function (err, doctor) {
          if (err){
            return next(err);
          }
          res.status(200).send('Doctor details updated.');
      });
} */

exports.updateDoctor = function(req, res){
    return Doctor.update(       
        {
            Doctor_Name: req.body.Doctor_Name,
            Doctor_Gender: req.body.Doctor_Gender,
            Doctor_Date_Of_Birth: req.body.Doctor_Date_Of_Birth,
            Doctor_Age: req.body.Doctor_Age,
            Doctor_Address: req.body.Doctor_Address,
            Doctor_Contact_Number: req.body.Doctor_Contact_Number,
            Doctor_Other_Details: req.body.Doctor_Other_Details
    },{ where: { Doctor_Id: req.body.Doctor_Id}}       
        ).then(doctor => {
            res.status(200).json(doctor);}
            ).catch(e => {
        console.log(e);
    });
};

exports.createDoctor = function(req,res){
    console.log(req.body.Doctor_Id);
    Doctor.create({
            Doctor_Id: req.body.Doctor_Id,
            Doctor_Name: req.body.Doctor_Name,
            Doctor_Gender: req.body.Doctor_Gender,
            Doctor_Date_Of_Birth: req.body.Doctor_Date_Of_Birth,
            Doctor_Age: req.body.Doctor_Age,
            Doctor_Address: req.body.Doctor_Address,
            Doctor_Contact_Number: req.body.Doctor_Contact_Number,
            Doctor_Other_Details: req.body.Doctor_Other_Details
    }).then(doctor => {
        res.status(200).json(doctor);
    });
}


// Delete a doctor
exports.deleteDoctor = function (req, res) {
    Doctor.destroy({
        where: {Doctor_Id: req.body.Doctor_Id} , 
        })
        .then(deletedDoctor => {
            console.log(`Has Doctor been deleted? 1 means yes, 0 means no: ${deletedDoctor}`);
            res.json({"deleted":true});
          });
    }; 


