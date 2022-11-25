const sequelize = new Sequelize('sqlite::memory:');
const JopSeeker = sequelize.define(
  "JopSeeker",
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

JopSeeker.associate = (models) => {
  JopSeeker.belongTo(models.User, {
    foreignKey: "username",
    as: "username"
  });
};

return JopSeeker;