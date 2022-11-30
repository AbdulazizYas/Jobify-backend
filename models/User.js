module.exports = (sequelize, DataTypes) => {
const User = sequelize.define(
    "User",

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
    {
        type: {
            type: sequelize.STRING,
            primaryKey: false,
            allowNull: false,
            validate: {
                notNull: { msg: 'a user must have a type' },
            }
        }
    }
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
};