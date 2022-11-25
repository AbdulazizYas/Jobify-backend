const sequelize = new Sequelize('sqlite::memory:');
const companies = sequelize.define(
  "companies",
  {
    companyName: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a  name' },
      },
    }
  },
  {
    location: {
      type: Sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a location' },
      },
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