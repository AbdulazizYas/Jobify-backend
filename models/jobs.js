const jobs = sequelize.define(
    "jobs",
    { 
        jobName: {
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
        password: {
            type: Sequelize.STRING,
            primaryKey: false
        } 
    },
    //{ timestamps: false }
  );