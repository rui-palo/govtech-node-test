
module.exports = (sequelize, DataTypes) => {
  const teachers_students = sequelize.define('teachers_students', {
    teacher_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
  }, {});
  teachers_students.associate = function (models) {
    // associations can be defined here
  };
  return teachers_students;
};
