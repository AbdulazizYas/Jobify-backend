require('dotenv').config();

console.log(process.env.DATABASE_USERNAME);
console.log(process.env.DATABASE_DIALECT);

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT
  }
};