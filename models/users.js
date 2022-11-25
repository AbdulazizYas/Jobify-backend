const users = sequelize.define(
    "users",
    { 
        userName: {
            type: Sequelize.STRING,
            primaryKey: true
        } 
    },
    { 
        email: {
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