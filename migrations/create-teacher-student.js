module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teachers_students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11)
      },
      teacher_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11)
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teachers_students');
  }
};