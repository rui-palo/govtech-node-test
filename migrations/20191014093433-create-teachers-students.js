
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('teachers_students', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    teacher_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    student_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('teachers_students'),
};
