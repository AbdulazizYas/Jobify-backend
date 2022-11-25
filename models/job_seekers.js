const sequelize = new Sequelize('sqlite::memory:');
const jop_seekers = sequelize.define(
  "jop_seekers",
  {
    seeker_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    }
  },
  {
    firstName: {
      type: Sequelize.STRING,
      primaryKey: false,
      allowNull: false
    }
  },
  {
    lastName: {
      type: Sequelize.STRING,
      primaryKey: false,
      allowNull: false
    }
  },
  {
    birthDate: {
      type: Sequelize.DATE,
      primaryKey: false,
      allowNull: false
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