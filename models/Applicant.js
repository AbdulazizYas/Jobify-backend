const Job = require("./Job");
const JobSeeker = require("./JobSeeker");

module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define(
        "Applicant",
        {},
        //{timestamps: false};
      );
    
      Applicant.associate = (models) => {
        Job.belongsToMany(JobSeeker, { through: Applicant });
        JobSeeker.belongsToMany(Job, { through: Applicant });
      };
      
    return Applicant;
    };