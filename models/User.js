const sequelize = new Sequelize('sqlite::memory:');
const User = sequelize.define(
    "User",
    {
        type: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a user must have a type' },
            }
        }
    },
    {
        userName: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                notNull: { msg: 'a user must have a username' },
            }
        }
    },
    {
        email: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a user must have an email' },
            }
        }
    },
    {
        password: {
            type: Sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a user must have a password' },
            }
        }
    },
    //{ timestamps: false }
);

User.associate = (models) => {
    User.hasOne(models.Administrator, {
        foreignKey: "admin_id",
        as: "admin_id"
    });
    User.hasOne(models.JobSeeker, {
        foreignKey: "seeker_id",
        as: "seeker_id"
    });
    User.hasOne(models.Company, {
        foreignKey: "companyName",
        as: "companyName"
    });
};

return User; 