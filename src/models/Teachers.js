import Sequelize from 'sequelize';
import dbObj from '../db/db-connect';
import TeachersModel from '../../models/teachers';

// const TeachersModel = (sequelize, DataTypes) => {
//     return sequelize.define('teacher', {
//       id: {
//         type: DataTypes.INTEGER(11),
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//         field: 'id'
//       },
//       email: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//         field: 'email'
//       },
//       createdAt: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         field: 'created_at'
//       },
//       updatedAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//         field: 'updated_at'
//       }
//     }, {
//       tableName: 'teachers',
//       timestamps: true,
//       createdAt: 'createdAt',
//       updatedAt: 'updatedAt'
//     });
//   };

export default (TeachersModel)(dbObj, Sequelize);
