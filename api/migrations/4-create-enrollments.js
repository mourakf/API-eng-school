'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // referencia pelo modelo e qual chave a ser associado
        references: {
          model: 'People',
          key: 'id'
        }
      },
      class_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // referencia pelo modelo e qual chave a ser associado
        references: {
          model: 'Classes',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enrollments');
  }
};