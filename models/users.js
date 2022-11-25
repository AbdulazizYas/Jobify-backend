const sequelize = new Sequelize('sqlite::memory:');
const users = sequelize.define(
    "users",
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

users.associate = (models) => {
    users.hasMany(models.administrator, {
        foreignKey: "admin_id",
        as: "admin_id"
    });
    users.hasMany(models.job_seekers, {
        foreignKey: "seeker_id",
        as: "seeker_id"
    });
    users.hasMany(models.companies, {
        foreignKey: "companyName",
        as: "companyName"
    });
};

return users; 