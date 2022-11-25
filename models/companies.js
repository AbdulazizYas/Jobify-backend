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
companies.associate = (models) => {
  companies.belongTo(models.users, {
    foreignKey: "userName",
    as: "userName"
  });
  companies.hasMany(models.jobs, {
    foreignKey: "job_id",
    as: "job_id"
  });
};

return companies;