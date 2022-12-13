module.exports = (sequelize, DataTypes) => {
const Administrator = sequelize.define(
  "Administrator",
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
  //   admin_id: {
  //     type: sequelize.UUID,
  //     primaryKey: true,
  //     allowNull: false,
  //     validate: {
  //       notNull: { msg: 'admin must have an id' },
       
  //     },
  //   }
  // },

    firstName: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'user must have a first name' },
      },
    },

    lastName: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'user must have a last name' },
      },
    }
  },
  //{ timestamps: false }
);

// Administrator.associate = (models) => {
//   Administrator.belongTo(models.User, {
//     foreignKey: "userName",
//     as: "userName"
//   });

// };

return Administrator;
};