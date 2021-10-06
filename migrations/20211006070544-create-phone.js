'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      manufactureYear: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.INTEGER
      },
      cpu: {
        type: Sequelize.STRING
      },
      diagonal: {
        type: Sequelize.FLOAT
      },
      nfc: {
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Phones');
  }
};