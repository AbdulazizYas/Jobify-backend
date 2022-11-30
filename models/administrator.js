module.exports = (sequelize, DataTypes) => {
const Administrator = sequelize.define(
  "Administrator",
  {
    admin_id: {
      type: sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'admin must have an id' },
       
      },
    }
  },
  {
    firstName: {
      type: sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'user must have a first name' },
      },
    }
  },
  {
    lastName: {
      type: sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'user must have a last name' },
      },
    }
  },
  //{ timestamps: false }
);

Administrator.associate = (models) => {
  Administrator.belongTo(models.User, {
    foreignKey: "userName",
    as: "userName"
  });

};

return Administrator;
};