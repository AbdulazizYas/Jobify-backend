module.exports = (sequelize, DataTypes) => {
const Job = sequelize.define(
    "Job",
    { 
        job_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have an id' },
            }
        } ,

        jobName: {
            type: DataTypes.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a name' },
            }
        } ,
  
        city: {
            type: DataTypes.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a location' },
            }
        } ,

        datePosted: {
            type: DataTypes.DATE,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a date posted' },
            }
        } ,
  
        jobType: {
            type: DataTypes.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a location type' },
            }
        } ,

        entryLevel: {
            type: DataTypes.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have an entry level' },
            }
        } ,
   
        jobTime: {
            type: DataTypes.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a type' },
            }
        } ,
  
        description: {
            type: DataTypes.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a type' },
            }
        } 
    },
    // { 
    //     salary: {
    //         type: sequelize.INTEGER,
    //         primaryKey: false,
    //         allowNull: false,
    //         validate: {
    //             notNull: { msg: 'a job must have a salary' },
    //         }
    //     } 
    // },
    //{ timestamps: false }
  );

  Job.associate = (models) => {
    Job.belongsTo(models.Company, {
        foreignKey: "companyUserName",
        as: "company"
    });
    // Job.belongsToMany(models.JobSeeker, { through: models.Applicant });
    Job.hasMany(models.Applicant, {
        foreignKey: "jobID",
        as: "applications"
    });
  };
  
return Job;
};