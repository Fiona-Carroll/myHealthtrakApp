const Sequelize = require('sequelize');
const db = require('../config/database');

const Doctor = db.define('doctor', {
    
    Doctor_Id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    Doctor_Name: {
        type: Sequelize.STRING
    },
    Doctor_Gender: {
        type: Sequelize.STRING
    },
    Doctor_Date_Of_Birth: {
        type: Sequelize.STRING
    },
    Doctor_Age: {
        type: Sequelize.STRING
    },
    Doctor_Address: {
        type: Sequelize.STRING
    },
    Doctor_Contact_Number: {
        type: Sequelize.STRING
    },
    Doctor_Other_Details: {
        type: Sequelize.STRING
    }
},
{
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false
  }
)

module.exports = Doctor;