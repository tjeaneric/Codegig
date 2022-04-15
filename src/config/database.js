import Sequelize from 'sequelize';

// Passing a connection URI

const sequelize = new Sequelize('codegig', 'postgres', 123456, {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
