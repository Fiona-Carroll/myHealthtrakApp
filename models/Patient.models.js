const Sequelize = require('sequelize');
const db = require('../config/database');

const Patient = db.define('patient', {
    
    Patient_Id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Patient_Name: {
        type: Sequelize.STRING
    },
    Patient_Gender: {
        type: Sequelize.STRING
    },
    Patient_Date_Of_Birth: {
        type: Sequelize.STRING
    },
    Patient_Age: {
        type: Sequelize.TEXT
    },
    Patient_Address: {
        type: Sequelize.STRING
    },
    Patient_Contact_Number: {
        type: Sequelize.INTEGER
    },
    Patient_Next_Of_Kin: {
        type: Sequelize.STRING
    },
    Patient_Next_Of_Kin_Contact_Number: {
        type: Sequelize.INTEGER
    },
    Patient_Allergies: {
        type: Sequelize.STRING
    },
    Patient_Other_Details: {
        type: Sequelize.STRING
    },
    Patient_Doctor_Id: {
        type: Sequelize.STRING
    }

  },
  
{
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false

  }
)

module.exports = Patient;