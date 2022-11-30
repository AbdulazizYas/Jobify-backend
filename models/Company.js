module.exports = (sequelize, DataTypes) => {
const Company = sequelize.define(
  "Company",
  {
    companyName: {
      type: sequelize.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a  name' },
      },
    }
  },
  {
    location: {
      type: sequelize.STRING,
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
};