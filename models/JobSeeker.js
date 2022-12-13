module.exports = (sequelize, DataTypes) => {
const JopSeeker = sequelize.define(
  "JopSeeker",
  {
    userName: {
        type: sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: { msg: 'a user must have a username' },
        }
    }
},
{
    email: {
        type: sequelize.STRING,
        primaryKey: false,
        allowNull: false,
        validate: {
            notNull: { msg: 'a user must have an email' },
        }
    }
},
{
    password: {
        type: sequelize.STRING,
        primaryKey: false,
        allowNull: false,
        validate: {
            notNull: { msg: 'a user must have a password' },
        }
    }
},
  // {
  //   seeker_id: {
  //     type: sequelize.UUID,
  //     primaryKey: true,
  //     allowNull: false,
  //     validate: {
  //       notNull: { msg: 'seeker must have an id' },
  //     },
  //   }
  // },
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
  // JopSeeker.belongTo(models.User, {
  //   foreignKey: "username",
  //   as: "username"
  // });
  JopSeeker.belongsToMany(Job, { through: Applicant });
};

return JopSeeker;
};

await JopSeeker.sync();