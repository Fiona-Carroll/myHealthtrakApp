const Sequelize = require('sequelize');
const db = require('../config/database');

const Appointment = db.define('appointment', {
    
    Appointment_Id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true

    },
    Appointment_Date: {
        type: Sequelize.DATE
    },
    Appointment_Symptoms: {
        type: Sequelize.TEXT
    },
    Appointment_Diagnosis: {
        type: Sequelize.TEXT
    },
    Appointment_Treatment: {
        type: Sequelize.TEXT
    },
    Appointment_Prescription: {
        type: Sequelize.TEXT
    },
    Appointment_Other_Details: {
        type: Sequelize.TEXT
    },
    Appointment_Medical_Certificate: {
        type: Sequelize.TEXT
    },
    Appointment_Vaccination: {
        type: Sequelize.TEXT
    },
    Appointment_Lab_Tests: {
        type: Sequelize.TEXT
    },
    Appointment_Hospitalisation: {
        type: Sequelize.TEXT
    },
    Appointment_Specialist_Referral: {
        type: Sequelize.TEXT
    },
    Appointment_Patient_Id: { 
        type: Sequelize.STRING
    },
    Appointment_Doctor_Id: {
        type: Sequelize.STRING
    }
},
{
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
  }
)

module.exports = Appointment;