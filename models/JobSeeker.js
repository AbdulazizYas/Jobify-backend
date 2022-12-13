module.exports = (sequelize, DataTypes) => {
const JopSeeker = sequelize.define(
  "JopSeeker",
  {
    userName: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: { msg: 'a user must have a username' },
        }
    },

    email: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
        validate: {
            notNull: { msg: 'a user must have an email' },
        }
    },

    password: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
        validate: {
            notNull: { msg: 'a user must have a password' },
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

    firstName: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have a first name' },
      }
    },

    lastName: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'seeker must have a last name' },
      }
    },

    skills: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a location' },
      },
    },

    experiences: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a location' },
      },
    },

    education: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a location' },
      },
    }
  },
  //{ timestamps: false }
);

JopSeeker.associate = (models) => {
  // JopSeeker.belongTo(models.User, {
  //   foreignKey: "username",
  //   as: "username"
  // });
  // JopSeeker.belongsToMany(models.Job, { through: models.Applicant });
  JopSeeker.hasMany(models.Applicant, {
      foreignKey: "seekerUsername",
      as: "applications"
    });
};

return JopSeeker;
};