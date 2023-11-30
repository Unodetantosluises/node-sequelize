import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'projectsDB', 
    'postgres', 
    '123456', 
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);
