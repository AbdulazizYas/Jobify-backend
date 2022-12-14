module.exports = (sequelize, DataTypes) => {
const Company = sequelize.define(
  "Company",
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
  
    country: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a location' },
      },
    },

    city: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a location' },
      },
    },

    address: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'company must have a location' },
      },
    }
  },

);
Company.associate = (models) => {
  Company.hasMany(models.Job, {
    foreignKey: "companyUserName",
    as: "jobs"
  });
};

return Company;
};