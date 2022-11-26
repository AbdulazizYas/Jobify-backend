const sequelize = new Sequelize('sqlite::memory:');
const Job = sequelize.define(
    "Job",
    { 
        job_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have an id' },
            }
        } 
    },
    { 
        jobName: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a name' },
            }
        } 
    },
    { 
        location: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a location' },
            }
        } 
    },
    { 
        entryLevel: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have an entry level' },
            }
        } 
    },
    { 
        salary: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a job must have a salary' },
            }
        } 
    },
    //{ timestamps: false }
  );

  Job.associate = (models) => {
    Job.belongTo(models.Company, {
        foreignKey: "companyName",
        as: "companyName"
    });
    Job.hasMany(models.JobSeeker, {
        foreignKey: "seeker_id",
        as: "seeker_id"
    })
  };
  
return Job;