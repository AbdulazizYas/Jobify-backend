const sequelize = new Sequelize('sqlite::memory:');
const Company = sequelize.define(
  "Company",
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
Company.associate = (models) => {
  Company.belongTo(models.User, {
    foreignKey: "userName",
    as: "userName"
  });
  Company.hasMany(models.Job, {
    foreignKey: "job_id",
    as: "job_id"
  });
};

return Company;