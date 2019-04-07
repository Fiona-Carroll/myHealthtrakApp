const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Appointment = require('../models/Appointment.models');
const Sequelize = require('sequelize');

const appointment_controller = require('../controllers/appointment.controller');
//const doctor_controller = require('../controllers/doctor.controller');
//const patient_controller = require('../controllers/patient.controller');

// A simple test url to check that all of our files are communicating correctly
router.get('/test', appointment_controller.test);

// List of appointments
router.get('/get', appointment_controller.listAllAppointments); //localhost:5000/appointment/get

// Add a new appointment
router.post('/create', appointment_controller.createAppointment);

// Get Details of an appointment
router.get('/detail/:id', appointment_controller.findAppointmentById);


module.exports = router;