const Appointment = require('../models/Appointment.models');
//const Doctor = require('../models/Doctor.models');
//const Patient = require('../models/Patient.models');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

/* exports.createItem = function (req, res) {

    let item = new Item(
        {
            itemName: req.body.itemName,
            itemDescription: req.body.itemDescription,
            productList: req.body.productList,
            instructions: req.body.instructions
        }
    );

    item.save(function (err) {
        if (err) {
          // res.send(err);
          return next(err);
        }
        res.send('Product Created successfully')
    })
};
 */

// Get Appointments List 
exports.listAllAppointments = function (req, res) {
console.log(Object.keys(req.query).length)
// req.body.Patient_Id
    var appointmentFilter = {};
    // if(req.query.doctorId || req.query.patientId){
    //     appointmentFilter = { where: { Appointment_Doctor_Id: req.query.doctorId} || { Appointment_Patient_Id: req.query.patientId}};
    // }
    var whereFilter = {};
    var filterList = {};
    if(Object.keys(req.query).length != 0){
        for(var i = 0; i<Object.keys(req.query).length; i++) {
            if(req.query.patientId){
                filterList["Appointment_Patient_Id"] = req.query.patientId;
            }
            if(req.query.doctorId){
                filterList["Appointment_Doctor_Id"] = req.query.doctorId;
            
            }
        }
        whereFilter["where"] = filterList;
    }
    
    Appointment.findAll(whereFilter) 
    .then(appointment => {
        //console.log(appointment);
        //res.render('appointment', {
          //  appointment
        //});
        res.status(200).json({appointment});
    })
    .catch(err => console.log(err));

};

// Add a new appointment form
exports.getAppointmentForm = function (req, res) {
    console.log(appointment);
    res.render('appointment', {
        appointment
    });
}

// Add a new appointment
exports.createAppointment = function (req, res) {
    console.log("CREATE APPOINTMENT");
    Appointment.create(
        {
            Appointment_Date: req.body.Appointment_Date,
            Appointment_Symptoms: req.body.Appointment_Symptoms,
            Appointment_Diagnosis: req.body.Appointment_Diagnosis,
            Appointment_Treatment: req.body.Appointment_Treatment,
            Appointment_Prescription: req.body.Appointment_Prescription,
            Appointment_Other_Details: req.body.Appointment_Other_Details,
            Appointment_Medical_Certificate: req.body.Appointment_Medical_Certificate,
            Appointment_Vaccination: req.body.Appointment_Vaccination,
            Appointment_Lab_Tests: req.body.Appointment_Lab_Tests,
            Appointment_Hospitalisation: req.body.Appointment_Hospitalisation,
            Appointment_Specialist_Referral: req.body.Appointment_Specialist_Referral,
            Appointment_Patient_Id: req.body.Appointment_Patient_Id,
            Appointment_Doctor_Id: req.body.Appointment_Doctor_Id
        }).then(appointment => {
            res.status(200).json(appointment);
        });
    }
        

// List a particular appointment
exports.findAppointmentById = function (req, res) {
    console.log(req.params.id);
    Appointment.findByPk(req.params.id)
    .then(appointment => {
        console.log(appointment);
        res.status(200).json({appointment});
    })
     .catch(err => console.log(err));
        
};

/* // Get Appointment Details
exports.getAppointmentDetail = function (req, res) {
    Appointment.findById(req.query.id, function (err, item) {
        if (err){
          // res.send(err);
          return next(err);
        }
        res.send(appointment);
    })
}; */

