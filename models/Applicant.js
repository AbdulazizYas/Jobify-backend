module.exports = (sequelize, DataTypes) => {
    const Applicant = sequelize.define(
        "Applicant",
        {},
        //{timestamps: false};
      );
    
      Applicant.associate = (models) => {
        Applicant.belongsTo(models.Job);
        Applicant.belongsTo(models.JopSeeker);
        // Job.belongsToMany(JobSeeker, { through: Applicant });
        // JobSeeker.belongsToMany(Job, { through: Applicant });
      };
      
    return Applicant;
    };