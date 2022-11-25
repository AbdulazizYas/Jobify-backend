const sequelize = new Sequelize('sqlite::memory:');
const Administrator = sequelize.define(
  "Administrator",
  {
    admin_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'admin must have an id' },
       
      },
    }
  },
  {
    firstName: {
      type: Sequelize.STRING,
      primaryKey: false,
      allowNull: false,
      validate: {
        notNull: { msg: 'user must have a first name' },
      },
    }
  },
  {
    lastName: {
      type: Sequelize.STRING,
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
