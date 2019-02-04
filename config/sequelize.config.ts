import { Sequelize } from 'sequelize';
const Sequelize = require('sequelize');

const sequelize: Sequelize = new Sequelize(
    'taskdb',
    'root',
    'root',
    {
        host: 'localhost', //'35.233.138.119',
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch( (err: any) => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;