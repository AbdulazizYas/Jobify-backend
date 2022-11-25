const sequelize = new Sequelize('sqlite::memory:');
const jobs = sequelize.define(
    "jobs",
    { 
        job_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false
        } 
    },
    { 
        jobName: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false
        } 
    },
    { 
        location: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false
        } 
    },
    { 
        entryLevel: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false
        } 
    },
    { 
        salary: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            allowNull: false
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