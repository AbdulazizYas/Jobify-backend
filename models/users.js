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
    { password: Sequelize.STRING },
    { userName: Sequelize.STRING },
    { timestamps: false }
  );

const jop_seekers = sequelize.define(
  "jop_seekers",
  { firstName: Sequelize.STRING },
  { lastName: Sequelize.STRING },
  { birthDate: Sequelize.DATE },
  { timestamps: false }
);

const companies = sequelize.define(
  "companies",
  { companyName: Sequelize.STRING },
  { location: Sequelize.STRING },
  { timestamps: false }
);

const administrator = sequelize.define(
  "administrator",
  { firstName: Sequelize.STRING },
  { lastName: Sequelize.STRING },
  { id: Sequelize.INTEGER(10) },
  { timestamps: false }
);

