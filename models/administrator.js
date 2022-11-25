const sequelize = new Sequelize('sqlite::memory:');
const administrator = sequelize.define(
  "administrator",
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

administrator.associate = (models) => {
  administrator.belongTo(models.users, {
    foreignKey: "userName",
    as: "userName"
  });

};

return administrator;
