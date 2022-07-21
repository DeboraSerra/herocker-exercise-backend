require('dotenv/config');

const { POSTGRES_PASS, DB_USER, DB, DB_PORT, DB_HOST } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: POSTGRES_PASS,
    database: DB,
    host: DB_HOST,
    PORT: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: POSTGRES_PASS,
    database: 'database_test',
    host: DB_HOST,
    PORT: DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: POSTGRES_PASS,
    database: 'database_test',
    host: DB_HOST,
    PORT: DB_PORT,
    dialect: 'postgres',
  },
};
