const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Doctor = require('../models/Doctor.models');
const Sequelize = require('sequelize');

const doctor_controller = require('../controllers/doctor.controller');
//const patient_controller = require('../controllers/patient.controller');
//const appointment_controller = require('../controllers/appointment.controller');

// A simple test url to check that all of our files are communicating correctly
//router.get('/test', item_controller.test);

// List of doctors
router.get('/get', doctor_controller.listAllDoctors); //localhost:5000/doctor/get

// Add a new doctor
//outer.post('/add', doctor_controller.addDoctor);

// Create a new doctor
router.post('/create', doctor_controller.createDoctor);

// Get a doctor's details
router.get('/detail/:id', doctor_controller.findDoctorById);

// Update a doctor's details
router.put('/update', doctor_controller.updateDoctor);

// Delete a doctor
router.delete('/delete', doctor_controller.deleteDoctor);

module.exports = router;
    