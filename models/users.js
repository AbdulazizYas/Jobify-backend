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

const jop_seekers = sequelize.define(
  "jop_seekers",
  { 
    jId: {
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

const administrator = sequelize.define(
  "administrator",
  { 
    Id: {
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

