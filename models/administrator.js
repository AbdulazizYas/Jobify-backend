const administrator = sequelize.define(
    "administrator",
    { 
      admin_id: {
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
    //{ timestamps: false }
  );
  