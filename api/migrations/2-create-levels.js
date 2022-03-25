'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Levels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc_level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // class_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   // referencia pelo modelo e qual chave a ser associado
      //   references: {
      //     model: 'Classes',
      //     key: 'id'
      //   }
      // },
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
    await queryInterface.dropTable('Levels');
  }
};