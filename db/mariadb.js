const { Sequelize } = require('sequelize');

const mariadbConection = new Sequelize(
    'parcial', 
    'root',
    'mypassword',
    {
        host: process.env.MYMARIADB_DB_HOST,
        dialect: 'mariadb'
    }
);


module.exports = mariadbConection;