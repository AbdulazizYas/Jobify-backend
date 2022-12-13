module.exports = (sequelize, DataTypes) => {
const Seeker = sequelize.define(
  "Seeker",
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
  
);

Seeker.associate = (models) => {
  Seeker.hasMany(models.Applicant, {
      foreignKey: "seekerUsername",
      as: "applications"
    });
};

return Seeker;
};