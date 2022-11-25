const sequelize = new Sequelize('sqlite::memory:');
const administrator = sequelize.define(
  "administrator",
  {
    admin_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
    }
  },
  {
    firstName: {
      type: Sequelize.STRING,
      primaryKey: false
      ,
      allowNull: false,
    }
  },
  {
    lastName: {
      type: Sequelize.STRING,
      primaryKey: false,
      allowNull: false,
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
