import Sequelize from 'sequelize';

const sequelize = new Sequelize('govtech2', 'root', 'rootroot', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,
  dialectOptions: {
    dateStrings: true,
    typeCast(field, next) { // for reading from database
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },
});

export default sequelize;
