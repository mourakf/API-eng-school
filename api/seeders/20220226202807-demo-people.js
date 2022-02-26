'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('People', [{
        names: 'Ana Souza',
        active: true,
        email: 'ana@ana.com',
        roles: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        names: 'Marcos Cintra',
        active: true,
        email: 'marcos@marcos.com',
        roles: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        names: 'Felipe Cardoso',
        active: true,
        email: 'felipe@felipe.com',
        roles: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        names: 'Sandra Gomes',
        active: false,
        email: 'sandra@sandra.com',
        roles: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        names: 'Paula Morais',
        active: true,
        email: 'paula@paula.com',
        roles: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        names: 'Sergio Lopes',
        active: true,
        email: 'sergio@sergio.com',
        roles: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});

  }
};