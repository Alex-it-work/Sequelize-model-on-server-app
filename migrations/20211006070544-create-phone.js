'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      manufactureYear: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ram: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cpu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diagonal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      nfc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Phones');
  },
};
