module.exports = (sequelize, DataTypes) => {
const JopSeeker = sequelize.define(
  "JopSeeker",
  {
    seeker_id: {
      type: sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have an id' },
      },
    }
  },
  {
    firstName: {
      type: sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have a first name' },
      }
    }
  },
  {
    lastName: {
      type: sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have a last name' },
      }
    }
  },
  {
    birthDate: {
      type: sequelize.DATE,
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
};