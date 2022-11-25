const sequelize = new Sequelize('sqlite::memory:');
const jop_seekers = sequelize.define(
  "jop_seekers",
  {
    seeker_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have an id' },
      },
    }
  },
  {
    firstName: {
      type: Sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have a first name' },
      }
    }
  },
  {
    lastName: {
      type: Sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have a last name' },
      }
    }
  },
  {
    birthDate: {
      type: Sequelize.DATE,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have a birth date' },
      }
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