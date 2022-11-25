const jop_seekers = sequelize.define(
    "jop_seekers",
    { 
      seeker_id: {
          type: Sequelize.UUID,
          primaryKey: true
      } 
    },
    { 
      firstName: {
          type: Sequelize.STRING,
          primaryKey: false
      } 
    },
    { 
      lastName: {
          type: Sequelize.STRING,
          primaryKey: false
      }  
    },
    { 
      birthDate: {
          type: Sequelize.DATE,
          primaryKey: false
      } 
    },
    //{ timestamps: false }
  );