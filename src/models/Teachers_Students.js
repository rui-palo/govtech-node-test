import Sequelize from "sequelize";
import dbObj from "../db/db-connect";

const TeachersStudentsModel = (sequelize, DataTypes) => {
    return sequelize.define('teacherStudent', {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      studentId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'student_id'
      },
      teacherId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'teacher_id'
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
      tableName: 'teachers_students',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    });
  };

  export default (TeachersStudentsModel)(dbObj, Sequelize)
