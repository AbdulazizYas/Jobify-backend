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

  users.associate = (models) => {
    users.hasMany(models.administrator, {
        foreignKey: "admin_id",
        as: "admin_id"
    });
    users.hasMany(models.job_seekers, {
        foreignKey: "seeker_id",
        as: "seeker_id"
    });
    users.hasMany(models.companies, {
        foreignKey: "companyName",
        as: "companyName"
    });
  };

return users; 