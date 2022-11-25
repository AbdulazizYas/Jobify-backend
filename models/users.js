const user = sequelize.define(
    "user",
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
    { 
        username: {
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
            type: Sequelize.INTEGER(10),
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
  { companyName: Sequelize.STRING },
  { location: Sequelize.STRING },
  //{ timestamps: false }
);

const administrator = sequelize.define(
  "administrator",
  { firstName: Sequelize.STRING },
  { lastName: Sequelize.STRING },
  { id: Sequelize.INTEGER(10) },
  //{ timestamps: false }
);

