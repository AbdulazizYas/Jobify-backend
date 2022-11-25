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

  job_seekers.associate = (models) => {
    job_seekers.belongTo(models.users, {
        foreignKey: "username",
        as: "username"
    });
  };

return job_seekers;