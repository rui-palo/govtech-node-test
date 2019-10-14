import Sequelize from "sequelize";
import dbObj from "../db/db-connect";

const StudentsModel = (sequelize, DataTypes) => {
    return sequelize.define('student', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'email'
      },
      suspended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        field: 'is_suspended'
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updated_at'
      }
    }, {
      tableName: 'students',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    });
  };

  export default (StudentsModel)(dbObj, Sequelize)
