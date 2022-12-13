module.exports = (sequelize, DataTypes) => {
const Job = sequelize.define(
    "Job",
    { 
        job_id: {
            type: sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have an id' },
            }
        } 
    },
    { 
        jobName: {
            type: sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a name' },
            }
        } 
    },
    { 
        location: {
            type: sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a location' },
            }
        } 
    },
    { 
        datePosted: {
            type: sequelize.DATE,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a date posted' },
            }
        } 
    },
    { 
        locationType: {
            type: sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a location type' },
            }
        } 
    },
    { 
        entryLevel: {
            type: sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have an entry level' },
            }
        } 
    },
    { 
        jobType: {
            type: sequelize.STRING,
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
    Job.belongTo(models.companies, {
        foreignKey: "companyName",
        as: "companyName"
    });
    Job.belongsToMany(JobSeeker, { through: Applicant });
  };
  
return Job;
};

await Job.sync();