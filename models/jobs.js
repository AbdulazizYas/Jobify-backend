const sequelize = new Sequelize('sqlite::memory:');
const jobs = sequelize.define(
    "jobs",
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

  jobs.associate = (models) => {
    jobs.belongTo(models.companies, {
        foreignKey: "companyName",
        as: "companyName"
    });
  };
  
return jobs;