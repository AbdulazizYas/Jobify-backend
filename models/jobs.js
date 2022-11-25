const jobs = sequelize.define(
    "jobs",
    { 
        job_id: {
            type: Sequelize.UUID,
            primaryKey: true
        } 
    },
    { 
        jobName: {
            type: Sequelize.STRING,
            primaryKey: false
        } 
    },
    { 
        location: {
            type: Sequelize.STRING,
            primaryKey: false
        } 
    },
    { 
        entryLevel: {
            type: Sequelize.STRING,
            primaryKey: false
        } 
    },
    { 
        salary: {
            type: Sequelize.INTEGER,
            primaryKey: false
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