const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Patient = require('../models/Patient.models');
const Sequelize = require('sequelize');

const patient_controller = require('../controllers/patient.controller');
//const doctor_controller = require('../controllers/doctor.controller');
//const appointment_controller = require('../controllers/appointment.controller');
// Require the controllers 
//const item_controller = require('../controllers/item.controller');


// A simple test url to check that all of our files are communicating correctly
router.get('/test', patient_controller.test);

// List of patients
router.get('/get', patient_controller.listAllPatients);

// Add a new patient
router.post('/create', patient_controller.createPatient);

// Get a patient's details
router.get('/detail/:id', patient_controller.findPatientById);

// Update a patient's details
router.put('/update', patient_controller.updatePatient);

// Delete a patient
router.delete('/delete', patient_controller.deletePatient);

// Transfer a patient to a new doctor


module.exports = router;