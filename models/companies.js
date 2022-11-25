const companies = sequelize.define(
    "companies",
    { 
      companyName: {
          type: Sequelize.STRING,
          primaryKey: true
      }  
    },
    { 
      location: {
          type: Sequelize.STRING,
          primaryKey: false
      }  
    },
    //{ timestamps: false }
  );